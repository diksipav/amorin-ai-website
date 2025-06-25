const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <div className="flex gap-3 text-white text-2xl font-light tracking-wide">
        <img src="/logo.svg" alt="amorin.ai logo" width={46} />
        <span className="pt-1">amorin.ai</span>
      </div>
    </nav>
  );
};

export default Navigation;
