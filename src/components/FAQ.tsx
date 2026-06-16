import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../types";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4" id="faq-section">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#355E2D]/5 text-[#355E2D] mb-3 border border-[#355E2D]/10 text-[10px] font-bold tracking-wider uppercase">
          <HelpCircle size={11} /> PREGUNTAS FRECUENTES
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#355E2D] tracking-tight">
          Resolvemos tus dudas
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto">
          Todo lo que necesitas saber sobre el Recetario Premium GLP-1 y el proceso de descarga directa original.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-md transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? "border-[#355E2D] bg-white shadow-xs" 
                  : "border-gray-200 bg-[#F8F9FA] hover:border-gray-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-xs md:text-sm text-gray-800 hover:text-[#355E2D] transition-colors pr-1">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 p-1 rounded transition-transform duration-200 ${
                    isOpen ? "bg-[#355E2D] text-white rotate-180" : "bg-gray-200/80 text-gray-700"
                  }`}
                >
                  <ChevronDown size={14} />
                </span>
              </button>

              <div
                className={`transition-all duration-200 ease-in-out ${
                  isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="px-4 pb-4 text-xs text-gray-650 leading-relaxed border-t border-gray-150 pt-3 bg-white">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
