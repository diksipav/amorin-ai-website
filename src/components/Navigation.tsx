import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <Link
        to="/"
        className="flex gap-3 text-white text-2xl font-light tracking-wide"
      >
        <img src="/logo.svg" alt="amorin.ai logo" width={46} />
        <span className="pt-1">amorin.ai</span>
      </Link>
      <div className="flex gap-4 md:gap-8 text-white text-lg font-light">
        <Link
          to="#services"
          className="relative after:content-[''] after:block after:h-[1px] after:bg-white after:w-0 after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
        >
          services
        </Link>
        <Link
          to="/about"
          className="relative after:content-[''] after:block after:h-[1px] after:bg-white after:w-0 after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 hover:after:w-full"
        >
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
