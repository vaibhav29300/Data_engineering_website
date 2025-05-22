import React from 'react';
import { motion } from 'framer-motion';
import { DocumentTextIcon, BriefcaseIcon, ShieldExclamationIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface TipSection {
  id: string;
  title: string;
  icon: React.ElementType;
  points: string[];
  subSections?: {
    title: string;
    points: string[];
  }[];
}

const tipsData: TipSection[] = [
  {
    id: 'resume_writing',
    title: 'Writing a Strong Data Engineering Resume',
    icon: DocumentTextIcon,
    points: [
      'Highlight relevant technical skills: Python, SQL, ETL tools (Airflow, Spark, Kafka), Cloud (AWS, GCP, Azure), Databases (SQL, NoSQL), Data Warehousing (Snowflake, Redshift), dbt.',
      'Use action verbs to describe your accomplishments (e.g., Developed, Implemented, Optimized, Led).',
      'Quantify your achievements whenever possible (e.g., \"Reduced data processing time by 30%\").',
      'Tailor your resume to each job description, emphasizing the skills and experiences most relevant to the role.',
      'Include a projects section showcasing your hands-on experience, especially if you have limited professional experience.',
      'Keep it concise and easy to read, ideally one page for less experienced candidates, maximum two pages for experienced.'
    ]
  },
  {
    id: 'common_pitfalls',
    title: 'Common Resume Pitfalls to Avoid',
    icon: ShieldExclamationIcon,
    points: [
      'Typos and grammatical errors: Proofread multiple times!',
      'Vague or generic descriptions: Be specific about your role and contributions.',
      'Listing technologies without context: Explain how you used them and what you achieved.',
      'Outdated information or irrelevant experiences.',
      'Poor formatting or difficult-to-read fonts/layout.'
    ]
  },
  {
    id: 'linkedin_optimization',
    title: 'LinkedIn Optimization Tips',
    icon: UserCircleIcon,
    points: [
      'Use a professional headshot and a compelling headline that includes \"Data Engineer\".',
      'Write a detailed \"About\" section summarizing your skills, experience, and career aspirations.',
      'List your technical skills in the Skills section and get endorsements.',
      'Request recommendations from colleagues, supervisors, or mentors.',
      'Share relevant content, articles, or your own projects to showcase your expertise and engagement.',
      'Network actively: connect with recruiters, hiring managers, and other data professionals.'
    ]
  },
  {
    id: 'job_platforms',
    title: 'Best Platforms to Apply for Data Engineering Jobs',
    icon: MagnifyingGlassIcon,
    points: [
      'LinkedIn Jobs: The most popular platform with a vast number of listings and networking opportunities.',
      'YCombinator Work at a Startup: For roles at YC-backed startups, often innovative and fast-paced.',
      'Wellfound (formerly AngelList Talent): Focuses on startup jobs, good for finding equity opportunities.',
      'Hirect: A chat-based hiring platform, often good for direct connections with recruiters and founders.',
      'Company Career Pages: Directly apply on the websites of companies you are interested in.',
      'Niche Job Boards: Look for job boards specific to data or tech in your region.'
    ]
  }
];

const ResumeJobTipsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-teal-600 dark:text-teal-400"
      >
        Resume & Job Application Tips
      </motion.h1>

      <div className="space-y-12 max-w-4xl mx-auto">
        {tipsData.map((section, index) => (
          <motion.section 
            key={section.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-teal-500/30 dark:hover:shadow-teal-400/30 transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <section.icon className="h-10 w-10 text-teal-500 dark:text-teal-400 mr-4 flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed pl-2 sm:pl-4">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {section.subSections && section.subSections.map(sub => (
                <div key={sub.title} className="mt-4 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{sub.title}</h3>
                    <ul className="list-circle list-inside space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {sub.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ResumeJobTipsPage; 