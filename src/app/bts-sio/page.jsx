"use client";

import React from 'react';
import Navbar from '../../components/Navbar';

const BTSSIOPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">BTS SIO</h1>
        <div className="space-y-8">
          {/* Présentation générale */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Le BTS SIO
            </h2>
            <p className="text-gray-600 mb-4">
              Le BTS Services Informatiques aux Organisations est un diplôme reconnu
              qui forme des professionnels de l'informatique capables de répondre
              aux besoins des organisations.
            </p>
          </div>
          {/* Option SLAM */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Option SLAM
            </h2>
            <p className="text-gray-600 mb-4">
              L'option Solutions Logicielles et Applications Métiers forme des
              spécialistes des solutions logicielles.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Compétences acquises
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Développement d'applications</li>
              <li>Gestion de bases de données</li>
              <li>Gestion de projet</li>
              <li>Cybersécurité</li>
              <li>Support et maintenance</li>
            </ul>
          </div>
          {/* Stages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stages en entreprise
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Stage première année
                </h3>
                <p className="text-gray-600">
                  <strong>Entreprise :</strong> BH-Technologies, Nanterre<br />
                  <strong>Période :</strong> Mai 2024 - Juin 2024
                </p>
                <h4 className="text-md font-semibold text-gray-800 mt-3">Missions réalisées :</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Optimisation de tâches Scheduler pour améliorer l'automatisation des processus.</li>
                  <li>Développement en Python d'un programme permettant l'envoi automatique de données issues d'une base de données par e-mail.</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Ce stage m'a permis d'approfondir mes compétences en automatisation et en programmation Python,
                  tout en appliquant des solutions techniques pour optimiser les processus métier.
                </p>
              </div>
              <hr className="border-t-1 border-gray-800 font-bold my-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Stage deuxième année
                </h3>
                <p className="text-gray-600">
                  <strong>Entreprise :</strong> Klesia, Montreuil<br />
                  <strong>Période :</strong> Novembre 2024 - Décembre 2024
                </p>
                <h4 className="text-md font-semibold text-gray-800 mt-3">Missions réalisées :</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Développement JavaScript sur la plateforme ServiceNow.</li>
                  <li>Support informatique pour les utilisateurs.</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Ce stage m'a permis d'acquérir de l'expérience en développement JavaScript sur ServiceNow
                  ainsi qu'en support informatique, renforçant mes compétences en gestion et assistance technique.
                </p>
              </div>
            </div>
          </div>
          {/* Lien de téléchargement du document Excel */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <a
              href="/documents/Arthur_Briot_e5.xlsx"
              download
              className="text-blue-500 hover:underline"
            >
              Télécharger le tableau de synthèse Epreuve E5
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTSSIOPage;
