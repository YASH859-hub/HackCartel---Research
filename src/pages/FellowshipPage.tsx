import React from 'react';
import { Accordion } from '../components/Accordion';
import {
  siteConfig,
  curriculumModules,
  timelinePhases,
  expectedOutputs,
  selectionSteps,
  faqs,
} from '../data/content';
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Link } from '../context/RouterContext';

export const FellowshipPage: React.FC = () => {
  return (
    <div className="w-full text-[#E0E4EA]">
      {/* 1. Fellowship Header (Transparent background letting global video show through) */}
      <section className="relative w-full pt-24 sm:pt-32 pb-16">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/15 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#BCC5D0] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6A4E8]" />
              <span>HACKCARTEL APPLIED AI RESEARCH FELLOWSHIP</span>
            </div>

            <h1 className="text-[clamp(2.25rem,5.5vw+0.5rem,4.25rem)] font-semibold leading-[1.08] tracking-tight text-[#F5F5F3] text-shadow-subtle">
              Your next chapter:
              <br />
              research and building.
            </h1>

            <p className="text-[17px] sm:text-[20px] text-[#E0E4EA] leading-relaxed max-w-2xl font-normal text-shadow-sm">
              A 16–20-week fellowship bringing 20–25 students together to learn, investigate AI challenges, and develop useful systems.
            </p>

            {/* Application Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/45 border border-white/15 text-[13px] font-mono text-[#F5F5F3] backdrop-blur-md text-shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>
                Application status: <strong className="text-white font-medium">{siteConfig.applicationStatus}</strong>
              </span>
            </div>
          </div>

          {/* Key Facts Strip with local translucent containers for optimal contrast over the central portal */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-lg bg-black/45 backdrop-blur-md border border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#67D8E7] mb-1 font-medium">
                Cohort Size
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] text-shadow-sm">
                {siteConfig.cohortSize}
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-lg bg-black/45 backdrop-blur-md border border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#67D8E7] mb-1 font-medium">
                Duration
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] text-shadow-sm">
                {siteConfig.duration}
              </div>
              <div className="text-[11px] font-mono text-[#BCC5D0] mt-0.5">16 core + 4 opt</div>
            </div>

            <div className="p-4 sm:p-5 rounded-lg bg-black/45 backdrop-blur-md border border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#67D8E7] mb-1 font-medium">
                Team Structure
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] text-shadow-sm">
                ~5 teams
              </div>
              <div className="text-[11px] font-mono text-[#BCC5D0] mt-0.5">4–5 fellows per team</div>
            </div>

            <div className="p-4 sm:p-5 rounded-lg bg-black/45 backdrop-blur-md border border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#67D8E7] mb-1 font-medium">
                Weekly Commitment
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#F5F5F3] text-shadow-sm">
                10–12 hrs/wk
              </div>
              <div className="text-[11px] font-mono text-[#BCC5D0] mt-0.5">To be confirmed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who It Is For */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#67D8E7] font-medium text-shadow-sm">
                CANDIDATE PROFILE
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
                Who the fellowship is for.
              </h2>
              <p className="text-[16px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
                We are looking for motivated students and early engineers ready to dive beneath library abstractions and tackle the messy reality of applied AI engineering.
              </p>

              {/* Prominent Quote from Fellowship Prompt */}
              <div className="p-6 border-l-2 border-[#67D8E7] bg-black/40 backdrop-blur-sm rounded-r-lg border-y border-r border-white/10">
                <p className="text-[15px] text-[#F5F5F3] italic leading-relaxed text-shadow-sm">
                  “Prior publications are not required. Selection will emphasise curiosity, fundamentals, evidence of effort, and the ability to learn.”
                </p>
              </div>
            </div>

            {/* Profiles Checklist */}
            <div className="lg:col-span-7">
              <div className="border border-white/10 divide-y divide-white/10 rounded-lg bg-black/30 backdrop-blur-sm">
                {[
                  {
                    title: 'Solid programming fundamentals',
                    description:
                      'You write readable Python or TypeScript code, know how to use Git, and understand basic data structures and asynchronous operations.',
                  },
                  {
                    title: 'Curious about AI & eager to strengthen core mechanics',
                    description:
                      'You want to understand vector mathematics, transformer tokenization, and attention mechanics rather than just calling wrapper endpoints.',
                  },
                  {
                    title: 'Enjoys debugging, experimentation, and collaborative work',
                    description:
                      'You do not get discouraged when an experiment fails; you inspect logs, isolate variables, form a new hypothesis, and work well with teammates.',
                  },
                  {
                    title: 'Can explain reasoning and document progress',
                    description:
                      'You can communicate why you made a technical decision, write clear technical notes, and welcome critical architectural reviews.',
                  },
                  {
                    title: 'Wants to work on problems beyond tutorial replication',
                    description:
                      'You want to tackle non-trivial challenges—like error recovery in agents, verifiable citations, latency bottlenecks, or regional multilingual support.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 flex items-start gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#67D8E7] mt-0.5">
                      <CheckCircle2 size={15} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[16px] font-medium text-[#F5F5F3] text-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Learning Curriculum */}
      <section id="curriculum" className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[#B6A4E8] font-medium text-shadow-sm">
              STRUCTURED FOUNDATIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
              Learning curriculum.
            </h2>
            <p className="text-[16px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
              Learning continues alongside project work throughout the fellowship. Four compact modules ensure every fellow shares a common technical vocabulary and engineering rigour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumModules.map((module) => (
              <div
                key={module.id}
                className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-8 flex flex-col justify-between hover:border-white/20 hover:bg-black/45 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#67D8E7] font-medium tracking-widest uppercase">
                      {module.subtitle}
                    </span>
                    <span className="text-[11px] font-mono text-[#BCC5D0]">Continuous Track</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#F5F5F3] mb-3 text-shadow-subtle">
                    {module.title}
                  </h3>

                  <p className="text-[15px] text-[#E0E4EA] leading-relaxed mb-6 text-shadow-sm">
                    {module.description}
                  </p>

                  <div className="border-t border-white/10 pt-5">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#F5F5F3] mb-3 font-medium">
                      Core Topics:
                    </h4>
                    <ul className="space-y-2.5">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="text-[14px] text-[#E0E4EA] flex items-start gap-2.5">
                          <span className="text-[#67D8E7] font-mono text-[12px] mt-0.5">·</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Programme Timeline */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#67D8E7] font-medium text-shadow-sm">
                CHRONOLOGY & PHASES
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
                Programme timeline.
              </h2>
            </div>

            <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 max-w-md text-[13px] text-[#E0E4EA]">
              <div className="font-medium text-[#F5F5F3] flex items-center gap-2 mb-1 font-mono text-[12px]">
                <AlertCircle size={15} className="text-amber-400" />
                <span>16 CORE WEEKS + OPTIONAL 4 EXTENSION</span>
              </div>
              <p className="text-[#BCC5D0]">
                The fellowship centres on a 16-week core sequence. The final 4 weeks are an optional extension reserved for promising prototypes and deeper pilots; 20 weeks is not guaranteed for all participants.
              </p>
            </div>
          </div>

          {/* Vertical Sequence with subtle markers */}
          <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {timelinePhases.map((phase, idx) => (
              <div key={idx} className="relative group">
                {/* Node pin */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-black ${
                    phase.isExtension
                      ? 'border-[#B6A4E8] shadow-[0_0_8px_rgba(182,164,232,0.5)]'
                      : 'border-[#67D8E7] shadow-[0_0_8px_rgba(103,216,231,0.5)]'
                  }`}
                />

                <div className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-6 sm:p-7 transition-all hover:border-white/20 hover:bg-black/45">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[12px] font-mono font-medium px-2.5 py-0.5 rounded ${
                        phase.isExtension
                          ? 'bg-[#B6A4E8]/15 text-[#B6A4E8] border border-[#B6A4E8]/25'
                          : 'bg-[#67D8E7]/15 text-[#67D8E7] border border-[#67D8E7]/25'
                      }`}
                    >
                      {phase.weeks}
                    </span>
                    {phase.isExtension && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#B6A4E8]">
                        Optional Extension Phase
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-[#F5F5F3] mb-2 text-shadow-subtle">
                    {phase.title}
                  </h3>

                  <p className="text-[15px] text-[#E0E4EA] leading-relaxed mb-4 text-shadow-sm">
                    {phase.focus}
                  </p>

                  <div className="border-t border-white/10 pt-3">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#F5F5F3] mb-2 font-medium">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {phase.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="text-[13px] text-[#BCC5D0] flex items-baseline gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Teams Work */}
      <section id="team-model" className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[#B6A4E8] font-medium text-shadow-sm">
              COLLABORATIVE MODEL
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
              How teams work.
            </h2>
            <p className="text-[16px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
              Research is an inherently social endeavour. Rather than solitary homework assignments, fellows collaborate in small, focused squads with shared codebases and clear personal ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-7 space-y-3 hover:border-white/20 transition-all">
              <div className="text-[11px] font-mono text-[#67D8E7] font-medium uppercase tracking-wider">
                Team Size & Focus
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F3] text-shadow-subtle">
                ~5 Teams of 4–5 Fellows
              </h3>
              <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                Each team owns one narrow, well-defined problem and a measurable research question tied to our proposed directions.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-7 space-y-3 hover:border-white/20 transition-all">
              <div className="text-[11px] font-mono text-[#B6A4E8] font-medium uppercase tracking-wider">
                Shared Responsibilities
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F3] text-shadow-subtle">
                Research + Engineering + Users
              </h3>
              <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                Team members rotate between literature analysis, building prototypes, designing evaluation benchmarks, and gathering user feedback.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-7 space-y-3 hover:border-white/20 transition-all">
              <div className="text-[11px] font-mono text-[#F5F5F3] font-medium uppercase tracking-wider">
                Mentorship & Reviews
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F3] text-shadow-subtle">
                Weekly Technical Feedback
              </h3>
              <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                Weekly progress checkpoints and technical reviews. Mentor participation and specific advisor matches will be confirmed before launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Expected Outputs */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#67D8E7] font-medium text-shadow-sm">
                STANDARDS & DELIVERABLES
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
                Expected outputs.
              </h2>
            </div>
            <p className="text-[14px] font-mono text-[#BCC5D0] max-w-md text-shadow-sm">
              Every fellow leaves with verifiable evidence of engineering craftsmanship, not just a completion badge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectedOutputs.map((output, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-lg p-6 bg-black/30 backdrop-blur-sm space-y-2.5 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[12px] text-[#67D8E7] font-semibold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-[16px] font-medium text-[#F5F5F3] text-shadow-sm">
                    {output.title}
                  </h3>
                </div>
                <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                  {output.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Honest Disclaimer */}
          <div className="mt-8 p-5 rounded-lg border border-white/10 bg-black/35 backdrop-blur-sm text-[13px] text-[#E0E4EA] flex items-start gap-3">
            <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[#BCC5D0]">
              <strong className="text-[#F5F5F3] font-medium">Notice:</strong> Outputs depend on project scope. Publication acceptance, positive research results, employment, and commercial success are not guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Selection Process */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[#BCC5D0] font-medium text-shadow-sm">
              ADMISSIONS PIPELINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
              Selection process.
            </h2>
            <p className="text-[14px] font-mono text-[#BCC5D0] text-shadow-sm">
              *Provisional sequence: subject to minor refinements before applications officially open.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionSteps.map((step) => (
              <div
                key={step.step}
                className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm p-7 space-y-3 hover:border-white/20 transition-colors"
              >
                <div className="text-3xl font-mono font-light text-[#67D8E7]">
                  {step.step}
                </div>
                <h3 className="text-[17px] font-medium text-[#F5F5F3] text-shadow-sm">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#E0E4EA] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-[12px] font-mono uppercase tracking-widest text-[#67D8E7] font-medium text-shadow-sm">
              QUESTIONS & DETAILS
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
              Frequently asked questions.
            </h2>
            <p className="text-[16px] text-[#E0E4EA] text-shadow-sm">
              Clear, transparent answers about eligibility, time commitments, mentorship, and expectations.
            </p>
          </div>

          <Accordion items={faqs} defaultOpenId="who-can-apply" />
        </div>
      </section>

      {/* 9. Application Area (Honest Informational State) */}
      <section id="application-info" className="py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="border border-white/10 rounded-lg bg-black/35 backdrop-blur-sm p-8 sm:p-14 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/15 text-[12px] font-mono text-[#BCC5D0]">
              <Clock size={13} className="text-amber-400" />
              <span>APPLICATIONS ARE NOT OPEN YET</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F3] text-shadow-subtle">
              Cohort details coming soon.
            </h2>

            <p className="text-[16px] text-[#E0E4EA] leading-relaxed text-shadow-sm">
              We are currently finalizing project definitions, compute resources, and mentor schedules. When applications open, this section will provide the direct application portal, timeline dates, and instructions.
            </p>

            <div className="border-t border-white/10 pt-6 space-y-3">
              <h3 className="text-[12px] font-mono uppercase tracking-wider text-[#F5F5F3] font-medium">
                What you can do now:
              </h3>
              <ul className="space-y-2.5 text-[14px] text-[#E0E4EA]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#67D8E7] font-mono">1.</span>
                  <span>Review our 5 proposed research directions to identify problems that align with your curiosity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#67D8E7] font-mono">2.</span>
                  <span>Brush up on engineering fundamentals: Python, AsyncIO, Git, and automated testing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#67D8E7] font-mono">3.</span>
                  <span>Check back here for the official application launch announcement.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium rounded-md bg-[#F5F5F3] text-[#0A0D12] hover:bg-white transition-all shadow-sm"
              >
                <span>Explore Research Directions</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
