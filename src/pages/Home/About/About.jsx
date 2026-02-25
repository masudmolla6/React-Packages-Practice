import Aos from "aos";
import { useEffect } from "react";

const About = () => {

  return (
    <div className="p-6">
      <div data-aos="fade-up" className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center pb-6">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">
            About Our Store
          </h1>
          <p className="text-gray-300 text-lg">
            We build simple, useful, and clean shopping experiences 😌✨
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-gray-400 rounded-2xl shadow-sm p-8 md:p-12">

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            This is a demo e-commerce project created for learning and practice.
            The goal is to explore React concepts, UI design, and modern web
            development tools.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We focus on building clean interfaces, smooth user experience, and
            realistic project structures that reflect real-world applications.
          </p>

          {/* Skills / Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-gray-300 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">
                Clean UI
              </h3>
              <p className="text-sm text-gray-600">
                Minimal design with modern layout principles.
              </p>
            </div>

            <div className="bg-gray-300 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">
                React Powered
              </h3>
              <p className="text-sm text-gray-600">
                Built using reusable components and state management.
              </p>
            </div>

            <div className="bg-gray-300 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">
                Learning Focused
              </h3>
              <p className="text-sm text-gray-600">
                Designed to practice real-world development patterns.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;