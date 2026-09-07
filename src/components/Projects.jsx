import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import restaurantImage from '../assets/pic-landingpagerestorant.jpeg';
import machineLearningImage from '../assets/pic-machinelearning.jpeg';
import websitePortfolio from '../assets/pic-websiteportfolio.jpeg';
import petaDesa from '../assets/peta-desa.jpeg';
import ecommerceDesign from '../assets/ecommerce-design.jpeg';
import jadoelan1 from '../assets/assets-jadoelan/jadoelan1.png';
import jadoelan2 from '../assets/assets-jadoelan/jadoelan2.png';
import jadoelan3 from '../assets/assets-jadoelan/jadoelan3.png';
import jadoelan4 from '../assets/assets-jadoelan/jadoelan4.png';
import jadoelan5 from '../assets/assets-jadoelan/jadoelan5.png';
import porto1 from '../assets/assets-porto1/porto1.png';
import porto2 from '../assets/assets-porto1/porto2.png';
import porto3 from '../assets/assets-porto1/porto3.png';
import porto4 from '../assets/assets-porto1/porto4.png';
import porto5 from '../assets/assets-porto1/porto5.png';
import porto6 from '../assets/assets-porto1/porto6.png';
import ML1 from '../assets/assets-ML1/ML1.png';
import ML2 from '../assets/assets-ML1/ML2.png';
import MLproject1 from '../assets/assets-ML2/ML1.png';
import MLproject2 from '../assets/assets-ML2/ML2.png';
import MLproject3 from '../assets/assets-ML2/ML3.png';
import MLproject4 from '../assets/assets-ML2/ML4.png';
import PortoProject1 from '../assets/assets-porto2/porto1.png';
import PortoProject2 from '../assets/assets-porto2/porto2.png';
import PortoProject3 from '../assets/assets-porto2/porto3.png';
import PortoProject4 from '../assets/assets-porto2/porto4.png';
import PortoProject5 from '../assets/assets-porto2/porto5.png';
import peta1 from '../assets/assets-peta/peta1.jpg';
import peta2 from '../assets/assets-peta/peta2.jpeg';
import peta3 from '../assets/assets-peta/peta3.jpeg';
import rm_lestari1 from '../assets/assets-resto2/resto1.jpeg';
import rm_lestari2 from '../assets/assets-resto2/resto2.jpeg';
import rm_lestari3 from '../assets/assets-resto2/resto3.jpeg';
import rm_lestari4 from '../assets/assets-resto2/resto4.jpeg';
import ecommerce1 from '../assets/assets-ecommerce/ecommerce1.png';
import ecommerce2 from '../assets/assets-ecommerce/ecommerce2.png';
import ecommerce3 from '../assets/assets-ecommerce/ecommerce3.png';
import ecommerce4 from '../assets/assets-ecommerce/ecommerce4.png';
import ecommerce5 from '../assets/assets-ecommerce/ecommerce5.png';
import ecommerce6 from '../assets/assets-ecommerce/ecommerce6.png';
import ecommerce7 from '../assets/assets-ecommerce/ecommerce7.png';
import ecommerce8 from '../assets/assets-ecommerce/ecommerce8.png';








export const projects = [
  {
  title: 'Portfolio Website',
  description: 'A responsive portfolio website built with React and Tailwind CSS for personal branding.',
  detail: 'A personal portfolio website focused on presenting projects, skills, education, and professional experience in a responsive interface.',
  features: ['Responsive layout', 'Project showcase', 'Dark mode'],
  tech: ['React', 'TailwindCSS', 'Vite'],
  image: websitePortfolio,
  gallery: [PortoProject1, PortoProject2, PortoProject3, PortoProject4, PortoProject5],
},
{
  title: 'Machine Learning Classification',
  description: 'A Machine Learning classification model using an original dataset to help predict data.',
  detail: 'A fake news prediction and analysis system using four Machine Learning (ML) algorithms, trained on an original dataset collected from six online news platforms.',
  features: ['Original dataset','Data preprocessing', 'Feature selection', 'Model training', 'Model evaluation','Optimalization'],
  tech: ['Python', 'Jupyter', 'Machine Learning'],
  image: machineLearningImage,
  gallery: [MLproject1, MLproject2, MLproject3, MLproject4],
  link:'https://ejurnal.stmik-budidarma.ac.id/index.php/jurikom/article/view/9492'
},
  {
  title: 'Restaurant Landing Page with Admin Panel',
  description: 'An attractive restaurant landing page with an admin panel for managing menus and updating information.',
  detail: 'This project was developed using CodeIgniter (CI) and MySQL as the database. The admin can manage menus and update information through the admin panel.',
  features: ['Responsive landing page', 'Menu management', 'Admin panel'],
  tech: ['CI', 'MySQL', 'Bootstrap'],
  image: restaurantImage,
  gallery: [jadoelan1, jadoelan2, jadoelan3, jadoelan4, jadoelan5],
},
{
  title: 'Ecommerce Website',
  description: 'A responsive e-commerce website with an admin panel for managing and updating products.',
  detail: 'This is a responsive e-commerce website designed to enhance the store’s branding through an attractive and responsive design. The admin can update products through the admin panel.',
  features: ['Landing Page', 'About Store', 'List Product', 'Location', 'Responsive', 'Admin Panel'],
  tech: ['React', 'Vite', 'TailwindCSS','Node.js', 'MySQL'],
  image: ecommerceDesign,
  gallery: [ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5, ecommerce6, ecommerce7, ecommerce8],
},
{
  title: 'Landing Page Restorant',
  description: 'A responsive restaurant landing page designed to expand the brands reach and strengthen its digital presence.',
  detail: 'It is a restaurant landing page designed to expand the brands reach and enhance its digital presence.',
  features: ['Responsive landing page', 'Menu management', 'Location'],
  tech: ['HTML', 'CSS', 'JavaScript'],
  image: restaurantImage,
  gallery: [rm_lestari1, rm_lestari2, rm_lestari3, rm_lestari4],
  demo: 'https://rm-lestari.vercel.app/',
},
{
  title: 'Village Information Map',
  description: 'A village information map containing information about the village and its local potential.',
  detail: 'This project was developed as part of the Kuliah Kerja Nyata (KKN), where one of the work programs involved creating a village information map containing various details about the village, such as village boundaries, plantation and agricultural areas, fields, residential areas, places of worship, schools, and other important locations. The map also highlights the village’s potential based on its available natural resources.',
  features: ['ArcMap', 'Potensi Desa', 'Peta Desa', 'Batas Desa'],
  tech: ['ArcMap', 'Visual Design'],
  image: petaDesa,
  gallery: [peta1, peta2, peta3],
},
{
  title: 'Machine Learning Classification',
  description: 'A classification system using a dummy dataset to assist with data analysis.',
  detail: 'A certification participant classification model at PPSDM Migas using the C4.5 algorithm and a dummy dataset, due to institutional restrictions that prevent the use of the original dataset.',
  features: ['Data preprocessing', 'Classification model','TF-IDF', 'Model training', 'Model evaluation'],
  tech: ['Python', 'Jupyter', 'Machine Learning'],
  image: machineLearningImage,
  gallery: [ML1, ML2],
},
{
  title: 'Portfolio Website',
  description: 'A responsive portfolio website built with HTML, CSS, and JavaScript for personal branding.',
  detail: 'A lightweight portfolio website created with native web technologies to showcase personal information and selected work.',
  features: ['Semantic HTML', 'Custom CSS', 'Interactive JavaScript'],
  tech: ['HTML', 'CSS', 'JS'],
  image: websitePortfolio,
  gallery: [porto1, porto2, porto3, porto4, porto5, porto6],
  demo: 'https://umarfaridd.github.io/portfolio/',
},
];




export default function Projects({ darkMode }) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);
  
  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          History Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-2">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}  shadow-lg overflow-hidden hover:shadow-2xl transition transform`}
            >
              <div className="group relative bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
                ) : (
                  <span className="text-6xl" aria-hidden="true">🚧</span>
                )}
                <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-black/60 px-4 text-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <div className="flex gap-2 justify-center">
                  {project.tech.map((tech, index) => (
                    <p key={index} className="w-fit text-sm bg-purple-100 text-purple-800 font-semibold rounded-full px-2 py-1">{tech}</p>
                  ))}</div>
                  <a
                    href={`/projects/${index}`}
                    className="items-center text-blue-300 hover:text-white font-semibold flex items-center gap-2"
                  >
                    View Detail <ExternalLink size={16} />
                  </a>
                </div>
              </div>                   
            </div>
          ))}
        </div>
        {projects.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {showAllProjects ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}