import { useEffect, useState } from 'react';
import { ArrowRight, Eye, X } from 'lucide-react';
import mlBeginner from '../assets/assets-sertif/sertif-ML-beginner-bisaai.png';
import dataScience from '../assets/assets-sertif/sertif-data-science-bisaai.png';
import dasarPython from '../assets/assets-sertif/sertif-dasar-python-bisaai.png';
import dasarJS from '../assets/assets-sertif/sertif-dasar-js-dicoding.jpg';


const sertificateData = [
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
export default function Sertificate({ darkMode }) {
    const [selectedSertificate, setSelectedSertificate] = useState(null);

    useEffect(() => {
        if (!selectedSertificate) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedSertificate(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedSertificate]);

    return(
        <section id="sertificate" className={`py-14 px-4 shadow-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white-200 text-gray-800'}`} >
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`} >
                    Sertificate
                </h2>
                
                    <div className="sertificate-content grid md:grid-cols-4 gap-1 py-8 text-left">        
                        {sertificateData.map((sertificate, index) => (
                            <div key={index} className="sertificate-item px-6">
                                <div className="sertificate-image group relative overflow-hidden rounded-lg shadow-md">
                                    <img src={sertificate.image} alt={sertificate.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedSertificate(sertificate)}
                                            aria-label={`Preview sertifikat ${sertificate.title}`}
                                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-gray-900 shadow transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                                        >
                                            <Eye size={18} />
                                            Preview
                                        </button>
                                    </div>
                                </div>
                                <h3 className="mt-3 font-semibold">{sertificate.title}</h3>
                                <p className="text-sm opacity-75">
                                    {sertificate.by}{sertificate.date && ` · ${sertificate.date}`}
                                </p>
                            </div>
                        ))} 
                    </div>                 
            </div>
            {selectedSertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedSertificate(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Preview sertifikat ${selectedSertificate.title}`}
                        className={`relative max-h-full w-full max-w-5xl overflow-auto rounded-xl p-4 shadow-2xl ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedSertificate(null)}
                            aria-label="Tutup preview sertifikat"
                            className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <X size={22} />
                        </button>
                        <img
                            src={selectedSertificate.image}
                            alt={selectedSertificate.title}
                            className="mx-auto max-h-[75vh] w-full object-contain"
                        />
                        <div className="pt-3 text-center">
                            <h3 className="text-lg font-semibold">{selectedSertificate.title}</h3>
                            <p className="text-sm opacity-75">
                                {selectedSertificate.by}{selectedSertificate.date && ` · ${selectedSertificate.date}`}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}