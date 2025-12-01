import { useState } from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Mail, HelpCircle, ChevronDown } from 'lucide-react';

import Container from '../components/common/Container';

const PrivacyPolicy = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you protect my payment information?",
      answer: "We never store your complete payment information. All payments are processed through secure, PCI-compliant third-party payment providers using SSL/TLS encryption."
    },
    {
      question: "Can I delete my account and data?",
      answer: "Yes, you can delete your account at any time through your account settings. This will remove your personal information from our systems, though we may retain certain data as required by law."
    },
    {
      question: "Do you share my information with airlines and hotels?",
      answer: "Yes, we share necessary booking information (name, contact details, travel dates) with service providers to fulfill your reservations. We only share the minimum information required."
    },
    {
      question: "How can I opt-out of marketing emails?",
      answer: "You can unsubscribe from marketing emails by clicking the 'unsubscribe' link at the bottom of any promotional email or by updating your preferences in your account settings."
    },
    {
      question: "What cookies do you use?",
      answer: "We use essential cookies for site functionality, analytics cookies to improve our service, and preference cookies to remember your settings. You can manage cookie preferences through your browser settings."
    },
    {
      question: "How long do you keep my data?",
      answer: "We retain your data for as long as your account is active or as needed to provide services. Booking history may be retained longer for legal and accounting purposes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 ">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: December 1, 2024</p>
          </div>

          {/* Introduction */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Dream Holidays, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our travel booking platform.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Travel preferences and booking history</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Process and manage your bookings and reservations</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send booking confirmations and travel updates</li>
                <li>Improve our services and user experience</li>
                <li>Detect and prevent fraud or unauthorized activities</li>
                <li>Send promotional offers (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
              </div>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Service Providers:</strong> Airlines, hotels, and tour operators to fulfill your bookings</li>
                <li><strong>Payment Processors:</strong> Secure third-party payment gateways</li>
                <li><strong>Analytics Partners:</strong> To improve our services (anonymized data)</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure authentication with Firebase</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and data encryption</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access and review your personal information</li>
                <li>Update or correct your information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Object to certain data processing activities</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
              </div>
              <p className="text-gray-700">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or your personal information, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@dreamholidays.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Travel Street, New York, NY 10001</p>
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                        openFaqIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;