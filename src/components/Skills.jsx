import{FaGithub, FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaBootstrap, FaFileWord,  FaPython, FaFigma } from 'react-icons/fa';
import { VscVscodeInsiders } from "react-icons/vsc";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { SiPostman, SiLaragon, SiPhpmyadmin, SiArcgis } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";





const skills = [
  { 'React.js' : <FaReact size={60} color="#61DAFB" className=""/>},
  { 'Github' : <FaGithub size={60} color="#181717"/>},
  { 'PHP' : <FaPhp size={60} color="#7777FF"/>},
  { 'HTML' : <FaHtml5 size={60} color="#E34F26"/>},
  { 'CSS' : <FaCss3 size={60} color="#1572B6"/>},
  { 'Javascript' : <FaJs size={60} color="#F7DF1E"/>},
  { 'Git' : <FaGitAlt size={60} color="#F05032"/>},
  { 'Bootstrap' : <FaBootstrap size={60} color="#7952B3"/>},
  { 'Visual Studio Code' : <VscVscodeInsiders size={60} color="#007ACC"/>},
  { 'Microsoft Excel' : <PiMicrosoftExcelLogo size={60} color="#217346"/>},
  { 'Word' : <FaFileWord size={60} color="#2B579A"/>},
  { 'MySQL' : <GrMysql size={60} color="#4479A1"/>},
  { 'Python' : <FaPython size={60} color="#3776AB"/>},
  { 'Figma' : <FaFigma size={60} color="#F24E1E"/>},
  { 'Postman' : <SiPostman size={60} color="#FF6C37"/>},
  { 'Laragon' : <SiLaragon size={60} color="#000000"/>},
  { 'PhpMyAdmin' : <SiPhpmyadmin size={60} color="#7777FF"/>},
  { 'ArcGIS' : <SiArcgis size={60} color="#0056b3"/>}
];

const skillRows = [skills.slice(0, 9), skills.slice(9)];



export default function Skills({ darkMode }) {
  
  return (
    <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Skills
        </h2>
        
        
          <div className="skill-marquee flex items-center overflow-hidden">
            <div className="flex min-w-full flex-col">
              {skillRows.map((row, rowIndex) => (
                <ul key={rowIndex} className={`skill-track flex w-max gap-4 px-4 py-2 ${rowIndex === 1 ? 'skill-track-reverse' : ''}`}>
                  {[...row, ...row].map((skill, index) => (
                    <li key={`${Object.keys(skill)[0]}-${index}`} className="group relative flex shrink-0 list-none items-center gap-2 rounded-md bg-gray-100 px-4 py-2 shadow-md transition hover:scale-105 hover:shadow-lg">
                      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-md bg-black/30 px-4 text-center opacity-0 transition duration-300 group-hover:opacity-100">
                        <span className="text-sm font-semibold text-white">{Object.keys(skill)}</span>
                      </div>
                      {Object.values(skill)}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
                       
        
     
    </div>
    </section>
  );
}
