export default function Experineces({ darkMode }){
    return(
        <section id="experiences" className={`py-14 px-4 shadow-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white-200 text-gray-800'}`} >
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`} >
                    Experiences
                </h2>
                <div className="experiences-content grid md:grid-cols-2 gap-10 py-8 text-left">        
                    <div className="experiences-title px-6">
                        <h3 className={`flex justify-between items-center text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`} >
                            Student Internship
                            <span className="text-sm font-normal">Juny 2021 - December 2021</span>
                        </h3>
                        <h4 className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-800'} pb-1`} >
                            CV. Mekar Sari
                        </h4>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} >
                            
                                <li className="list-disc ml-5">Assisted in planning and executing construction projects</li>
                                <li className="list-disc ml-5">Created technical drawings and designs using AutoCAD</li>
                                <li className="list-disc ml-5">Monitored project implementation to ensure compliance with procedures and technical drawings.</li>
                                <li className="list-disc ml-5">Collaborated with team members to ensure project completion</li>
                            
                        </p>                     
                    </div>
                    <div className="experiences-title px-6">
                        <h3 className={`flex justify-between items-center text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`} >
                            Student Internship
                            <span className="text-sm font-normal">April 2025 - May 2025</span>
                        </h3>
                        <h4 className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-800'}pb-1`} >
                            PPSDM Migas
                        </h4>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} >
                            
                                <li className="list-disc ml-5">Developed a classification system project using Machine Learning.</li>
                                <li className="list-disc ml-5">Performed data processing and preprocessing to prepare the dataset.</li>
                                <li className="list-disc ml-5">Trained and evaluated Machine Learning models.</li>
                                <li className="list-disc ml-5">Developed a classification system to support data analysis.</li>
                            
                        </p>                                                                  
                    </div>
                </div>
            </div>
        </section>
    );
}