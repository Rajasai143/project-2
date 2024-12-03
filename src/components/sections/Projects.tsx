import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Safe Pulse App (In Progress)',
    description: 'A health monitoring application under development that tracks vital signs and provides real-time alerts for emergencies.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    // github: 'https://github.com',   Replace with actual link when ready
    demo: null, // Demo not available yet
    status: 'Currently Working On',
  },
  {
    title: 'AI Image Recognition',
    description: 'Deep learning model for real-time object detection using PyTorch.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    tech: ['Python', 'PyTorch', 'Gemini'],
    // github: 'https://github.com',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern and responsive portfolio website built with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tech: ['React', 'Tailwind'],
    // github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              // className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              {/* <span>Code</span> */}
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}