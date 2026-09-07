import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ darkMode }) {
  return (
    <section id="home" className={`pt-32 pb-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mt-8">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 flex flex-col gap-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Hello, My Name{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Umar Farid Al Faqihi
            </span>
          </h1>
          <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Web Developer passionate about creating modern and responsive web applications.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="./assets/my-cv.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/Umarfaridd" className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110">
              <Github size={24} className="text-gray-800" />
            </a>
            <a href="https://www.linkedin.com/in/umar-farid-845648350" className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110">
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a href="mailto:umarfarid273@gmail.com" className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110">
              <Mail size={24} className="text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
