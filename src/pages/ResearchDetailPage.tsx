import React from 'react';
import { Link } from '../context/RouterContext';
import { researchDirections } from '../data/content';
import {
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Cpu,
  BarChart3,
  GraduationCap,
} from 'lucide-react';

interface ResearchDetailPageProps {
  slug: string;
}

export const ResearchDetailPage: React.FC<ResearchDetailPageProps> = ({ slug }) => {
  const direction = researchDirections.find(
    (d) => d.slug === slug || (slug === 'ai-indian-workflows' && d.slug === 'ai-for-indian-workflows')
  );

  if (!direction) {
    return (
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-28 text-center text-[#E0E4EA]">
        <h1 className="text-3xl font-semibold text-[#F5F5F3] mb-4 text-shadow-subtle">
          Research Direction Not Found
        </h1>
        <p className="text-[15px] text-[#BCC5D0] mb-8 text-shadow-sm">
          The research direction you are looking for does not exist in our current cycle.
        </p>
        <Link
          to="/research"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#F5F5F3] text-[#0A0D12] font-medium text-[14px] hover:bg-white transition-all shadow-md"
        >
          <ArrowLeft size={15} />
          <span>Back to All Research Directions</span>
        </Link>
      </div>
    );
  }

  // Find index for next/previous navigation
  const currentIndex = researchDirections.findIndex((d) => d.slug === direction.slug);
  const prevDirection = currentIndex > 0 ? researchDirections[currentIndex - 1] : null;
  const nextDirection =
    currentIndex < researchDirections.length - 1 ? researchDirections[currentIndex + 1] : null;

  return (
    <div className="w-full text-[#E0E4EA]">
      {/* Top Breadcrumb & Status */}
      <div className="border-b border-white/10 bg-black/25 backdrop-blur-sm py-4">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-[13px] font-mono">
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-[#BCC5D0] hover:text-[#67D8E7] transition-colors text-shadow-sm"
          >
            <ArrowLeft size={14} />
            <span>All Research Directions</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[#BCC5D0]">Direction {direction.number} of 05</span>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-300 font-medium border border-amber-400/25">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {direction.status}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <section className="pt-16 sm:pt-24 pb-16 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-light text-[#67D8E7] text-shadow-sm">
                {direction.number}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/40 border border-white/15 text-[#BCC5D0]">
                {direction.category}
              </span>
            </div>

            <h1 className="text-[clamp(2.25rem,5.5vw+0.5rem,4rem)] font-semibold tracking-tight text-[#F5F5F3] leading-[1.08] text-shadow-subtle">
              {direction.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#E0E4EA] leading-relaxed font-normal text-shadow-sm">
              {direction.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Detail Content (Calm Reading Section) */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-16">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#F5F5F3] flex items-center gap-3 text-shadow-subtle">
                  <span className="w-2 h-2 rounded-full bg-[#67D8E7]" />
                  <span>Overview</span>
                </h2>
                <div className="text-[16px] sm:text-[17px] leading-relaxed text-[#E0E4EA] space-y-4 max-w-prose text-shadow-sm">
                  <p>{direction.overview}</p>
                </div>
              </div>

              {/* Why the problem matters */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#F5F5F3] flex items-center gap-3 text-shadow-subtle">
                  <span className="w-2 h-2 rounded-full bg-[#B6A4E8]" />
                  <span>Why the problem matters</span>
                </h2>
                <div className="p-7 rounded-lg border border-white/10 bg-black/35 backdrop-blur-sm text-[16px] leading-relaxed text-[#E0E4EA] max-w-prose text-shadow-sm">
                  <p>{direction.whyItMatters}</p>
                </div>
              </div>

              {/* Example research questions */}
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-2xl font-semibold text-[#F5F5F3] flex items-center gap-3 text-shadow-subtle">
                    <HelpCircle size={20} className="text-[#67D8E7]" />
                    <span>Example research questions to investigate</span>
                  </h2>
                  <span className="text-[11px] font-mono text-[#BCC5D0] uppercase">
                    Open Inquiry
                  </span>
                </div>

                <div className="p-4 rounded-lg border-l-2 border-amber-400 bg-black/35 border-y border-r border-white/10 text-[13px] text-[#E0E4EA]">
                  <strong className="text-[#F5F5F3] font-medium">Notice:</strong> These are exploratory questions to investigate through controlled experiments, not proven findings or promises.
                </div>

                <div className="border border-white/10 divide-y divide-white/10 rounded-lg bg-black/30 backdrop-blur-sm">
                  {direction.researchQuestions.map((q, idx) => (
                    <div key={idx} className="p-6 flex items-start gap-4">
                      <span className="font-mono text-[13px] text-[#67D8E7] font-semibold mt-0.5">
                        Q{idx + 1}
                      </span>
                      <p className="text-[15px] sm:text-[16px] text-[#F5F5F3] font-medium leading-relaxed text-shadow-sm">
                        {q}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Possible prototype */}
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold text-[#F5F5F3] flex items-center gap-3 text-shadow-subtle">
                  <Cpu size={20} className="text-[#B6A4E8]" />
                  <span>Possible prototype architectures</span>
                </h2>
                <ul className="space-y-3">
                  {direction.possiblePrototypes.map((proto, idx) => (
                    <li
                      key={idx}
                      className="p-5 rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm flex items-start gap-3.5 text-[15px] text-[#E0E4EA]"
                    >
                      <div className="shrink-0 w-6 h-6 rounded bg-black/50 border border-white/15 flex items-center justify-center font-mono text-[12px] text-[#B6A4E8] mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed text-[#F5F5F3]">{proto}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suggested evaluation metrics */}
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold text-[#F5F5F3] flex items-center gap-3 text-shadow-subtle">
                  <BarChart3 size={20} className="text-[#67D8E7]" />
                  <span>Suggested evaluation metrics</span>
                </h2>
                <div className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-6 space-y-4">
                  <p className="text-[12px] font-mono text-[#BCC5D0] uppercase tracking-wider">
                    Quantitative Evaluation Criteria:
                  </p>
                  <ul className="space-y-3">
                    {direction.evaluationMetrics.map((metric, idx) => (
                      <li key={idx} className="flex items-baseline gap-3 text-[15px] text-[#E0E4EA]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#67D8E7] shrink-0" />
                        <span className="text-[#F5F5F3]">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expected learning */}
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold text-[#F5F5F3] flex items-center gap-3 text-shadow-subtle">
                  <GraduationCap size={20} className="text-[#F5F5F3]" />
                  <span>Expected learning outcomes</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {direction.expectedLearning.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-white/10 rounded-lg p-5 bg-black/30 backdrop-blur-sm text-[14px] text-[#E0E4EA] leading-relaxed"
                    >
                      <span className="font-mono text-[11px] text-[#67D8E7] block mb-1.5 uppercase font-medium">
                        Topic 0{idx + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Fellowship Connection Box */}
              <div className="border border-white/10 rounded-lg bg-black/35 backdrop-blur-sm p-7 space-y-4">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#B6A4E8] font-medium">
                  FELLOWSHIP INTEGRATION
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F3] text-shadow-subtle">
                  Investigate this in the Fellowship
                </h3>
                <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                  Fellows in our planned 16–20-week programme will be matched in teams of 4–5 to tackle this direction, build working prototypes, and document findings.
                </p>
                <div className="pt-2">
                  <Link
                    to="/fellowship"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#F5F5F3] text-[#0A0D12] text-[14px] font-medium hover:bg-white transition-all shadow-md"
                  >
                    <span>Explore Fellowship Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Tools & Stacks Preview */}
              <div className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-6 space-y-3">
                <h3 className="text-[12px] font-mono uppercase tracking-widest text-[#F5F5F3] font-medium">
                  Suggested Tools & Stacks
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {direction.suggestedToolsAndStacks.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[12px] font-mono rounded bg-black/40 border border-white/15 text-[#BCC5D0]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Notice */}
              <div className="p-5 rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm text-[12px] font-mono text-[#E0E4EA] space-y-2">
                <div className="font-semibold text-[#F5F5F3]">STATUS SPECIFICATION</div>
                <p className="text-[#BCC5D0]">
                  This direction is currently designated as a <strong className="text-[#67D8E7] font-medium">Proposed Direction</strong>. Final project briefs, benchmark sets, and datasets will be released prior to cohort commencement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Prev / Next Navigation */}
      <section className="py-14 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevDirection ? (
              <Link
                to={`/research/${prevDirection.slug}`}
                className="border border-white/10 rounded-lg p-5 bg-black/30 backdrop-blur-sm hover:border-[#67D8E7]/40 hover:bg-black/45 transition-all flex items-center gap-3.5 group"
              >
                <ArrowLeft size={18} className="text-[#BCC5D0] group-hover:text-[#67D8E7]" />
                <div>
                  <div className="text-[11px] font-mono text-[#BCC5D0]">Previous Direction</div>
                  <div className="text-[15px] font-semibold text-[#F5F5F3] group-hover:text-white text-shadow-sm">
                    {prevDirection.number}. {prevDirection.title}
                  </div>
                </div>
              </Link>
            ) : <div />}

            {nextDirection ? (
              <Link
                to={`/research/${nextDirection.slug}`}
                className="border border-white/10 rounded-lg p-5 bg-black/30 backdrop-blur-sm hover:border-[#67D8E7]/40 hover:bg-black/45 transition-all flex items-center justify-between gap-3.5 text-right group ml-auto w-full"
              >
                <div className="text-right w-full">
                  <div className="text-[11px] font-mono text-[#BCC5D0]">Next Direction</div>
                  <div className="text-[15px] font-semibold text-[#F5F5F3] group-hover:text-white text-shadow-sm">
                    {nextDirection.number}. {nextDirection.title}
                  </div>
                </div>
                <ArrowRight size={18} className="text-[#BCC5D0] group-hover:text-[#67D8E7] shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
};
