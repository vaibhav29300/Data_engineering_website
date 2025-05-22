import React from 'react';
import { motion } from 'framer-motion';
import { CommandLineIcon, CodeBracketIcon, CloudIcon, ServerIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

interface RoadmapStage {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  learningLinks: { name: string; url: string; type: 'YouTube' | 'Blog' | 'Course' }[];
  codeSnippets?: { language: string; code: string }[];
}

const roadmapData: RoadmapStage[] = [
  {
    id: 'prerequisites',
    title: 'Prerequisites',
    icon: CommandLineIcon,
    description: 'Fundamental skills required before diving into data engineering specifics.',
    learningLinks: [
      { name: 'Python for Everybody (Coursera)', url: 'https://www.coursera.org/specializations/python', type: 'Course' },
      { name: 'SQLBolt - Learn SQL', url: 'https://sqlbolt.com/', type: 'Blog' },
      { name: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'Blog' },
    ],
    codeSnippets: [
        { language: 'python', code: 'print("Hello, Data Engineering!")' },
        { language: 'sql', code: 'SELECT * FROM users;' }
    ]
  },
  {
    id: 'core_concepts',
    title: 'Core Concepts',
    icon: AcademicCapIcon,
    description: 'Understanding the foundational principles of data management and processing.',
    learningLinks: [
      { name: 'Data Warehousing Fundamentals (Kimball Group)', url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/', type: 'Blog' },
      { name: 'ETL Process Explained (Guru99)', url: 'https://www.guru99.com/etl-extract-transform-load.html', type: 'Blog' },
      { name: 'Data Modeling Concepts (Udacity)', url: 'https://www.udacity.com/course/data-modeling--ud955', type: 'Course' }, 
    ],
  },
  {
    id: 'tools_platforms',
    title: 'Tools & Platforms',
    icon: ServerIcon,
    description: 'Hands-on experience with popular data engineering tools and platforms.',
    learningLinks: [
      { name: 'Apache Airflow Tutorial (Official Docs)', url: 'https://airflow.apache.org/docs/apache-airflow/stable/tutorial.html', type: 'Blog' },
      { name: 'Apache Spark Quick Start', url: 'https://spark.apache.org/docs/latest/quick-start.html', type: 'Blog' },
      { name: 'Kafka Tutorials (Confluent)', url: 'https://developer.confluent.io/learn-kafka/', type: 'Course' },
      { name: 'DBT Fundamentals (DBT Labs)', url: 'https://courses.getdbt.com/courses/dbt-fundamentals', type: 'Course' },
      { name: 'Snowflake University', url: 'https://www.snowflake.com/snowflake-university/', type: 'Course'}
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    icon: CloudIcon,
    description: 'Leveraging cloud services for scalable and managed data solutions.',
    learningLinks: [
      { name: 'AWS Training and Certification (Official)', url: 'https://aws.amazon.com/training/', type: 'Course' },
      { name: 'Google Cloud Data Engineering Track', url: 'https://cloud.google.com/training/data-engineer', type: 'Course' },
    ],
  },
  {
    id: 'advanced_topics',
    title: 'Advanced Topics',
    icon: BriefcaseIcon, // Placeholder, consider a more specific icon
    description: 'Exploring specialized areas within data engineering.',
    learningLinks: [
      { name: 'Building Real-Time Data Pipelines (Blog)', url: 'https://www.kai-waehner.de/blog/2020/09/15/real-time-data-streaming-vs-batch-processing-kafka-spark-flink-comparison/', type: 'Blog' },
      { name: 'Data Governance Institute', url: 'https://www.datagovernance.com/', type: 'Blog' },
      { name: 'Databricks Lakehouse Platform', url: 'https://www.databricks.com/product/data-lakehouse', type: 'Blog' },
    ],
  },
  {
    id: 'interview_prep',
    title: 'Interview Prep',
    icon: AcademicCapIcon, // Placeholder, consider a more specific icon
    description: 'Preparing for data engineering interviews.',
    learningLinks: [
      { name: 'LeetCode (DSA Practice)', url: 'https://leetcode.com/', type: 'Blog' },
      { name: 'Grokking the System Design Interview (Educative.io)', url: 'https://www.educative.io/courses/grokking-the-system-design-interview', type: 'Course' },
      { name: 'DataLemur - SQL Interview Questions', url: 'https://datalemur.com/', type: 'Blog'}
    ],
  },
];

const RoadmapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-8 sm:py-12 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-600 dark:text-blue-400"
      >
        Your Data Engineering Roadmap
      </motion.h1>

      <div className="space-y-10 sm:space-y-16">
        {roadmapData.map((stage, index) => (
          <motion.section 
            key={stage.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <stage.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 dark:text-blue-400 mr-3 sm:mr-4 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">{stage.title}</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">{stage.description}</p>
            
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">Key Learning Resources:</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                {stage.learningLinks.map(link => (
                  <li key={link.name} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                      {link.name}
                    </a>
                    <span className={`ml-1 sm:ml-2 text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded-full 
                      ${link.type === 'Course' ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200' : 
                        link.type === 'Blog' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200' : 
                        'bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-200'}
                    `}>
                      {link.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {stage.codeSnippets && stage.codeSnippets.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">Code Snippet Previews:</h3>
                {stage.codeSnippets.map(snippet => (
                  <div key={snippet.language} className="mb-3 sm:mb-4 bg-gray-900 dark:bg-gray-700 rounded-md shadow-inner overflow-hidden">
                    <div className="bg-gray-700 dark:bg-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs text-gray-300 dark:text-gray-200 font-mono flex justify-between items-center">
                      <span>{snippet.language.toUpperCase()}</span>
                      <CodeBracketIcon className="h-4 w-4 sm:h-5 sm:w-5"/>
                    </div>
                    <pre className="p-3 sm:p-4 text-xs sm:text-sm text-white overflow-x-auto">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default RoadmapPage; 