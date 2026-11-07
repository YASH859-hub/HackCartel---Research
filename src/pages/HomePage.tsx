import React from 'react';
import { Link } from '../context/RouterContext';
import { researchDirections, siteConfig } from '../data/content';
import {
  ArrowRight,
  ArrowDown,
  Clock,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full text-[#E0E4EA]">
      {/* 1. Hero Section (Transparent background, letting global video shine through) */}
      <section className="relative w-full min-h-[85svh] flex flex-col justify-between pt-24 sm:pt-32 pb-16">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl lg:max-w-3xl space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/15 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#BCC5D0] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#67D8E7]" />
              <span>HACKCARTEL RESEARCH</span>
            </div>

            {/* Headline with intentional line breaks - pure near-white #F5F5F3, weight 550 */}
            <h1 className="text-[clamp(2.25rem,5.5vw+0.5rem,4.5rem)] font-semibold leading-[1.08] tracking-tight text-[#F5F5F3] text-shadow-subtle">
              Learn deeply.
              <br />
              Research boldly.
              <br />
              Build what matters.
            </h1>

            {/* Supporting Copy */}
            <p className="text-[17px] sm:text-[19px] text-[#E0E4EA] leading-[1.65] max-w-xl font-normal text-shadow-subtle">
              A community of students and builders exploring meaningful AI problems—and turning research into useful systems.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/fellowship"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-medium rounded-md bg-[#F5F5F3] text-[#0A0D12] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#67D8E7] transition-all shadow-md"
              >
                <span>Explore the Fellowship</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium rounded-md bg-black/35 hover:bg-black/55 border border-white/15 hover:border-white/25 text-[#F5F5F3] backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D8E7] transition-all text-shadow-sm"
              >
                <span>Our Research Directions</span>
              </Link>
            </div>

            {/* Micro Details */}
            <div className="pt-2 text-[13px] sm:text-[14px] font-mono text-[#BCC5D0] flex items-center gap-2 text-shadow-sm">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B6A4E8]" />
              <span>20–25 students · 16–20 weeks · Learning, research & building</span>
            </div>
          </div>
        </div>

        {/* Bottom Anchor leading to Research Section */}
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 pt-10">
          <a
            href="#research-directions"
            className="inline-flex items-center gap-2 text-[12px] font-mono text-[#BCC5D0] hover:text-[#67D8E7] transition-colors group cursor-pointer focus:outline-none focus-visible:underline text-shadow-sm"
          >
            <span>Explore our work</span>
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-1 text-[#67D8E7]" />
          </a>
        </div>
      </section>

      {/* 2. Research Directions (Transparent section with subtle separators) */}
      <section id="research-directions" className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#67D8E7] font-medium text-shadow-sm">
                PROPOSED RESEARCH DIRECTIONS
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
                Open problems we plan to investigate.
              </h2>
            </div>
            <p className="text-[14px] font-mono text-[#BCC5D0] max-w-md text-shadow-sm">
              Not completed papers. These define our active inquiry priorities for the upcoming fellowship cycle.
            </p>
          </div>

          {/* Editorial Numbered Rows with transparent backgrounds */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {researchDirections.map((direction) => (
              <div
                key={direction.slug}
                className="group py-8 sm:py-10 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-lg transition-all duration-200 hover:bg-white/[0.04]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start">
                  {/* Number & Category */}
                  <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between gap-3">
                    <span className="text-3xl sm:text-4xl font-mono font-light text-[#BCC5D0] group-hover:text-[#67D8E7] transition-colors text-shadow-sm">
                      {direction.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/40 border border-white/15 text-[#BCC5D0]">
                      {direction.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="md:col-span-7 space-y-2.5">
                    <Link
                      to={`/research/${direction.slug}`}
                      className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] group-hover:text-white focus:outline-none focus-visible:underline inline-block text-shadow-subtle"
                    >
                      {direction.title}
                    </Link>
                    <p className="text-[15px] sm:text-[16px] text-[#E0E4EA] leading-[1.65] text-shadow-sm">
                      {direction.shortDescription}
                    </p>
                    <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-[#BCC5D0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{direction.status}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="md:col-span-2 flex md:justify-end pt-2 md:pt-1">
                    <Link
                      to={`/research/${direction.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-[#BCC5D0] group-hover:text-[#67D8E7] transition-colors text-shadow-sm"
                      aria-label={`View direction details for ${direction.title}`}
                    >
                      <span>Explore</span>
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-[13px] font-mono text-[#BCC5D0] hover:text-[#67D8E7] transition-colors group text-shadow-sm"
            >
              <span>View all 5 direction briefs and proposed evaluation metrics</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Fellowship Feature (Clean two-column + translucent 4-column strip) */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#B6A4E8] font-medium text-shadow-sm">
                THE FELLOWSHIP
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] leading-[1.12] text-shadow-subtle">
                A place to learn.
                <br />
                A reason to build.
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[17px] sm:text-[19px] text-[#E0E4EA] leading-[1.65] text-shadow-sm">
                A planned 16–20-week programme for 20–25 students, combining structured learning, collaborative research, technical reviews, and product development around real-world AI problems.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/fellowship"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium rounded-md bg-[#F5F5F3] text-[#0A0D12] hover:bg-white transition-all shadow-sm"
                >
                  <span>Explore Programme Details</span>
                  <ArrowRight size={14} />
                </Link>
                <div className="text-[13px] font-mono text-[#BCC5D0] text-shadow-sm">
                  Status: <span className="text-[#F5F5F3] font-medium">{siteConfig.applicationStatus}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Local Translucent Four-Column Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/10">
            <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#67D8E7]">
                Cohort Size
              </div>
              <div className="text-2xl font-semibold text-[#F5F5F3] text-shadow-sm">
                20–25 students
              </div>
              <p className="text-[13px] text-[#E0E4EA] leading-relaxed">
                Intimate, highly selective cohort learning and building together.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#B6A4E8]">
                Programme Duration
              </div>
              <div className="text-2xl font-semibold text-[#F5F5F3] text-shadow-sm">
                16–20 weeks
              </div>
              <p className="text-[13px] text-[#E0E4EA] leading-relaxed">
                16-week core sequence with an optional 4-week pilot extension.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#67D8E7]">
                Team Structure
              </div>
              <div className="text-2xl font-semibold text-[#F5F5F3] text-shadow-sm">
                ~5 squads
              </div>
              <p className="text-[13px] text-[#E0E4EA] leading-relaxed">
                4–5 fellows per team with narrow problem ownership and weekly review.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#B6A4E8]">
                Expected Outputs
              </div>
              <div className="text-2xl font-semibold text-[#F5F5F3] text-shadow-sm">
                Evaluated code
              </div>
              <p className="text-[13px] text-[#E0E4EA] leading-relaxed">
                Working prototypes, reproducible repositories, and technical write-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Learning Approach: Learn → Investigate → Build → Evaluate */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[#67D8E7] font-medium text-shadow-sm">
              METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
              How we approach research.
            </h2>
            <p className="text-[16px] text-[#E0E4EA] text-shadow-sm">
              Four connected phases bridging theoretical understanding with hands-on systems engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Learn */}
            <div className="p-6 rounded-lg bg-black/25 backdrop-blur-sm border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold text-[#67D8E7]">01</span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-[#BCC5D0]">
                  Foundations
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F3] text-shadow-sm">
                Learn deeply
              </h3>
              <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                Master transformer mechanics, retrieval pipelines, embedding geometries, and engineering hygiene before writing project code.
              </p>
            </div>

            {/* Step 2: Investigate */}
            <div className="p-6 rounded-lg bg-black/25 backdrop-blur-sm border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold text-[#B6A4E8]">02</span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-[#BCC5D0]">
                  Inquiry
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F3] text-shadow-sm">
                Investigate rigorously
              </h3>
              <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                Read core literature, challenge hidden assumptions, formulate falsifiable hypotheses, and construct transparent non-AI baselines.
              </p>
            </div>

            {/* Step 3: Build */}
            <div className="p-6 rounded-lg bg-black/25 backdrop-blur-sm border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold text-[#67D8E7]">03</span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-[#BCC5D0]">
                  Engineering
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F3] text-shadow-sm">
                Build what matters
              </h3>
              <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                Develop working software architectures with error recovery, sandbox isolation, low latency, and real usability.
              </p>
            </div>

            {/* Step 4: Evaluate */}
            <div className="p-6 rounded-lg bg-black/25 backdrop-blur-sm border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold text-[#B6A4E8]">04</span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-[#BCC5D0]">
                  Validation
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F3] text-shadow-sm">
                Evaluate openly
              </h3>
              <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                Run stress tests and ablation studies, document both breakthroughs and failures, and publish reproducible code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Research & Field Notes (Honest Empty State) */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#BCC5D0] text-shadow-sm">
                PUBLICATIONS & FIELD NOTES
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
                Research and Field Notes
              </h2>
            </div>
            <span className="text-[12px] font-mono text-[#BCC5D0] text-shadow-sm">
              Cycle 01 · In Preparation
            </span>
          </div>

          {/* Polished Editorial Initial State Container with local translucency */}
          <div className="border border-white/10 rounded-lg bg-black/35 backdrop-blur-sm p-8 sm:p-12">
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/15 text-[12px] font-mono text-[#BCC5D0]">
                <Clock size={13} className="text-[#67D8E7]" />
                <span>UPCOMING CYCLE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] leading-snug text-shadow-subtle">
                Our first research cycle is taking shape. Findings, reproducible experiments, and project notes will appear here as the work develops.
              </h3>

              <p className="text-[15px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
                We believe in genuine, verified results rather than speculative announcements. When fellows complete experimental cycles, technical reports with verifiable baselines, code repositories, and negative result post-mortems will be openly catalogued here.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-[12px] font-mono text-[#BCC5D0]">
                <span className="text-[#F5F5F3]">No fabricated papers</span>
                <span>·</span>
                <span>Fully reproducible code</span>
                <span>·</span>
                <span>Open attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA: Bring your curiosity. Build something useful. */}
      <section className="py-28 sm:py-36 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/15 text-[11px] font-mono tracking-widest text-[#BCC5D0] uppercase">
            <span>GET INVOLVED</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#F5F5F3] max-w-3xl mx-auto leading-[1.12] text-shadow-subtle">
            Bring your curiosity.
            <br />
            Build something useful.
          </h2>

          <p className="text-[17px] sm:text-[19px] text-[#E0E4EA] max-w-xl mx-auto leading-relaxed text-shadow-sm">
            Whether you are a student looking to develop applied AI research craft or a mentor interested in reviewing technical work, join our upcoming cycle.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/fellowship"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-[14px] font-medium rounded-md bg-[#F5F5F3] text-[#0A0D12] hover:bg-white transition-all shadow-md"
            >
              <span>Explore Fellowship Details</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-medium rounded-md bg-black/35 hover:bg-black/55 border border-white/15 text-[#F5F5F3] transition-all text-shadow-sm"
            >
              <span>About the Community</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
