import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(defaultOpenId ? [defaultOpenId] : [])
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="divide-y divide-white/10 border-y border-white/10 rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm border border-white/10">
      {items.map((item, index) => {
        const isOpen = openIds.has(item.id);
        const headingId = `faq-heading-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`transition-colors duration-200 ${
              isOpen ? 'bg-black/40' : 'hover:bg-white/[0.03]'
            }`}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full py-6 px-4 sm:px-6 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D8E7] group cursor-pointer"
              >
                <div className="flex items-baseline gap-4 sm:gap-6 pr-2">
                  <span className="font-mono text-[13px] text-[#67D8E7] min-w-[24px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[16px] sm:text-[17px] font-medium text-[#F5F5F3] group-hover:text-white text-shadow-sm">
                    {item.question}
                  </span>
                </div>
                <div
                  className={`shrink-0 w-8 h-8 rounded-md border flex items-center justify-center transition-all duration-200 ${
                    isOpen
                      ? 'rotate-180 bg-[#F5F5F3] text-[#0A0D12] border-[#F5F5F3]'
                      : 'border-white/15 text-[#BCC5D0] group-hover:border-white/30 group-hover:text-white'
                  }`}
                >
                  <ChevronDown size={15} />
                </div>
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="pb-7 pt-1 px-4 sm:px-6 pl-11 sm:pl-16 text-[15px] sm:text-[16px] leading-relaxed text-[#E0E4EA] text-shadow-sm"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
