import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#050505] overflow-hidden min-h-screen">
        {/* Glow Effects */}
        <div className="absolute top-0 left-[20%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 orange-glow opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-[20%] translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] orange-glow opacity-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
              Legal
            </p>
            <h1 className="text-4xl sm:text-6xl font-display font-black leading-tight tracking-tight uppercase mb-8">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed font-sans">
              Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Section 1 */}
            <div className="glass-panel glass-panel-hover p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-2xl font-display font-bold uppercase tracking-wide mb-6 flex items-center gap-4">
                <span className="text-brand-orange">01.</span> Information we collect
              </h2>
              <p className="text-muted-text/80 leading-relaxed font-sans text-lg">
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
              </p>
            </div>

            {/* Section 2 */}
            <div className="glass-panel glass-panel-hover p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-2xl font-display font-bold uppercase tracking-wide mb-6 flex items-center gap-4">
                <span className="text-brand-orange">02.</span> Use of Information
              </h2>
              <p className="text-muted-text/80 leading-relaxed font-sans text-lg mb-4">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc list-inside text-muted-text/80 leading-relaxed font-sans text-lg space-y-2 ml-4">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="glass-panel glass-panel-hover p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-2xl font-display font-bold uppercase tracking-wide mb-6 flex items-center gap-4">
                <span className="text-brand-orange">03.</span> Data Protection
              </h2>
              <p className="text-muted-text/80 leading-relaxed font-sans text-lg">
                We don't share any personally identifying information publicly or with third-parties, except when required to by law. We act as a data controller and data processor in regards to your data.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="pt-8 border-t border-white/10 mt-12">
               <p className="text-muted-text/60 leading-relaxed font-sans">
                 If you have any questions about how we handle user data and personal information, feel free to contact us.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
