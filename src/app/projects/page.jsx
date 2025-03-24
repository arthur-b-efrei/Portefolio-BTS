import React from 'react';
import Navbar from '../../components/Navbar';

const ProjectCard = ({ title, description, technologies, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-90 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Création de mon portfolio en utilisant React et Next.js",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      imageUrl: "/images/logo.png"
    },
    {
      title: "Application de Gestion d'inventaire",
      description: "Développement d'une application de gestion pour une entreprise",
      technologies: ["Python", "SQLite"],
      imageUrl: "/images/checklists.png" // Chemin vers l'image spécifique
    },
    {
      title: "App Météo",
      description: "Création d'un site météo avec les prévisions en utilisant des API et un routage dynamique",
      technologies: ["React", "Node.js",],
      imageUrl: "/images/weather-app.png" // Chemin vers l'image spécifique
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mes Projets</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
