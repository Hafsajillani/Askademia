import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const LandingPage: FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'Natural Conversations',
      description: 'Engage in natural, flowing conversations with your AI tutor using voice or text.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Adaptive Learning',
      description: 'AI that adapts to your learning style and emotional state for optimal engagement.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Personalized Experience',
      description: 'Customized learning paths and materials tailored to your goals and progress.',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Askademia?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of education with our cutting-edge AI tutoring platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-white"
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Learning Experience?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of students who are already benefiting from personalized AI tutoring.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started for Free
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
