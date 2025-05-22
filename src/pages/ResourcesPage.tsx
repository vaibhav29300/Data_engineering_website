import React from 'react';
import { motion } from 'framer-motion';
import { LinkIcon, PlayCircleIcon, BookOpenIcon, CodeBracketSquareIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface ResourceCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  items: { name: string; url: string; description: string }[];
}

const resourcesData: ResourceCategory[] = [
  {
    id: 'youtube',
    name: 'YouTube Channels',
    icon: PlayCircleIcon,
    items: [
      { name: 'freeCodeCamp.org', url: 'https://www.youtube.com/c/Freecodecamp', description: 'Comprehensive tutorials on various tech topics including data engineering.' },
      { name: 'SeattleDataGuy', url: 'https://www.youtube.com/c/SeattleDataGuy', description: 'Focuses on data engineering concepts, career advice, and tool reviews.' },
      { name: 'Andreas Kretz', url: 'https://www.youtube.com/c/AndreasKretz', description: 'Kafka, streaming, and real-time data processing tutorials.' },
      { name: 'Data Engineering Podcast', url: 'https://www.youtube.com/c/DataEngineeringPodcast', description: 'Interviews with data engineering professionals.' },
    ],
  },
  {
    id: 'github',
    name: 'GitHub Projects',
    icon: CodeBracketSquareIcon,
    items: [
      { name: 'Awesome Data Engineering', url: 'https://github.com/awesomedataengineering/awesome-data-engineering', description: 'A curated list of data engineering resources.' },
      { name: 'Data Engineering Zoomcamp', url: 'https://github.com/DataTalksClub/data-engineering-zoomcamp', description: 'Free, practical, hands-on data engineering course.' },
      { name: 'Airflow Example Dags', url: 'https://github.com/apache/airflow/tree/main/airflow/example_dags', description: 'Example DAGs from the official Apache Airflow repository.' },
    ],
  },
  {
    id: 'blogs',
    name: 'Blogs & Newsletters',
    icon: BookOpenIcon,
    items: [
      { name: 'Towards Data Science', url: 'https://towardsdatascience.com/', description: 'Medium publication with a wide range of data science and engineering articles.' },
      { name: 'Data Engineering Weekly', url: 'https://www.dataengineeringweekly.com/', description: 'A weekly newsletter curating data engineering articles.' },
      { name: 'Confluent Blog', url: 'https://www.confluent.io/blog/', description: 'Articles on Kafka, event streaming, and real-time data.' },
      { name: 'Databricks Blog', url: 'https://databricks.com/blog', description: 'Insights on Spark, Delta Lake, and the Lakehouse paradigm.' },
    ],
  },
  {
    id: 'moocs',
    name: 'MOOCs (Online Courses)',
    icon: BookOpenIcon,
    items: [
      { name: 'Coursera - Data Engineering Specializations', url: 'https://www.coursera.org/browse/data-science/data-engineering', description: 'Various specializations from universities and companies.' },
      { name: 'Udemy - Data Engineering Courses', url: 'https://www.udemy.com/topic/data-engineering/', description: 'A wide selection of paid courses on specific tools and concepts.' },
      { name: 'DataCamp - Data Engineer Track', url: 'https://www.datacamp.com/tracks/data-engineer-with-python', description: 'Interactive courses focused on Python for data engineering.' },
    ],
  },
  {
    id: 'interview_questions',
    name: 'Interview Question Banks',
    icon: QuestionMarkCircleIcon,
    items: [
      { name: 'LeetCode', url: 'https://leetcode.com/', description: 'Platform for practicing coding interview questions (DSA).' },
      { name: 'HackerRank', url: 'https://www.hackerrank.com/', description: 'Coding challenges and interview preparation.' },
      { name: 'StrataScratch', url: 'https://stratascratch.com/', description: 'SQL and Python interview questions from real companies.' },
      { name: 'DataLemur', url: 'https://datalemur.com/', description: 'SQL interview questions for data roles.'}
    ],
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-8 sm:py-12 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-600 dark:text-green-400"
      >
        Curated Data Engineering Resources
      </motion.h1>

      <div className="space-y-10 sm:space-y-12">
        {resourcesData.map((category, index) => (
          <motion.section 
            key={category.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-2xl hover:shadow-green-500/30 dark:hover:shadow-green-400/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <category.icon className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 dark:text-green-400 mr-3 sm:mr-4 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">{category.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {category.items.map(item => (
                <motion.div 
                  key={item.name}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)"}}
                  className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-green-700 dark:text-green-300 mb-1 sm:mb-2">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 leading-relaxed">{item.description}</p>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-xs sm:text-sm text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Visit Resource <LinkIcon className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage; 