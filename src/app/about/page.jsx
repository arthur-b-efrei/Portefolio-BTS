import React from "react";
import Navbar from "../../components/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">À propos de moi</h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/cv.png"
                alt="Profile"
                className="rounded-lg w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Mon Parcours
              </h2>

              <div className="space-y-4">
                <p className="text-gray-600">
                  Actuellement en BTS SIO option SLAM, je me forme aux différentes
                  technologies du développement web et mobile.
                </p>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Formation</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>BTS SIO - Option SLAM (2023-2025)</li>
                    <li>EPITECH (2022/2023)</li>
                    <li>Baccalauréat STI2D (2021/2022)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">Centres d'intérêt</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>Volleyball</li>
                    <li>Développement</li>
                    <li>Nouvelles Technologies</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <a
                    href="/path/to/your/cv.pdf"
                    download="CV_Nom_Prenom.pdf"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
