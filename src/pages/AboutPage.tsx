import React from 'react';
import { Link } from '../context/RouterContext';
import { corePrinciples, siteConfig } from '../data/content';
import { BrandMark } from '../components/BrandMark';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full text-[#E0E4EA]">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/15 text-[11px] font-mono tracking-widest text-[#BCC5D0] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#67D8E7]" />
              <span>COMMUNITY & APPROACH</span>
            </div>

            <h1 className="text-[clamp(2.25rem,5.5vw+0.5rem,4.25rem)] font-semibold tracking-tight text-[#F5F5F3] leading-[1.08] text-shadow-subtle">
              About HackCartel Research.
            </h1>

            <p className="text-xl sm:text-2xl text-[#F5F5F3] font-medium leading-relaxed text-shadow-subtle">
              HackCartel is a community focused on turning problem statements and real-world challenges into research, experiments, and useful products.
            </p>

            <p className="text-[16px] sm:text-[18px] text-[#E0E4EA] leading-relaxed font-normal text-shadow-sm">
              We position ourselves as an emerging, ambitious community of students and builders. We do not claim to be an established frontier AI laboratory; rather, we are an independent initiative dedicated to disciplined applied research, reproducible experiments, and pragmatic engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Community Model & Philosophy */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#B6A4E8] font-medium text-shadow-sm">
                OUR IDENTITY
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] leading-tight text-shadow-subtle">
                Why applied AI research matters now.
              </h2>
              <p className="text-[16px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
                Much of the contemporary AI landscape is dominated by two extremes: massive industrial labs training foundation models with tens of millions of dollars, and quick demo wrappers built on third-party APIs.
              </p>
              <p className="text-[16px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
                Between these lies the critical space of <strong className="text-[#F5F5F3] font-medium">applied AI systems engineering</strong>: understanding why agentic workflows fail in production, how to ground answers in verifiable source evidence, how to operate within tight token and latency budgets, and how to build systems for multilingual communities. That is where HackCartel Research operates.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-white/10 rounded-lg bg-black/35 backdrop-blur-sm p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-3.5">
                  <BrandMark size={34} />
                  <div>
                    <h3 className="font-semibold text-[18px] text-[#F5F5F3] text-shadow-sm">
                      HackCartel Community
                    </h3>
                    <p className="text-[12px] font-mono text-[#BCC5D0]">
                      Builders · Students · Experimenters
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-[15px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
                  <p>
                    The HackCartel community was created out of a desire for authentic technical depth. We believe the best way for young engineers to learn is not passive lecture watching, but formulating a clear research question, building a baseline, testing where it breaks, and publishing reproducible code.
                  </p>
                  <p>
                    Through our upcoming <strong className="text-[#F5F5F3] font-medium">Applied AI Research Fellowship</strong>, we provide a cohort structure where 20–25 fellows collaborate in small teams, receive rigorous technical reviews, and learn production-grade research craft.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[13px] font-mono">
                  <span className="text-[#67D8E7] font-medium">Cohort 01 in preparation</span>
                  <Link
                    to="/fellowship"
                    className="text-[#F5F5F3] hover:text-[#67D8E7] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Fellowship</span>
                    <ArrowRight size={14} className="text-[#67D8E7]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[#67D8E7] font-medium text-shadow-sm">
              FOUNDATIONAL VALUES
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
              Our research principles.
            </h2>
            <p className="text-[16px] text-[#E0E4EA] text-shadow-sm">
              These eight principles govern every research proposal, code review, and publication across the HackCartel ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePrinciples.map((principle) => (
              <div
                key={principle.number}
                className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-7 sm:p-8 space-y-2.5 hover:border-white/20 hover:bg-black/45 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[14px] font-bold text-[#67D8E7]">
                    {principle.number}
                  </span>
                  <h3 className="text-[18px] font-semibold text-[#F5F5F3] text-shadow-sm">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-[15px] text-[#E0E4EA] leading-relaxed pl-8">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strict Independence Statement */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm p-8 sm:p-12 max-w-3xl mx-auto space-y-5">
            <div className="flex items-center gap-2 text-[12px] font-mono text-[#F5F5F3] uppercase tracking-wider font-semibold">
              <ShieldAlert size={16} className="text-[#67D8E7]" />
              <span>Independent Initiative Declaration</span>
            </div>

            <h3 className="text-2xl font-semibold text-[#F5F5F3] text-shadow-subtle">
              Independence and Institutional Status
            </h3>

            <div className="space-y-3.5 text-[15px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
              <p>
                HackCartel Research is an independent community initiative created by students, software builders, and applied practitioners.
              </p>
              <p>
                We operate autonomously and do not claim affiliation, sponsorship, or official endorsement by frontier AI research organizations (such as Google, OpenAI, Anthropic, or Perplexity).
              </p>
              <p>
                Our references to industry tools, benchmarks, and research literature represent standard scientific citation and objective technological exploration, not corporate partnerships.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-[12px] font-mono text-[#BCC5D0]">
                {siteConfig.brandName} · Independent Community
              </span>
              <Link
                to="/"
                className="text-[13px] font-mono text-[#67D8E7] hover:underline transition-colors"
              >
                ← Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
