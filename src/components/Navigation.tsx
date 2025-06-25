const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <div className="flex gap-1 text-white text-2xl font-light tracking-wide">
        <img src="/logo2.svg" alt="amorin.ai logo" width={42} />
        amorin.ai
      </div>
    </nav>
  );
};

export default Navigation;
