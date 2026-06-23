import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert">
          <p className="mb-4">
            Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information we collect</h2>
          <p className="mb-4">
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Information</h2>
          <p className="mb-4">
            We use the information we collect in various ways, including to provide, operate, and maintain our website; improve, personalize, and expand our website; and understand and analyze how you use our website.
          </p>
          {/* Add more privacy policy content as needed */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
