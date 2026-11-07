import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { researchDirections } from '../data/content';
import { ArrowRight, Clock, Filter } from 'lucide-react';

export const ResearchPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(researchDirections.map((d) => d.category)))];

  const filteredDirections =
    selectedCategory === 'All'
      ? researchDirections
      : researchDirections.filter((d) => d.category === selectedCategory);

  return (
    <div className="w-full text-[#E0E4EA]">
      {/* Header */}
      <section className="relative pt-24 sm:pt-32 pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/15 text-[11px] font-mono tracking-widest text-[#BCC5D0] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#67D8E7]" />
              <span>RESEARCH CHARTER & PRIORITIES</span>
            </div>

            <h1 className="text-[clamp(2.25rem,5.5vw+0.5rem,4.25rem)] font-semibold tracking-tight text-[#F5F5F3] leading-[1.08] text-shadow-subtle">
              Applied research directions.
            </h1>

            <p className="text-[17px] sm:text-[20px] text-[#E0E4EA] leading-relaxed font-normal text-shadow-sm">
              We investigate real-world problems where existing AI models stumble: multi-step reliability, verifiable attribution, latency and compute constraints, runtime safety, and local linguistic diversity.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-[12px] font-mono text-[#BCC5D0] pt-2 text-shadow-sm">
              <span className="px-2.5 py-0.5 rounded bg-[#67D8E7]/15 text-[#67D8E7] border border-[#67D8E7]/25 font-medium">
                Cycle 01
              </span>
              <span>5 Proposed Directions</span>
              <span>·</span>
              <span>Open Falsifiable Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Proposed Research Directions */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
                Proposed Research Directions
              </h2>
              <p className="text-[14px] text-[#BCC5D0] mt-1 text-shadow-sm">
                Active problem spaces framed for the incoming fellowship cohort.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div
              className="flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Filter research directions by category"
            >
              <span className="text-[12px] font-mono text-[#BCC5D0] mr-1 flex items-center gap-1.5">
                <Filter size={12} className="text-[#67D8E7]" />
                <span>Filter:</span>
              </span>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-[12px] font-mono rounded-md transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D8E7] ${
                      isSelected
                        ? 'bg-[#F5F5F3] text-[#0A0D12] font-medium shadow-md'
                        : 'bg-black/40 border border-white/15 text-[#BCC5D0] hover:text-[#F5F5F3] hover:border-white/30'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* List of Directions */}
          <div className="space-y-6">
            {filteredDirections.map((direction) => (
              <article
                key={direction.slug}
                className="border border-white/10 rounded-lg p-6 sm:p-9 bg-black/30 backdrop-blur-sm hover:border-white/20 hover:bg-black/45 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left metadata */}
                  <div className="lg:col-span-3 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-mono font-light text-[#BCC5D0] group-hover:text-[#67D8E7] transition-colors text-shadow-sm">
                        {direction.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/40 border border-white/15 text-[#BCC5D0]">
                        {direction.category}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#BCC5D0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{direction.status}</span>
                    </div>
                  </div>

                  {/* Middle content */}
                  <div className="lg:col-span-7 space-y-3">
                    <h3 className="text-2xl font-semibold text-[#F5F5F3] group-hover:text-white text-shadow-subtle">
                      <Link
                        to={`/research/${direction.slug}`}
                        className="hover:underline focus:outline-none focus-visible:underline"
                      >
                        {direction.title}
                      </Link>
                    </h3>

                    <p className="text-[15px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
                      {direction.shortDescription}
                    </p>

                    <div className="pt-3 text-[13px] text-[#E0E4EA] border-t border-white/10">
                      <span className="font-mono text-[11px] text-[#67D8E7] uppercase block mb-1">
                        Sample Investigation Question:
                      </span>
                      <span className="italic text-[#F5F5F3]/90 text-shadow-sm">
                        “{direction.researchQuestions[0]}”
                      </span>
                    </div>
                  </div>

                  {/* Right Action */}
                  <div className="lg:col-span-2 flex lg:justify-end pt-2 lg:pt-0">
                    <Link
                      to={`/research/${direction.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-medium px-4 py-2.5 rounded-md bg-black/40 border border-white/15 group-hover:border-[#67D8E7]/40 text-[#F5F5F3] transition-all text-shadow-sm"
                      aria-label={`Read full brief for ${direction.title}`}
                    >
                      <span>Read Brief</span>
                      <ArrowRight size={14} className="text-[#67D8E7] transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Published Research & Project Notes */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[#BCC5D0] text-shadow-sm">
              PUBLICATIONS & EXPERIMENTAL REPOSITORIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
              Published research and project notes.
            </h2>
            <p className="text-[15px] text-[#E0E4EA] text-shadow-sm">
              As fellows complete experimental cycles, peer-reviewed papers, open-source technical reports, and reproducible code repositories will be indexed here.
            </p>
          </div>

          <div className="border border-white/10 rounded-lg bg-black/35 backdrop-blur-sm p-8 sm:p-12">
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/15 text-[12px] font-mono text-[#BCC5D0]">
                <Clock size={13} className="text-[#67D8E7]" />
                <span>ARCHIVE STATUS</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] leading-snug text-shadow-subtle">
                Our first research cycle is taking shape. Findings, reproducible experiments, and project notes will appear here as the work develops.
              </h3>

              <p className="text-[15px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
                We maintain an honest, high-integrity bar: no fabricated titles, speculative citations, or unverified benchmarks. When code and reports are released, all findings will be accompanied by complete dataset pointers, random seeds, and Dockerized environments.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-[12px] font-mono text-[#BCC5D0]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5F3]" />
                  <span>Reproducible baselines required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#67D8E7]" />
                  <span>Permissive open source</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6A4E8]" />
                  <span>Negative results documented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
