"use client";

import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "sr", label: "Srpski" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const localeMatch = pathname.match(/^\/(en|es|sr)/);
  const locale = localeMatch ? localeMatch[1] : "en";

  const handleSelect = (code: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|es|sr)/, "");
    router.push(`/${code}${pathWithoutLocale === "" ? "" : pathWithoutLocale}`);
    setOpen(false);
  };

  return (
    <nav className="w-full h-[90px] z-50 flex items-center justify-between p-5 sm:px-6 md:px-10 max-w-[1616px]">
      <Link
        href="/"
        className="flex gap-2 sm:gap-3 text-text text-2xl font-light tracking-wide"
      >
        <img src="/logo.svg" alt="amorin.ai logo" width={46} />
        <span className="pt-1">amorin.ai</span>
      </Link>
      <div className="flex gap-3 md:gap-6 text-text font-light items-center">
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            className={`text-white border border-themeLight/40 pl-5 pr-4 py-2 rounded-full flex items-center gap-2 focus:outline-none transition-colors duration-300
              ${open ? "bg-theme/30" : "hover:bg-theme/30"}`}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <span className="w-[62px] text-start">
              {LANGUAGES.find((l) => l.code === locale)?.label}
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
            <div className="absolute left-0 pt-2 z-50 min-w-[120px]">
              <ul className="bg-white rounded-xl shadow-lg">
                {LANGUAGES.map((l) => (
                  <li key={l.code}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-x text-textDark hover:bg-themeLight/10 ${locale === l.code ? "bg-themeLight/20 hover:bg-themeLight/20" : ""}`}
                      onClick={() => handleSelect(l.code)}
                      role="option"
                      aria-selected={locale === l.code}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
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
