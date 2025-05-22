import React from 'react';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon, CircleStackIcon, CloudArrowUpIcon, BeakerIcon, CommandLineIcon } from '@heroicons/react/24/outline'; // Added CommandLineIcon

interface ToolCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  tools: { name: string; description: string; officialSite?: string }[];
}

const toolsData: ToolCategory[] = [
  {
    id: 'ides',
    name: 'IDEs (Integrated Development Environments)',
    icon: ComputerDesktopIcon,
    tools: [
      { name: 'Visual Studio Code', description: 'A popular, free source code editor with extensive extensions for Python, SQL, and more.', officialSite: 'https://code.visualstudio.com/' },
      { name: 'PyCharm', description: 'A powerful Python IDE by JetBrains, with excellent debugging and database tools.', officialSite: 'https://www.jetbrains.com/pycharm/' },
    ],
  },
  {
    id: 'data_tools',
    name: 'Data Manipulation & Querying Tools',
    icon: CircleStackIcon,
    tools: [
      { name: 'DBeaver', description: 'A free multi-platform universal database tool for developers, SQL programmers, database administrators and analysts.', officialSite: 'https://dbeaver.io/' },
      { name: 'Postman', description: 'An API platform for building and using APIs. Useful for testing data API endpoints.', officialSite: 'https://www.postman.com/' },
      { name: 'Apache Airflow', description: 'Platform to programmatically author, schedule, and monitor workflows.', officialSite: 'https://airflow.apache.org/' },
      { name: 'Apache Spark', description: 'A unified analytics engine for large-scale data processing.', officialSite: 'https://spark.apache.org/' },
      { name: 'Apache Kafka', description: 'A distributed event streaming platform.', officialSite: 'https://kafka.apache.org/' },
      { name: 'dbt (data build tool)', description: 'Enables analytics engineers to transform data in their warehouse more effectively.', officialSite: 'https://www.getdbt.com/' },
    ],
  },
  {
    id: 'cloud_tools',
    name: 'Cloud Platform Tools',
    icon: CloudArrowUpIcon,
    tools: [
      { name: 'AWS Management Console', description: 'Web-based interface for accessing and managing Amazon Web Services.', officialSite: 'https://aws.amazon.com/console/' },
      { name: 'Google Cloud Console', description: 'Web-based interface for accessing and managing Google Cloud Platform services.', officialSite: 'https://console.cloud.google.com/' },
      { name: 'Snowflake Snowsight', description: 'The web interface for Snowflake, allowing SQL querying, data loading, and account management.', officialSite: 'https://www.snowflake.com/' },
      { name: 'Databricks Workspace', description: 'Collaborative environment for data engineering, data science, and machine learning using Apache Spark.', officialSite: 'https://databricks.com/' },
    ],
  },
  {
    id: 'notebook_tools',
    name: 'Notebook Tools',
    icon: BeakerIcon,
    tools: [
      { name: 'Jupyter Notebook/Lab', description: 'Web-based interactive computing notebooks, documents, and data.', officialSite: 'https://jupyter.org/' },
      { name: 'Apache Zeppelin', description: 'Web-based notebook that enables data-driven, interactive data analytics and collaborative documents with SQL, Scala, Python, R and more.', officialSite: 'https://zeppelin.apache.org/' },
      { name: 'Google Colaboratory (Colab)', description: 'Free Jupyter notebook environment that requires no setup and runs entirely in the cloud.', officialSite: 'https://colab.research.google.com/'}
    ],
  },
    {
    id: 'cli_tools',
    name: 'Command Line Interface (CLI) Tools',
    icon: CommandLineIcon,
    tools: [
      { name: 'AWS CLI', description: 'Unified tool to manage your AWS services from the command line.', officialSite: 'https://aws.amazon.com/cli/' },
      { name: 'gcloud CLI', description: 'Command-line tool for Google Cloud Platform.', officialSite: 'https://cloud.google.com/sdk/gcloud' },
      { name: 'Docker CLI', description: 'Command-line tool for managing Docker containers.', officialSite: 'https://docs.docker.com/engine/reference/commandline/cli/' },
      { name: 'kubectl', description: 'Command-line tool for controlling Kubernetes clusters.', officialSite: 'https://kubernetes.io/docs/reference/kubectl/' }
    ],
  },
];

const ToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-8 sm:py-12 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-purple-600 dark:text-purple-400"
      >
        Essential Data Engineering Tools
      </motion.h1>

      <div className="space-y-10 sm:space-y-12">
        {toolsData.map((category, index) => (
          <motion.section 
            key={category.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-purple-400/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <category.icon className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500 dark:text-purple-400 mr-3 sm:mr-4 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">{category.name}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.tools.map(tool => (
                <motion.div 
                  key={tool.name}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)"}}
                  className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-700 dark:text-purple-300 mb-1 sm:mb-2">{tool.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 flex-grow leading-relaxed">{tool.description}</p>
                  {tool.officialSite && (
                    <a 
                      href={tool.officialSite} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs sm:text-sm text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors self-start mt-auto"
                    >
                      Official Site →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage; 