import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Technical SEO', href: '#services' },
      { name: 'UI/UX Interface Design', href: '#services' },
      { name: 'React Development', href: '#services' },
      { name: 'iOS & Android Apps', href: '#services' },
      { name: 'Product Scoping', href: '#services' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#work' },
      { name: 'Process Workflow', href: '#process' },
      { name: 'Careers', href: '#' },
      { name: 'Press & Media', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'SEO Handbook', href: '#' },
      { name: 'Growth Blog', href: '#' },
      { name: 'Case Studies', href: '#work' },
      { name: 'SaaS Templates', href: '#' }
    ]
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] pt-20 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Background Watermark LOGO */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <h2 className="text-[14vw] font-display font-black leading-none text-white/[0.015] tracking-[0.1em] text-center uppercase">
          AGENCY
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold font-display tracking-wider bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
              AGENCY
            </h3>
            <p className="text-sm text-muted-text/80 max-w-sm leading-relaxed">
              We design, build, and scale digital products that drive measurable business growth. A modern engineering approach with a focus on luxury aesthetics.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white border border-white/5 hover:border-brand-orange flex items-center justify-center text-muted-text transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white border border-white/5 hover:border-brand-orange flex items-center justify-center text-muted-text transition-all duration-300"
                aria-label="Twitter X"
              >
                <RiTwitterXLine size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white border border-white/5 hover:border-brand-orange flex items-center justify-center text-muted-text transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white border border-white/5 hover:border-brand-orange flex items-center justify-center text-muted-text transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {footerSections.map((sec) => (
            <div key={sec.title} className="col-span-1 lg:col-span-2 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                {sec.title}
              </h4>
              <ul className="space-y-3">
                {sec.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-text hover:text-white transition-colors duration-200"
                    >
                      {sec.name}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Col */}
          <div className="col-span-2 lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Let's Connect
            </h4>
            <ul className="space-y-3 text-sm text-muted-text">
              <li>
                <span className="block text-white/50 text-xs uppercase tracking-wider">Email us</span>
                <a href="mailto:hello@agency.com" className="hover:text-white transition-colors">
                  hello@agency.com
                </a>
              </li>
              <li>
                <span className="block text-white/50 text-xs uppercase tracking-wider">Call us</span>
                <span className="hover:text-white transition-colors">
                  1-800-458-56987
                </span>
              </li>
              <li>
                <span className="block text-white/50 text-xs uppercase tracking-wider">Location</span>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-muted-text/60 gap-4">
          <div>
            &copy; {currentYear} AGENCY. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
