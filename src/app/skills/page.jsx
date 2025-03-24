"use client";
import React from 'react';
import Navbar from '../../components/Navbar';

const SkillCard = ({ name, emoji }) => (
  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="p-3 bg-blue-50 rounded-full">
      <span className="text-2xl">{emoji}</span>
    </div>
    <span className="ml-4 text-gray-700 font-medium">{name}</span>
  </div>
);

const SkillsPage = () => {
  const developmentSkills = [
    { name: "Python", emoji: "🐍" },
    { name: "C", emoji: "⚙️" },
    { name: "JavaScript", emoji: "💻" },
    { name: "HTML/CSS", emoji: "🎨" },
    { name: "SQL", emoji: "🗄️" },
    { name: "React", emoji: "⚛️" },
    { name: "PHP", emoji: "🐘" }
  ];

  const softSkills = [
    { name: "Travail d'équipe", emoji: "👥" },
    { name: "Communication", emoji: "💬" },
    { name: "Gestion de projet", emoji: "📊" },
    { name: "Résolution de problèmes", emoji: "🎯" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mes Compétences</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compétences techniques */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Compétences Techniques
            </h2>
            <div className="grid gap-4">
              {developmentSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  emoji={skill.emoji}
                />
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Soft Skills
            </h2>
            <div className="grid gap-4">
              {softSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  emoji={skill.emoji}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;