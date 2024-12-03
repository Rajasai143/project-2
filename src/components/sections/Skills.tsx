import React from 'react';

const skills = {
  'Programming Languages': [ 'Python','Java' ,'PHP','JavaScript'],
  'Frontend Development': ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  'Backend Development': ['MySQL', 'MongoDB'],
  'AI & Machine Learning': ['PyTorch', 'TensorFlow', 'Scikit-learn'],

};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
