"use client";
import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Arthur BRIOT étudiant en BTS SIO passionné par le développement web
          </p>
          
          <div className="flex justify-center space-x-4">
            <img 
              src="/images/pere.png"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Je suis étudiant en BTS Services Informatiques aux Organisations, 
              spécialisé dans le développement d'applications. Passionné par les 
              nouvelles technologies et le développement web, je cherche constamment 
              à améliorer mes compétences et à relever de nouveaux défis.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}