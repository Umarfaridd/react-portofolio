export default function Experineces({ darkMode }){
    return(
        <section id="experiences" className={`py-14 px-4 shadow-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white-200 text-gray-800'}`} >
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`} >
                    Experiences
                </h2>
                <div className="experiences-content grid md:grid-cols-2 gap-10 py-8 text-left">        
                    <div className="experiences-title px-6">
                        <h3 className={`flex justify-between items-center text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`} >
                            Student Internship
                            <span className="text-sm font-normal">Juni 2021 - Desember 2021</span>
                        </h3>
                        <h4 className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-800'}`} >
                            CV. Mekar Sari
                        </h4>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} >
                             Focused on various construction tasks in the field, creating designs using AutoCAD, and gaining experience in work processes, attention to detail, discipline, and teamwork to complete tasks effectively.
                        </p>                                                                  
                    </div>
                    <div className="experiences-title px-6">
                        <h3 className={`flex justify-between items-center text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`} >
                            Student Internship
                            <span className="text-sm font-normal">April 2025 - Mei 2025</span>
                        </h3>
                        <h4 className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-800'}`} >
                            PPSDM Migas
                        </h4>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} >
                             Focused on developing a Machine Learning-based classification system. Responsible for data processing, preprocessing, model training, and model evaluation to develop a classification system that supports data analysis.
                        </p>                                                                  
                    </div>
                </div>
            </div>
        </section>
    );
}