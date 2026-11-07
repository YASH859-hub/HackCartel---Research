import React from 'react';
import { BrandMark } from './BrandMark';
import { Link } from '../context/RouterContext';
import { siteConfig } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/35 backdrop-blur-sm pt-16 pb-14 text-[#F5F5F3]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D8E7] rounded-sm"
              aria-label="HackCartel Research home"
            >
              <BrandMark size={26} />
              <span className="font-medium text-[16px] tracking-tight text-[#F5F5F3] text-shadow-sm">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed text-[#E0E4EA] max-w-sm text-shadow-sm">
              An independent community of students and builders investigating meaningful AI challenges through applied research, transparent experiments, and useful software.
            </p>
            <div className="pt-1">
              <span className="text-[12px] font-mono text-[#BCC5D0] tracking-wider text-shadow-sm">
                {siteConfig.tagline}
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-3">
            <h3 className="text-[12px] font-mono uppercase tracking-widest text-[#BCC5D0] mb-4 text-shadow-sm">
              Initiative
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link
                  to="/fellowship"
                  className="text-[#E0E4EA] hover:text-[#67D8E7] transition-colors focus:outline-none focus-visible:underline text-shadow-sm"
                >
                  Applied AI Fellowship
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="text-[#E0E4EA] hover:text-[#67D8E7] transition-colors focus:outline-none focus-visible:underline text-shadow-sm"
                >
                  Research Directions
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#E0E4EA] hover:text-[#67D8E7] transition-colors focus:outline-none focus-visible:underline text-shadow-sm"
                >
                  About HackCartel
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Directions Direct Links */}
          <div className="md:col-span-4">
            <h3 className="text-[12px] font-mono uppercase tracking-widest text-[#BCC5D0] mb-4 text-shadow-sm">
              Proposed Directions
            </h3>
            <ul className="space-y-2.5 text-[13px] font-mono">
              <li>
                <Link
                  to="/research/reliable-ai-agents"
                  className="text-[#E0E4EA] hover:text-[#67D8E7] transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline text-shadow-sm"
                >
                  <span className="text-[#67D8E7]">01</span>
                  <span>Reliable AI Agents</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/research/grounded-knowledge-systems"
                  className="text-[#E0E4EA] hover:text-[#67D8E7] transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline text-shadow-sm"
                >
                  <span className="text-[#67D8E7]">02</span>
                  <span>Grounded Knowledge Systems</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/research/efficient-ai"
                  className="text-[#E0E4EA] hover:text-[#67D8E7] transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline text-shadow-sm"
                >
                  <span className="text-[#67D8E7]">03</span>
                  <span>Efficient AI</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/research/ai-security-evaluation"
                  className="text-[#E0E4EA] hover:text-[#67D8E7] transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline text-shadow-sm"
                >
                  <span className="text-[#67D8E7]">04</span>
                  <span>AI Security & Evaluation</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/research/ai-for-indian-workflows"
                  className="text-[#E0E4EA] hover:text-[#67D8E7] transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline text-shadow-sm"
                >
                  <span className="text-[#67D8E7]">05</span>
                  <span>AI for Indian Workflows</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar & Independence declaration */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[12px] text-[#BCC5D0]">
          <p className="text-shadow-sm">
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed text-[#BCC5D0] text-shadow-sm">
            HackCartel Research is an independent student and builder community. We are not affiliated with, sponsored by, or an official laboratory of any commercial frontier AI company.
          </p>
        </div>
      </div>
    </footer>
  );
};
