"use client";

import Link from "next/link";
import { useState } from "react";
// import { useTranslations } from "next-intl";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "sr", label: "Srpski" },
];

const Navigation = () => {
  // const t = useTranslations("nav");

  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const handleSelect = (code: string) => {
    setLang(code);
    setOpen(false);
    // For real i18n: update route or context here
  };

  return (
    <nav className="h-[90px] z-50 flex items-center justify-between p-6">
      <Link
        href="/"
        className="flex gap-3 text-text text-2xl font-light tracking-wide"
      >
        <img src="/logo.svg" alt="amorin.ai logo" width={46} />
        <span className="pt-1">amorin.ai</span>
      </Link>
      <div className="flex gap-3 md:gap-6 text-text font-light items-center">
        <div className="relative">
          <button
            className="bg-transparent text-white border border-themeLight/40 pl-5 pr-4 py-2 rounded-full flex items-center gap-2 focus:outline-none hover:bg-theme/30 transition-colors duration-300"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <span className="w-[62px] text-start">
              {LANGUAGES.find((l) => l.code === lang)?.label}
            </span>
            <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {open && (
            <ul className="absolute left-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[120px] z-50">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-themeLight/10 rounded-x text-textDark"
                    onClick={() => handleSelect(l.code)}
                    role="option"
                    aria-selected={lang === l.code}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link
          href="/blog"
          className="relative after:content-[''] after:block after:h-[1px] after:bg-text after:w-0 after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
        >
          blog
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
