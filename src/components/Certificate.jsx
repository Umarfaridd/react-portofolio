import { useEffect, useState } from 'react';
import { ArrowRight, Eye, X } from 'lucide-react';
import mlBeginner from '../assets/assets-sertif/sertif-ML-beginner-bisaai.png';
import dataScience from '../assets/assets-sertif/sertif-data-science-bisaai.png';
import dasarPython from '../assets/assets-sertif/sertif-dasar-python-bisaai.png';
import dasarJS from '../assets/assets-sertif/sertif-dasar-js-dicoding.jpg';


const certificateData = [
    {
        title: 'Dasar-dasar JavaScript',
        by: 'Dicoding',
        date: 'October 2025',
        image: dasarJS,
    },
    {
        title: 'Machine Learning for Beginner',
        by: 'BISA AI',
        date: 'Agustus 2026',
        image: mlBeginner,
    },
    
    {
        title: 'Data Science with Python',
        by: 'BISA AI',
        date: 'Agustus 2026',
        image: dataScience,
    },
    {
        title: 'Dasar-dasar Python',
        by: 'BISA AI',
        date: 'Agustus 2026',
        image: dasarPython,
    }
];
export default function Certificate({ darkMode }) {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    useEffect(() => {
        if (!selectedCertificate) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedCertificate(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedCertificate]);

    return(
        <section id="certificate" className={`py-14 px-4 shadow-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white-200 text-gray-800'}`} >
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`} >
                    Certificate
                </h2>
                
                    <div className="certificate-content grid md:grid-cols-4 gap-1 py-8 text-left">        
                        {certificateData.map((certificate, index) => (
                            <div key={index} className="certificate-item px-6">
                                <div className="certificate-image group relative overflow-hidden rounded-lg shadow-md">
                                    <img src={certificate.image} alt={certificate.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedCertificate(certificate)}
                                            aria-label={`Preview certificate ${certificate.title}`}
                                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-gray-900 shadow transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                                        >
                                            <Eye size={18} />
                                            Preview
                                        </button>
                                    </div>
                                </div>
                                <h3 className="mt-3 font-semibold">{certificate.title}</h3>
                                <p className="text-sm opacity-75">
                                    {certificate.by}{certificate.date && ` · ${certificate.date}`}
                                </p>
                            </div>
                        ))} 
                    </div>                 
            </div>
            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Preview certificate ${selectedCertificate.title}`}
                        className={`relative max-h-full w-full max-w-5xl overflow-auto rounded-xl p-4 shadow-2xl ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedCertificate(null)}
                            aria-label="Tutup preview sertifikat"
                            className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <X size={22} />
                        </button>
                        <img
                            src={selectedCertificate.image}
                            alt={selectedCertificate.title}
                            className="mx-auto max-h-[75vh] w-full object-contain"
                        />
                        <div className="pt-3 text-center">
                            <h3 className="text-lg font-semibold">{selectedCertificate.title}</h3>
                            <p className="text-sm opacity-75">
                                {selectedCertificate.by}{selectedCertificate.date && ` · ${selectedCertificate.date}`}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}