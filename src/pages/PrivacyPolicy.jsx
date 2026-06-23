import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-white mt-12 mb-6 border-b border-white/10 pb-4">
    {children}
  </h2>
);

const SubTitle = ({ children }) => (
  <h3 className="text-xl font-display font-semibold text-white/90 mt-8 mb-4">
    {children}
  </h3>
);

const Paragraph = ({ children }) => (
  <p className="text-muted-text/80 leading-relaxed font-sans text-base mb-6">
    {children}
  </p>
);

const List = ({ children }) => (
  <ul className="list-disc list-inside text-muted-text/80 leading-relaxed font-sans text-base space-y-2 mb-6 ml-4">
    {children}
  </ul>
);

const PrivacyContent = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
    <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase mb-4 text-white">Privacy Policy</h1>
    <p className="text-brand-orange font-medium mb-10">Effective Date: 6/21/2026</p>

    <SectionTitle>1. INTRODUCTION</SectionTitle>
    <Paragraph>This Privacy Policy describes how UpScale Agency ("we," "us," or "our") collects, uses, and discloses your personal information when you use our software as a service (the "Service").</Paragraph>
    <Paragraph>We are committed to protecting your personal information and your right to privacy. When you visit our software as a service and use our products, you trust us with your personal information. We take your privacy very seriously. In this Privacy Policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.</Paragraph>
    <Paragraph>This Privacy Policy applies to all information collected through our software as a service, as well as any related services, sales, marketing, or events.</Paragraph>
    <Paragraph>Please read this Privacy Policy carefully as it will help you understand what we do with the information we collect.</Paragraph>

    <SectionTitle>2. DEFINITIONS</SectionTitle>
    <Paragraph>To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, they are strictly defined as:</Paragraph>
    <List>
      <li><strong>Cookie:</strong> a small file placed on your device to enable certain features and functionality.</li>
      <li><strong>Company:</strong> when this policy mentions "Company," "we," "us," or "our," it refers to UpScale Agency.</li>
      <li><strong>Country:</strong> where UpScale Agency or the owners/founders of UpScale Agency are based, in this case India.</li>
      <li><strong>Customer:</strong> refers to the company, organization, or person that signs up to use the UpScale Agency Service.</li>
      <li><strong>Device:</strong> any internet-connected device such as a phone, tablet, computer, or any other device that can be used to visit UpScale Agency and use the services.</li>
      <li><strong>Personal Data:</strong> any information that directly, indirectly, or in connection with other information allows for the identification of a natural person.</li>
      <li><strong>Service:</strong> refers to the software as a service provided by UpScale Agency as described in the relative terms and on this platform.</li>
      <li><strong>Third-party service:</strong> refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
      <li><strong>Website:</strong> UpScale Agency's site, which can be accessed via https://www.upscaleagency.in/.</li>
      <li><strong>You:</strong> a person or entity that is registered with UpScale Agency to use the Services.</li>
    </List>

    <SectionTitle>3. INFORMATION WE COLLECT</SectionTitle>
    <Paragraph>We collect several different types of information for various purposes to provide and improve our Service to you.</Paragraph>

    <SubTitle>3.1 Personal Data</SubTitle>
    <Paragraph>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</Paragraph>
    <List>
      <li>Email address</li>
      <li>First name and last name</li>
      <li>Phone number</li>
      <li>Address, State, Province, ZIP/Postal code, City</li>
      <li>Cookies and Usage Data</li>
    </List>

    <SubTitle>3.3 Usage Data</SubTitle>
    <Paragraph>We may also collect information about how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</Paragraph>

    <SubTitle>3.4 Location Data</SubTitle>
    <Paragraph>We may use and store information about your location if you give us permission to do so ("Location Data"). We use this data to provide features of our Service, to improve and customize our Service.</Paragraph>
    <Paragraph>You can enable or disable location services when you use our Service at any time, through your device settings.</Paragraph>

    <SectionTitle>4. HOW WE USE YOUR INFORMATION</SectionTitle>
    <Paragraph>UpScale Agency uses the collected data for various purposes:</Paragraph>
    <List>
      <li>To provide and maintain our Service</li>
      <li>To notify you about changes to our Service</li>
      <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
      <li>To provide customer support</li>
      <li>To gather analysis or valuable information so that we can improve our Service</li>
      <li>To monitor the usage of our Service</li>
      <li>To detect, prevent and address technical issues</li>
      <li>To fulfill any other purpose for which you provide it</li>
      <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
      <li>In any other way we may describe when you provide the information</li>
      <li>For any other purpose with your consent</li>
    </List>

    <SectionTitle>6. RETENTION OF YOUR PERSONAL DATA</SectionTitle>
    <Paragraph>UpScale Agency will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</Paragraph>
    <Paragraph>UpScale Agency will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</Paragraph>

    <SubTitle>6.1 Data Retention for Physical Goods</SubTitle>
    <Paragraph>For orders involving physical goods, we retain your shipping and billing information, including your name, address, and contact details, as necessary to fulfill your order, process returns, manage warranty claims, and comply with tax, legal, and regulatory obligations. This information may be retained for a longer period than other personal data to ensure proper delivery of goods and to handle any post-purchase issues that may arise.</Paragraph>

    <SectionTitle>7. TRANSFER OF YOUR PERSONAL DATA</SectionTitle>
    <Paragraph>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</Paragraph>
    <Paragraph>If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.</Paragraph>
    <Paragraph>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</Paragraph>
    <Paragraph>UpScale Agency will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</Paragraph>

    <SectionTitle>8. DISCLOSURE OF YOUR PERSONAL DATA</SectionTitle>
    <SubTitle>Business Transactions:</SubTitle>
    <Paragraph>If UpScale Agency is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</Paragraph>
    
    <SubTitle>Disclosure for Law Enforcement:</SubTitle>
    <Paragraph>Under certain circumstances, UpScale Agency may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</Paragraph>
    
    <SubTitle>Legal Requirements:</SubTitle>
    <Paragraph>UpScale Agency may disclose your Personal Data in the good faith belief that such action is necessary to:</Paragraph>
    <List>
      <li>Comply with a legal obligation</li>
      <li>Protect and defend the rights or property of UpScale Agency</li>
      <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
      <li>Protect the personal safety of users of the Service or the public</li>
      <li>Protect against legal liability</li>
    </List>

    <SectionTitle>9. THIRD-PARTY DISCLOSURE</SectionTitle>
    <SubTitle>9.1 Analytics</SubTitle>
    <Paragraph>We may use third-party Service Providers to monitor and analyze the use of our Service.</Paragraph>
    <List>
      <li><strong>Google Analytics:</strong> Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. For more information, please visit the Google Privacy & Terms web page.</li>
    </List>

    <SectionTitle>10. SECURITY OF YOUR PERSONAL DATA</SectionTitle>
    <Paragraph>The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</Paragraph>

    <SectionTitle>11. CHILDREN'S PRIVACY</SectionTitle>
    <Paragraph>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under the age of 13 without verification of parental consent, we take steps to remove that information from our servers.</Paragraph>

    <SectionTitle>12. YOUR DATA PROTECTION RIGHTS</SectionTitle>
    <Paragraph>Depending on your location and applicable laws, you may have certain rights regarding your personal information, including rights to access, correct, delete, or restrict use of your information. We honor these rights regardless of your location and are committed to providing reasonable access to the information that you have shared with us.</Paragraph>

    <SubTitle>12.1 General Data Access & Deletion Rights</SubTitle>
    <Paragraph>Regardless of your location, you can make the following requests regarding your personal data:</Paragraph>
    <List>
      <li><strong>Access Your Data:</strong> You can request a copy of the personal information we have about you. We will provide this information in a structured, commonly used, and machine-readable format.</li>
      <li><strong>Delete Your Data:</strong> You can request that we delete your personal information from our systems. We will comply with this request unless there is a legal requirement for us to keep certain information.</li>
    </List>

    <SectionTitle>13. SERVICE PROVIDERS</SectionTitle>
    <Paragraph>We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</Paragraph>

    <SectionTitle>14. LINKS TO OTHER SITES</SectionTitle>
    <Paragraph>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</Paragraph>

    <SectionTitle>15. CHANGES TO THIS PRIVACY POLICY</SectionTitle>
    <Paragraph>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</Paragraph>

    <SectionTitle>16. CONTACT US</SectionTitle>
    <Paragraph>If you have any questions about this Privacy Policy, please contact us:</Paragraph>
    <List>
      <li>By email: upscale.agency19@gmail.com</li>
      <li>By visiting this page on our website: https://www.upscaleagency.in/privacy</li>
      <li>By phone number: +918822617263</li>
    </List>
  </motion.div>
);

const TermsContent = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
    <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase mb-4 text-white">Terms of Service</h1>
    
    <div className="p-4 bg-white/5 border border-white/10 rounded-lg mb-8">
      <p className="text-sm text-muted-text/80 font-medium">Legal Disclaimer: These Terms of Service are provided as a template and should be reviewed by a qualified attorney before use. This document may not be fully compliant with the laws in your jurisdiction.</p>
    </div>

    <SectionTitle>1. Introduction</SectionTitle>
    <Paragraph>These Terms of Service ("Terms") govern your access to and use of the consulting and professional services (the "Services") provided by UpScale Agency ("we," "us," or "our"). These Terms constitute a legally binding agreement between you and UpScale Agency. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.</Paragraph>

    <SectionTitle>2. Definitions</SectionTitle>
    <Paragraph>"Client," "you," and "your" refer to the individual or entity accessing or using our Services.</Paragraph>
    <Paragraph>"Deliverables" refers to the work product, reports, analyses, presentations, or other materials we provide to you as part of the Services.</Paragraph>
    <Paragraph>"Intellectual Property Rights" means all patent rights, copyright rights, moral rights, rights of publicity, trademark rights, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights.</Paragraph>

    <SectionTitle>3. Acceptance of Terms</SectionTitle>
    <Paragraph>By accessing or using our Services, you agree to be bound by these Terms. If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. If you do not agree to these Terms, you may not access or use our Services.</Paragraph>

    <SectionTitle>4. Changes to Terms</SectionTitle>
    <Paragraph>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting a prominent notice on our website or by sending you an email. Your continued use of our Services after any such changes constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using our Services.</Paragraph>

    <SectionTitle>5. Services</SectionTitle>
    <Paragraph>We will provide the Services as described in any applicable Statement of Work or other written agreement between you and UpScale Agency. We will use reasonable skill, care, and diligence in providing the Services in accordance with applicable professional standards.</Paragraph>

    <SectionTitle>6. Your Responsibilities</SectionTitle>
    <Paragraph>You agree to:</Paragraph>
    <List>
      <li>Provide timely access to information, personnel, systems, and facilities reasonably necessary for us to perform the Services</li>
      <li>Make decisions and provide approvals in a timely manner</li>
      <li>Designate a primary contact with authority to make decisions regarding the Services</li>
      <li>Pay all fees as set forth in any applicable SOW or invoice</li>
    </List>

    <SectionTitle>7. Fees and Payment</SectionTitle>
    <Paragraph>You agree to pay all fees specified in any applicable SOW or invoice. Unless otherwise specified, fees are quoted in INR and payment is due within the specified timeframe. We may charge interest on late payments. Fees do not include taxes, which will be added where applicable.</Paragraph>

    <SectionTitle>8. Term and Termination</SectionTitle>
    <Paragraph>These Terms will remain in effect until the completion of the Services or until terminated. Either party may terminate these Terms or any SOW for convenience upon written notice to the other party.</Paragraph>

    <SectionTitle>9. Confidentiality</SectionTitle>
    <Paragraph>Each party agrees to maintain the confidentiality of the other party's confidential information, which includes any non-public information disclosed during the provision of Services.</Paragraph>

    <SectionTitle>10. Intellectual Property</SectionTitle>
    <Paragraph>Unless otherwise specified in an applicable SOW, we own all right, title, and interest in and to any pre-existing materials, methodologies, tools, techniques, processes, know-how, and software that we use in providing the Services.</Paragraph>

    <SectionTitle>11. Representations and Warranties</SectionTitle>
    <Paragraph>Each party represents and warrants that it has the full right, power, and authority to enter into and perform its obligations under these Terms.</Paragraph>

    <SectionTitle>12. Limitation of Liability</SectionTitle>
    <Paragraph>To the maximum extent permitted by law, UpScale Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</Paragraph>

    <SectionTitle>13. Indemnification</SectionTitle>
    <Paragraph>You agree to indemnify, defend, and hold harmless UpScale Agency, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees that such parties may incur as a result of or arising from your use of the Services or Deliverables in violation of these Terms.</Paragraph>

    <SectionTitle>14. Independent Contractor Relationship</SectionTitle>
    <Paragraph>UpScale Agency is an independent contractor and not your employee, agent, joint venturer, or partner.</Paragraph>

    <SectionTitle>15. Non-Solicitation</SectionTitle>
    <Paragraph>During the term of any SOW and for a period thereafter, you agree not to solicit for employment or hire any employee of UpScale Agency who was involved in providing Services, without our prior written consent.</Paragraph>

    <SectionTitle>16. Governing Law</SectionTitle>
    <Paragraph>These Terms shall be governed by and construed in accordance with the laws of India.</Paragraph>
  </motion.div>
);

const RegulatoryContent = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
    <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase mb-4 text-white">Regulatory Compliance</h1>

    <SectionTitle>General Data Protection Regulation (GDPR)</SectionTitle>
    <Paragraph>In compliance with the General Data Protection Regulation (GDPR), we collect and process your personal data only when we have a lawful basis to do so. This includes processing based on your consent, to fulfill a contract with you, to comply with a legal obligation, to protect your vital interests, to perform a task in the public interest, or for our legitimate interests where those don't override your fundamental rights and freedoms.</Paragraph>
    <Paragraph>If you are located in the European Economic Area (EEA), you have rights to access, rectification, erasure, restriction of processing, data portability, and objection.</Paragraph>

    <SectionTitle>California Consumer Privacy Act (CCPA)</SectionTitle>
    <Paragraph>Under the California Consumer Privacy Act (CCPA), we are required to inform California residents about the categories of personal information we collect and the purposes for which we use this information. If you are a California resident, you have the right to know, right to delete, right to opt-out, and right to non-discrimination.</Paragraph>

    <SectionTitle>Lei Geral de Proteção de Dados (LGPD)</SectionTitle>
    <Paragraph>In accordance with the Brazilian General Data Protection Law (LGPD), we only process your personal data when we have a legal basis to do so. You have rights including confirmation of processing, access, correction, anonymization, portability, and deletion.</Paragraph>

    <SectionTitle>PIPEDA (Canada)</SectionTitle>
    <Paragraph>In accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA), we obtain your consent when we collect, use, or disclose your personal information. You have the right to access, challenge accuracy, amend, and withdraw consent.</Paragraph>

    <SectionTitle>POPIA (South Africa)</SectionTitle>
    <Paragraph>In compliance with the Protection of Personal Information Act (POPIA), we process your personal information lawfully and minimally, for specific purposes. You have rights to request confirmation, access, correction, deletion, and to object to processing.</Paragraph>

    <SectionTitle>Australian Privacy Principles (APPs)</SectionTitle>
    <Paragraph>We comply with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). We are committed to being open and transparent about how we manage your personal information.</Paragraph>
  </motion.div>
);

const AdditionalContent = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
    <h1 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase mb-4 text-white">Additional Terms</h1>

    <SectionTitle>Dispute Resolution and Arbitration</SectionTitle>
    <SubTitle>Informal Dispute Resolution</SubTitle>
    <Paragraph>Before filing a claim against us, you agree to attempt to resolve the dispute informally by contacting us. We will attempt to resolve the dispute by contacting you via email.</Paragraph>

    <SubTitle>Agreement to Arbitrate</SubTitle>
    <Paragraph>You and we agree to resolve any disputes between us through binding and final arbitration instead of through court proceedings. You acknowledge and agree that you are waiving the right to sue in court, have a jury trial, or participate in a class action.</Paragraph>

    <SubTitle>Class Action Waiver</SubTitle>
    <Paragraph>YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR OUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</Paragraph>

    <SectionTitle>Intellectual Property Rights</SectionTitle>
    <SubTitle>Our Intellectual Property</SubTitle>
    <Paragraph>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of UpScale Agency and its licensors. The Service is protected by copyright, trademark, and other laws.</Paragraph>

    <SubTitle>Your License to Use Our Content</SubTitle>
    <Paragraph>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service for your personal or internal business purposes.</Paragraph>

    <SubTitle>DMCA Compliance</SubTitle>
    <Paragraph>If you are a copyright owner or an agent thereof and believe that any content on the Service infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our Copyright Agent with the necessary information in writing, including a statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</Paragraph>
  </motion.div>
);

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('privacy');

  // Smooth scroll to top when changing tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'regulatory', label: 'Regulatory Compliance' },
    { id: 'additional', label: 'Additional Terms' },
  ];

  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#050505] overflow-hidden min-h-screen">
        {/* Glow Effects */}
        <div className="absolute top-0 left-[20%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 orange-glow opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-[20%] translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] orange-glow opacity-10 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar Navigation */}
          <div className="md:w-64 lg:w-72 shrink-0">
            <div className="sticky top-32 space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-6">
                Legal Directory
              </p>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`block w-full text-left px-5 py-4 rounded-xl font-sans font-medium transition-all duration-300 ${
                    activeSection === tab.id 
                      ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' 
                      : 'text-muted-text/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 md:p-12 lg:p-16 rounded-2xl border border-white/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-100 pointer-events-none" />
              
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {activeSection === 'privacy' && <PrivacyContent key="privacy" />}
                  {activeSection === 'terms' && <TermsContent key="terms" />}
                  {activeSection === 'regulatory' && <RegulatoryContent key="regulatory" />}
                  {activeSection === 'additional' && <AdditionalContent key="additional" />}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
