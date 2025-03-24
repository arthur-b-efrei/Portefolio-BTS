"use client";
import React from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Navbar />
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Mes coordonnées
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Email</h3>
              <a href="mailto:arthur.briot@efrei.net" className="text-blue-600 hover:text-blue-800">
                arthur.briot@efrei.net
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/arthur-briot-00b7152aa/"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700">GitHub</h3>
              <a
                href="https://github.com/arthur-b-efrei"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
