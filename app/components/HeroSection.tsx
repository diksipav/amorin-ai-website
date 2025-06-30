"use client";

// import Image from "next/image"; use Image for img
import Link from "next/link";
import WaveDots from "./WaveDots";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh_-_90px)] flex items-center px-5 md:px-10 lg:px-16 xl:px-28 relative z-30 pb-8">
      <WaveDots />
      {/* <div className="absolute inset-0 bg-black opacity-20 pointer-events-none z-20" /> */}
      <div className="max-w-screen 2xl:max-w-[1500px] relative z-20 2xl:mx-auto md:grid md:[grid-template-columns:1fr_65%] lg:[grid-template-columns:1fr_60%] xl:[grid-template-columns:1fr_60%] gap-x-12">
        <div className="self-center z-10 md:-mr-80 md:pb-20 lg:pb-32 2xl:max-w-[780px]">
          <div className="text-5xl md:text-7xl xl:text-8xl font-light leading-tight text-center mb-4">
            <h1 className="text-left">
              We help{" "}
              <span
                className="font-medium bg-gradient-to-r"
                style={{
                  background:
                    "linear-gradient(90deg, #9e21ab 0%, #621469 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline",
                }}
              >
                small
              </span>{" "}
              and{" "}
              <span
                className="font-medium bg-gradient-to-r"
                style={{
                  background:
                    "linear-gradient(90deg, #9e21ab 0%, #621469 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline",
                }}
              >
                medium businesses
              </span>{" "}
              save time, reduce costs, and improve efficiency with{" "}
              <span
                className="font-medium bg-gradient-to-r"
                style={{
                  background:
                    "linear-gradient(90deg, #9e21ab 0%, #621469 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline",
                }}
              >
                custom AI solutions.
              </span>
            </h1>
          </div>

          <div className="text-lg md:text-xl max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 3xl:max-w-5xl leading-relaxed">
            <p className="mb-4 text-left opacity-80 md:max-w-[400px] lg:max-w-lg">
              Including smart chatbots, voice agents, internal assistants, and
              AI-powered workflow automations that transform how your business
              operates.
            </p>

            <Link
              href="/contact-us"
              className="mt-3 px-7 py-3 border-2 text-text border-text font-medium rounded-full hover:bg-text hover:text-[#1f0c20] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text/50 shadow-lg shadow-text/20 hover:shadow-text/30 transition-all duration-300 inline-block text-center"
            >
              TALK TO US
            </Link>
          </div>
        </div>
        <div className="relative z-0 md:-mr-7 lg:-mr-12 md:self-end">
          <img
            src="/hero.png"
            alt=""
            className="w-full h-auto cover hidden md:block"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 50% 50% at 40% 50%, black 35%, rgba(0,0,0,0.2) 75%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 55% 50% at 40% 50%, black 35%, rgba(0,0,0,0.2) 75%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
