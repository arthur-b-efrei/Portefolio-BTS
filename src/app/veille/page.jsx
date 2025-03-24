import React from 'react';
import Navbar from '../../components/Navbar';

const VeillesPage = () => {
    const veilles = [
        {
            id: 1,
            sujet: "L'Impact de la Big Data sur les Entreprises",
            description: "La Big Data transforme les opérations commerciales en offrant des insights précieux grâce à l'analyse de grandes quantités de données.",
            source: "https://www.a-speakers.fr/theme/big-data/?utm_source=google&utm_medium=cpc&utm_campaign=FR%20-%20DSA%20-%20Topics&utm_term=&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYpiNN3wETWx0vfcL9Y6yjtynU3X2humn9VyqPPSMnLugBZDi-VK-y0aAsyREALw_wcB",
            sourceText: "Big Data", // Texte court pour le lien
            date: "Janvier 2025"
        },
        {
            id: 2,
            sujet: "L'Intelligence Artificielle",
            description: "L'article du Figaro explore l'impact de l'intelligence artificielle sur divers secteurs, de la recherche scientifique à la sécurité, en passant par les défis éthiques et les innovations technologiques.",
            source: "https://www.lefigaro.fr/tag/intelligence-artificielle",
            sourceText: "IA", // Texte court pour le lien
            date: "Décembre 2024"
        },
    ];

    return (
        <div className='min-h-screen bg-gray-50 py-16'>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Veille Technologique</h1>
                <div className="space-y-6">
                    {veilles.map((veille) => (
                        <div key={veille.id} className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-900">{veille.sujet}</h2>
                            <p className="text-gray-700 mt-2">{veille.description}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                Source: <a href={veille.source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{veille.sourceText}</a>
                            </p>
                            <p className="text-gray-500 text-sm mt-1">Date: {veille.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VeillesPage;
