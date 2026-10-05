import React from 'react'
export default function Education({ darkMode }) {
  
    return(
      <section id="Education" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray'}`}>
        <div className="max-w-6xl mx-auto px-12 py-12 ">
          <h2 className={`text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Education
          </h2>

          <div className="education-item grid md:grid-cols-2 gap-4 items-center py-8">
            <li className="education-name">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>SMK Negeri 1 Blora</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Construction and Property Engineering</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2019 - 2022</p>
            </li>
            <div className="education-title">
              <h2>
                Focused on construction design and Cost Estimation (RAB), with skills in carpentry, masonry, and AutoCAD.
              </h2>
            </div>
          </div>
          <div className="education-item grid md:grid-cols-2 gap-4 items-center pb-4">
            <li className="education-name">
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Universitas Nahdlatul Ulama Sunan Giri</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Informatics Engineering</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2022 - 2026</p>
            </li>
            <div className="education-title">
              <h2>
                Focused on frontend development and responsive design, creating user experiences that are intuitive, comfortable, and easy to use.
              </h2>
            </div>
          </div>
        </div>
        </section>
    );
}

