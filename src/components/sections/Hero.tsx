import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Raja Sai Durgam</span>
            </h1>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
              Aspiring Engineer | AI Enthusiast | Problem Solver
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Passionate about creating innovative solutions through technology.
              Specializing in AI, web development, and software engineering.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/Rajasai143" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/rajasai-durgam/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="#contact" icon={<Mail />} label="Contact" />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <img
                src="../src/components/assets/rs.jpg"
                alt="Profile"
                className="rounded-full object-cover w-full h-full shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}