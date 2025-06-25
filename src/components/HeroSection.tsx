import ScrollRevealText from "./ScrollRevealText";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center px-5 md:px-10 lg:px-16 xl:px-36 relative overflow-hidden bg-dot-grid"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #340b38 0%, #1f0c20 100%)",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 bg-dot-grid z-0" />
      <div className="absolute inset-0 bg-black opacity-40 z-0 pointer-events-none" />
      <div className="max-w-screen sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 3xl:max-w-[1440px] relative z-10 pt-10 md:pt-24 3xl:mx-auto">
        <ScrollRevealText className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-center mb-4">
          <h1 className="text-left">
            We help <span className="font-medium italic">small</span> and{" "}
            <span className="font-medium italic">medium businesses</span> save
            time, reduce costs, and improve efficiency with{" "}
            <span className="font-medium italic bg-gradient-to-r">
              custom AI solutions.
            </span>
          </h1>
        </ScrollRevealText>

        <ScrollRevealText className="text-lg md:text-xl max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 3xl:max-w-5xl leading-relaxed">
          <p className="mb-4 text-left opacity-90">
            Including smart chatbots, voice agents, internal assistants, and
            AI-powered workflow automations that transform how your business
            operates.
          </p>
          <a
            href="mailto:hello@amorin.ai"
            className="mt-3 px-7 py-3 border-2 border-white font-medium rounded-full transition-all duration-200 hover:bg-white hover:text-[#1f0c20] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 shadow-lg shadow-white/20 hover:shadow-white/40 inline-block text-center"
          >
            TALK TO US
          </a>
        </ScrollRevealText>
      </div>
    </section>
  );
};

export default HeroSection;
