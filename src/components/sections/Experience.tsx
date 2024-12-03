import React from 'react';

const experiences = [
  {
    title: 'Storyteller Chat-bot',
    date: 'June 2024',
    description: [
      'Spearheaded the development of an AI-powered Chat-bot using Gemini Pro, which generated personalized, age-appropriate stories based on user input.',
      'Leveraged NLP techniques to enable a highly interactive user experience, resulting in a 30% increase in story completion rates and improved user engagement metrics.',
    ],
  },
  {
    title: 'Nutri-Verse',
    date: 'Feb 2024 – June 2024',
    description: [
      'Architected a health and wellness platform featuring a custom recipe generator, a diet planner, and a blog with weekly updates.',
      'Created an interactive local vegetable availability feature, leading to a 25% boost in user retention; this innovative addition helped attract new users and fostered greater community engagement.',
      'Deployed the website using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and seamless user experience across devices.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-600 dark:before:bg-blue-400"
              >
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] bg-blue-600 dark:bg-blue-400 rounded-full" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-300 mb-2">
                  {exp.company} • {exp.period}
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}