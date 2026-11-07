import React from 'react';

export const AbstractResearchArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-lg mx-auto aspect-16/10 rounded-sm border border-[#E0E4EA] bg-[#F7F8FA] overflow-hidden p-6 select-none ${className}`}
      aria-label="Abstract diagram representing research graphs, branching experiments, and interconnected systems"
      role="img"
    >
      {/* Background subtle graph grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="small-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E0E4EA" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#small-grid)" />
      </svg>

      {/* Main system diagram SVG */}
      <svg
        viewBox="0 0 540 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full"
      >
        <defs>
          <linearGradient id="art-gradient" x1="40" y1="160" x2="480" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="subtle-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Axis & reference lines */}
        <line x1="40" y1="280" x2="500" y2="280" stroke="#15171C" strokeWidth="1" strokeOpacity="0.15" />
        <line x1="40" y1="40" x2="40" y2="280" stroke="#15171C" strokeWidth="1" strokeOpacity="0.15" />

        {/* Baseline heuristic trajectory (faint dashed gray line) */}
        <path
          d="M 50 240 Q 150 230 250 200 T 490 170"
          stroke="#94A3B8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Primary research experimental branch (bold gradient curve) */}
        <path
          d="M 50 240 C 130 240, 150 140, 240 140 C 310 140, 360 80, 480 75"
          stroke="url(#art-gradient)"
          strokeWidth="2.25"
          fill="none"
        />

        {/* Branching alternative exploration path */}
        <path
          d="M 240 140 C 300 140, 340 210, 440 215"
          stroke="#06B6D4"
          strokeWidth="1.25"
          strokeDasharray="3 3"
          strokeOpacity="0.7"
          fill="none"
        />

        {/* Evaluation verification bounds */}
        <rect
          x="320"
          y="55"
          width="170"
          height="50"
          rx="2"
          stroke="#7C3AED"
          strokeWidth="1"
          strokeDasharray="3 2"
          fill="#7C3AED"
          fillOpacity="0.04"
        />

        {/* Discrete experiment nodes */}
        {/* Node 1: Problem discovery */}
        <g transform="translate(50, 240)">
          <circle cx="0" cy="0" r="4.5" fill="#15171C" />
          <circle cx="0" cy="0" r="8" stroke="#15171C" strokeWidth="1" strokeOpacity="0.2" />
        </g>

        {/* Node 2: Baseline calibration */}
        <g transform="translate(150, 195)">
          <circle cx="0" cy="0" r="3.5" fill="#06B6D4" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="#06B6D4" strokeWidth="1" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#06B6D4" strokeWidth="1" />
        </g>

        {/* Node 3: Hypothesis bifurcation */}
        <g transform="translate(240, 140)">
          <circle cx="0" cy="0" r="5" fill="#3B82F6" stroke="#F7F8FA" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="11" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.25" />
        </g>

        {/* Node 4: Ablation check */}
        <g transform="translate(370, 95)">
          <circle cx="0" cy="0" r="3.5" fill="#7C3AED" />
        </g>

        {/* Node 5: Validated prototype output */}
        <g transform="translate(480, 75)">
          <circle cx="0" cy="0" r="5.5" fill="#7C3AED" stroke="#F7F8FA" strokeWidth="2" />
          <circle cx="0" cy="0" r="12" stroke="#7C3AED" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Secondary node on branch */}
        <g transform="translate(440, 215)">
          <circle cx="0" cy="0" r="3" fill="#626975" />
        </g>

        {/* Technical typography labels in monospace */}
        <text x="50" y="265" fill="#626975" fontSize="10" fontFamily="'JetBrains Mono', monospace">
          t_0 [INIT]
        </text>
        <text x="235" y="125" fill="#626975" fontSize="10" fontFamily="'JetBrains Mono', monospace">
          Δ_eval (p &lt; 0.01)
        </text>
        <text x="330" y="75" fill="#7C3AED" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="500">
          BENCHMARK CONVERGENCE
        </text>
        <text x="440" y="235" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">
          ablated_variant
        </text>
        <text x="445" y="60" fill="#15171C" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
          PROTOTYPE v1.0
        </text>
      </svg>

      {/* Bottom status indicator bar */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#626975] border-t border-[#E0E4EA] pt-2">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
          EXPERIMENTAL REPRODUCIBILITY
        </span>
        <span className="text-[#15171C] font-medium">16–20 WK CYCLE</span>
      </div>
    </div>
  );
};
