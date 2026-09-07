import {User, House, GraduationCap, Mail, Phone} from 'lucide-react';
import profilePhoto from '../assets/mypic.jpg';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center md:mb-12 mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 flex items-center mx-6 ">
          <div>
            <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I am a web developer passionate about creating modern, fast, and user-friendly digital experiences.
               I focus on frontend development using React, Tailwind CSS, and responsive design.
                I also have some experience in backend development with Node.js.
              <br />
              <br />
              I also have experience in Data Mining and Machine Learning through my student internship at PPSDM Migas and my final project at university.
            </p>
            <p className={`flex flex-col gap-2 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="flex items-center gap-2"><User size={24} color="blue"/>Age : 22 Years Old</span>
              <span className="flex items-center gap-2"><House size={24} color="blue" />City : Blora, Central Java</span>
              <span className="flex items-center gap-2"><Mail size={24} color="blue" />Email : Umarfarid273@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={24} color="blue" />Phone : +628978075786</span>
              <span className="flex items-center gap-2"><GraduationCap size={24} color="blue" />Degree : S-1 Informatics Engineering</span>
            </p>
            <div className="flex flex-wrap md:gap-3 gap-2 mt-6">
              <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full font-medium">
                Frontend Developer
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                Web Development
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                Informatics Student
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                UI Enthusiast
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                Fast Learner
              </span>
            </div>
          </div>

          <div className="order-first md:order-last mx-auto w-[80%] max-w-md">
            <div className="overflow-hidden">
              <img
                className=" aspect-[5/5] w-full object-cover object-center rounded-full shadow-lg"
                src={profilePhoto}
                alt="Umar Farid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}