import Typewriter from "typewriter-effect";

const Banner = () => {

  return (
    <section className="bg-gray-500 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          <Typewriter
            options={{
              strings: ["Welcome to Our Store 😌", "React Lover 🔥", "UI Designer ✨"],
              autoStart: true,
              loop: true,
              delay: 200,        // typing speed
              deleteSpeed: 200,
              cursor: "🔥",
            }}
          />
        </h1>
        

        <p className="text-gray-600 text-lg mb-8">
          Find the best products for you 😌✨
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            Shop Now
          </button>

          <button className="px-6 py-3  border rounded-xl hover:bg-gray-400 transition">
            View Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default Banner;