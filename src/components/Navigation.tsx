const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <div className="flex gap-4 text-white text-xl font-light tracking-wide">
        <img src="/logo.svg" alt="amorin.ai logo" width={28} />
        amorin.ai
      </div>
    </nav>
  );
};

export default Navigation;
