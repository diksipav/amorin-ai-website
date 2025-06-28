
import BusinessCard from "@/components/BusinessCard";

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
          <div className="flex justify-center">
            <BusinessCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
