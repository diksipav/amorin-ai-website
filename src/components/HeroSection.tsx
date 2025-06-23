import ScrollRevealText from "./ScrollRevealText";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-32 relative bg-gradient-to-bl from-[#080607] via-[#34262c] to-[#2a1a22]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-32 w-px bg-white/10"></div>
        <div className="absolute top-0 bottom-0 left-[calc(64px+25%)] w-px bg-white/10"></div>
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/10"></div>
        <div className="absolute top-0 bottom-0 right-[calc(64px+25%)] w-px bg-white/10"></div>
        <div className="absolute top-0 bottom-0 right-32 w-px bg-white/10"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl relative z-10 pt-24">
        <ScrollRevealText className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-center mb-4">
          <h1 className="text-left pl-4">
            We help <span className="font-medium italic">small</span> and{" "}
            <span className="font-medium italic">medium businesses</span> save
            time, reduce costs, and improve efficiency with{" "}
            <span className="font-medium italic">custom AI solutions.</span>
          </h1>
        </ScrollRevealText>

        <ScrollRevealText
          delay={300}
          className="text-lg md:text-xl max-w-4xl leading-relaxed"
        >
          <p className="mb-4 text-left opacity-80 pl-4">
            Including smart chatbots, voice agents, internal assistants, and
            AI-powered workflow automations that transform how your business
            operates.
          </p>
          <a
            href="mailto:hello@amorin.ai"
            className="ml-4 mt-3 px-7 py-3 border-2 border-white font-medium rounded-full transition-colors transition-shadow duration-300 hover:bg-white hover:text-[#080607] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 shadow-md shadow-white/10 hover:shadow-lg hover:shadow-white/15 inline-block text-center"
          >
            TALK TO US
          </a>
        </ScrollRevealText>
      </div>
    </section>
  );
};

export default HeroSection;
