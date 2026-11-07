import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';

interface HeroVideoProps {
  className?: string;
  overlayVariant?: 'default' | 'dense';
  objectPosition?: string;
}

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4';

export const HeroVideo: React.FC<HeroVideoProps> = ({
  className = '',
  overlayVariant = 'default',
  objectPosition = 'object-center lg:object-[65%_center]',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [userPaused, setUserPaused] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check user preferences: reduced-motion & save-data
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const checkMotion = () => {
      if (motionQuery.matches) {
        setPrefersReducedMotion(true);
        setIsPlaying(false);
      }
    };
    checkMotion();
    motionQuery.addEventListener?.('change', checkMotion);

    // Check Data Saver
    const nav = navigator as unknown as { connection?: { saveData?: boolean } };
    if (nav.connection?.saveData) {
      setPrefersReducedMotion(true);
      setIsPlaying(false);
    }

    return () => {
      motionQuery.removeEventListener?.('change', checkMotion);
    };
  }, []);

  // Handle Video Autoplay & Controls
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion || hasError) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy
          setIsPlaying(false);
        });
    }
  }, [prefersReducedMotion, hasError]);

  // Pause when outside viewport or tab is inactive
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handleVisibility = () => {
      if (document.hidden) {
        if (!video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      } else {
        if (!userPaused && !prefersReducedMotion) {
          video.play().catch(() => {});
          setIsPlaying(true);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              if (!video.paused) {
                video.pause();
                setIsPlaying(false);
              }
            } else {
              if (!userPaused && !prefersReducedMotion && !document.hidden) {
                video.play().catch(() => {});
                setIsPlaying(true);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(container);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      observer?.disconnect();
    };
  }, [userPaused, prefersReducedMotion]);

  const togglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setUserPaused(true);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
      setUserPaused(false);
    }
  }, [isPlaying]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Fallback & Poster gradient (always visible underneath) */}
      <div className="absolute inset-0 bg-[#07090E]">
        {/* Subtle deep ambient glow under video */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#22D3EE]/15 via-[#A78BFA]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#0C1018] to-[#121824] pointer-events-none" />
      </div>

      {/* Real HTML video element */}
      {!prefersReducedMotion && !hasError && (
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover ${objectPosition} transition-opacity duration-1000 ${
            isLoaded ? 'opacity-85' : 'opacity-0'
          }`}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      {/* Layered Overlays for Cinematic Readability (Video breathes without being masked out) */}
      {/* 1. Horizontal dark gradient behind text (desktop left-to-right) */}
      <div
        className={`absolute inset-0 transition-opacity pointer-events-none ${
          overlayVariant === 'dense'
            ? 'bg-gradient-to-r from-[#07090E] via-[#07090E]/80 to-[#07090E]/40'
            : 'bg-gradient-to-r from-[#07090E]/95 via-[#07090E]/75 md:via-[#07090E]/55 to-transparent'
        }`}
      />

      {/* 2. Mobile vertical gradient protection so text is always razor sharp */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#07090E]/85 via-[#07090E]/60 to-[#07090E] pointer-events-none" />

      {/* 3. Top subtle vignette for translucent navigation bar contrast */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/40 to-transparent pointer-events-none" />

      {/* 4. Bottom smooth fade into the dark page background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07090E] via-[#07090E]/70 to-transparent pointer-events-none" />

      {/* Small Accessible Background Video Pause/Play Button */}
      {!prefersReducedMotion && !hasError && isLoaded && (
        <div className="absolute bottom-6 right-6 z-20 pointer-events-auto">
          <button
            type="button"
            onClick={togglePlayback}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#07090E]/80 hover:bg-[#121824] border border-white/10 hover:border-white/20 text-[#B2BCCB] hover:text-[#F5F7FA] text-[11px] font-mono backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] cursor-pointer"
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          >
            {isPlaying ? (
              <>
                <Pause size={12} className="text-[#22D3EE]" />
                <span className="hidden sm:inline">Pause video</span>
              </>
            ) : (
              <>
                <Play size={12} className="text-[#A78BFA]" />
                <span className="hidden sm:inline">Play video</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
