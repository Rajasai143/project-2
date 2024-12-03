import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate software developer with a strong foundation in computer science
            and a keen interest in artificial intelligence and web technologies. Currently
            pursuing my degree in Computer Science, I'm constantly exploring new technologies
            and working on exciting projects.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Education
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium"></span>
                  <br />
                  Gokaraju Rangaraju Institute of Engineering and Technology, 2022-2026
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Interests
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Artificial Intelligence </li>
                
                <li>•  Machine Learning</li>
                <li>• Web Development</li>
                <li>• Stock Market & Investments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}