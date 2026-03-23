import React from 'react';
import { Shield, Medal, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustFeatures = () => {
  return (
    <section className="py-20 bg-brand-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-16 border-b border-gray-200 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Users size={32} className="text-brand-blue" />
            </div>
            <h4 className="text-4xl font-bold mb-2">10,000+</h4>
            <p className="text-gray-500 font-medium">Trusted Customers</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Shield size={32} className="text-brand-red" />
            </div>
            <h4 className="text-4xl font-bold mb-2">100%</h4>
            <p className="text-gray-500 font-medium">Safety Record</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Medal size={32} className="text-brand-yellow" />
            </div>
            <h4 className="text-4xl font-bold mb-2">5-Star</h4>
            <p className="text-gray-500 font-medium">Average Rating</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Trophy size={32} className="text-brand-black" />
            </div>
            <h4 className="text-4xl font-bold mb-2">15+</h4>
            <p className="text-gray-500 font-medium">Industry Awards</p>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-8">Trusted by Global Brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text as placeholder for logos */}
            <span className="text-2xl font-bold">Forbes</span>
            <span className="text-2xl font-bold">Bloomberg</span>
            <span className="text-2xl font-bold">Hilton</span>
            <span className="text-2xl font-bold">Marriott</span>
            <span className="text-2xl font-bold relative -top-1">EMIRATES</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustFeatures;
