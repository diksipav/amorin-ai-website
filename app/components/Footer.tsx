import { EmailIcon, InstagramIcon, LinkedinIcon, XIcon } from "./icons";

const Footer = () => (
  <footer className="flex flex-col items-center justify-center py-6 z-10">
    <div className="flex items-center gap-3 mb-2">
      <a
        href="https://x.com/amorin_ai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
      >
        <XIcon className="w-7 h-7 text-text opacity-50 hover:opacity-70 transition-colors duration-300 -mr-[1px]" />
      </a>
      <a
        href="https://www.linkedin.com/company/amorin-ai/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedinIcon className="w-7 h-7 text-text opacity-50 hover:opacity-70 transition-colors duration-300" />
      </a>
      <a
        href="https://www.instagram.com/amorin_ai/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <InstagramIcon className="w-6 h-6 text-text opacity-50 mx-[1px] hover:opacity-70 transition-colors duration-300" />
      </a>
      <a
        href="mailto:hello@amorin.ai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <EmailIcon className="w-6 h-6 text-text opacity-50 ml-[1px] hover:opacity-70 transition-colors duration-300" />
      </a>
    </div>
    <p className="text-sm font-light opacity-50">© 2025, amorin.ai</p>
  </footer>
);

export default Footer;
