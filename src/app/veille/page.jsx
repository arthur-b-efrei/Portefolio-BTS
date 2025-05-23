import React from 'react';
import Navbar from '../../components/Navbar';

const VeillesPage = () => {
    const veilles = [
        {
            id: 1,
            sujet: "L'Impact de la Big Data dans le monde ",
            description: "Le Big Data a un impact profond et transformateur sur divers aspects de la société et des industries.",
            source: "https://www.lefigaro.fr/tag/big-data",
            sourceText: "Big Data",
        },
    ];
    const veilles2 = [{
        description:"📊 Entreprises Analyse des comportements clients, optimisation des chaînes logistiques, prise de décision basée sur des données en temps réel."
    }];
    const veilles3 = [{
        description:"🏥 Santé Détection précoce de maladies (IA + données médicales), suivi épidémiologique (ex. : COVID-19)."
    }];
    const veilles4 = [{
        description:"🌍 Environnement Surveillance climatique, prévision de catastrophes naturelles, optimisation énergétique (villes intelligentes)."
    }];
    const veilles5 = [{
        description:"🚗 Transports Gestion intelligente du trafic, véhicules autonomes, analyse des flux de passagers."
    }];
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
                            <p className="text-gray-700 mt-2">{veilles2[0].description}</p>
                            <p className="text-gray-700 mt-2">{veilles3[0].description}</p>
                            <p className="text-gray-700 mt-2">{veilles4[0].description}</p>
                            <p className="text-gray-700 mt-2">{veilles5[0].description}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                Source: <a href={veille.source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{veille.sourceText}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VeillesPage;
