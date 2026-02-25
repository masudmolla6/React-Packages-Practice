import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    toast.success("Message sent successfully 😎✨");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center pb-6">
          <h1 className="text-4xl font-bold text-gray-400 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg">
            Have questions or suggestions? Drop us a message 😌
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-400 shadow-lg rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;