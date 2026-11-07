import React, { useRef, useState, useEffect, useCallback, memo } from 'react';
import { Play, Pause } from 'lucide-react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4';

export const GlobalBackgroundVideo: React.FC = memo(() => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const userPausedRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Initialize HTML5 video element with muted, playsInline, and loop on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React's JSX attributes (like muted) do not always bind to the DOM properties
    // in all browsers. Setting DOM properties explicitly guarantees compliance with
    // browser autoplay policies and avoids the 1-second autoplay cutoff.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    // Trigger initial playback
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser restricted unprompted autoplay, wait for first user gesture
          setIsPlaying(!video.paused);
        });
    }

    // Single-fire gesture listener to start video if initial autoplay was blocked
    const handleFirstGesture = () => {
      if (video && video.paused && !userPausedRef.current) {
        video.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true, passive: true });

    // Sync button state on native play / pause events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => {
      if (userPausedRef.current) {
        setIsPlaying(false);
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  // Use ref to directly control playback without resetting or remounting
  const togglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <>
      {/* 1. Fixed Viewport Video Layer: z-index 0, pointer-events: none */}
      <div
        className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        {/* HTML5 Video element initialized with playsInline, muted, loop, and autoPlay */}
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>

      {/* 2. Layered subtle overlays: uniform 15% tint + subtle horizontal gradient on left behind text */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        {/* Uniform 15% black overlay as specified */}
        <div className="absolute inset-0 bg-black/15" />
        {/* Horizontal dark gradient protecting text on the left while preserving full luminosity of the portal on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      </div>

      {/* 3. Accessible Fixed Pause/Play Control (near bottom-right): z-index 30 */}
      <div className="fixed bottom-6 right-6 z-30 pointer-events-auto">
        <button
          type="button"
          onClick={togglePlayback}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/85 border border-white/15 hover:border-white/30 text-[#E0E4EA] hover:text-[#F5F5F3] text-[12px] font-mono backdrop-blur-md transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D8E7] cursor-pointer"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? (
            <>
              <Pause size={12} className="text-[#67D8E7]" />
              <span className="hidden sm:inline">Pause video</span>
            </>
          ) : (
            <>
              <Play size={12} className="text-[#B6A4E8]" />
              <span className="hidden sm:inline">Play video</span>
            </>
          )}
        </button>
      </div>
    </>
  );
});

GlobalBackgroundVideo.displayName = 'GlobalBackgroundVideo';
