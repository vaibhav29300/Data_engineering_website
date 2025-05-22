import React from 'react';
import { motion } from 'framer-motion';
import { LightBulbIcon, LinkIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  tools: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tutorialLink?: string;
}

const projectIdeasData: ProjectIdea[] = [
  {
    id: 'personal_portfolio_pipeline',
    title: 'Personal Portfolio Data Pipeline',
    description: 'Collect data from your GitHub, LinkedIn, or blog using APIs, process it, and store it in a simple database (e.g., SQLite or PostgreSQL). Visualize insights like commit frequency or popular blog topics.',
    tools: ['Python (Requests, Pandas)', 'SQLite/PostgreSQL', 'Cron/Scheduler', 'Matplotlib/Seaborn (optional)'],
    difficulty: 'Beginner',
    tutorialLink: 'https://www.example.com/portfolio-pipeline-tutorial' // Placeholder
  },
  {
    id: 'twitter_sentiment_analysis',
    title: 'Real-time Twitter Sentiment Analysis',
    description: 'Stream tweets using the Twitter API, perform sentiment analysis on them, and display results on a live dashboard. This project introduces streaming concepts.',
    tools: ['Python (Tweepy)', 'Kafka/RabbitMQ (for streaming)', 'NLTK/VADER (sentiment analysis)', 'Elasticsearch/OpenSearch', 'Kibana/Grafana (dashboarding)'],
    difficulty: 'Intermediate',
  },
  {
    id: 'ecomm_etl_dwh',
    title: 'E-commerce ETL and Data Warehouse',
    description: 'Simulate e-commerce data (orders, customers, products). Design an ETL pipeline to load this data into a data warehouse (e.g., Snowflake, Redshift, or a local PostgreSQL). Create reports and dashboards.',
    tools: ['Python/SQL', 'Airflow', 'DBT', 'Snowflake/Redshift/BigQuery/PostgreSQL', 'Tableau/PowerBI/Metabase'],
    difficulty: 'Intermediate',
    tutorialLink: 'https://www.example.com/ecommerce-etl-tutorial' // Placeholder
  },
  {
    id: 'log_analytics_platform',
    title: 'Log Analytics Platform',
    description: 'Collect, process, and analyze application logs. Build a system to ingest logs, parse them, store them in a searchable format, and create alerts for specific error patterns.',
    tools: ['Fluentd/Logstash', 'Kafka', 'Spark Streaming/Flink', 'Elasticsearch/OpenSearch', 'Kibana/Grafana'],
    difficulty: 'Advanced',
  },
  {
    id: 'iot_data_pipeline',
    title: 'IoT Sensor Data Pipeline',
    description: 'Simulate sensor data from IoT devices. Build a pipeline to ingest this high-volume data, process it in real-time for anomalies or aggregations, and store it for historical analysis.',
    tools: ['MQTT/Kafka', 'Spark Streaming/Flink/Kinesis Data Analytics', 'TimescaleDB/InfluxDB', 'AWS IoT/GCP IoT Core'],
    difficulty: 'Advanced',
  },
  {
    id: 'data_lake_query_engine',
    title: 'Simple Data Lake with Query Engine',
    description: 'Set up a data lake using cloud storage (S3/GCS). Ingest various data formats (CSV, JSON, Parquet). Use a query engine like Presto/Trino or Apache Drill to query the data directly.',
    tools: ['AWS S3/Google Cloud Storage', 'Apache Spark (for data processing/conversion)', 'Presto/Trino/Drill', 'Python (for orchestration)'],
    difficulty: 'Advanced',
  }
];

const ProjectIdeasPage: React.FC = () => {
  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400"
      >
        Data Engineering Project Ideas
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectIdeasData.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-orange-500/30 dark:hover:shadow-orange-400/30 transition-shadow duration-300 flex flex-col"
          >
            <div className="flex items-start mb-4">
              <LightBulbIcon className="h-10 w-10 text-orange-500 dark:text-orange-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h2>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyClass(project.difficulty)}`}>
                  {project.difficulty}
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow text-sm">{project.description}</p>
            
            <div className="mb-4">
              <h3 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
                <WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-orange-500 dark:text-orange-400" /> Tools Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="bg-orange-100 dark:bg-orange-700 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {project.tutorialLink && (
              <a 
                href={project.tutorialLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors mt-auto self-start"
              >
                Starter Template/Tutorial <LinkIcon className="h-4 w-4 ml-1" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectIdeasPage; 