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
            <p className="text-gray-600">Last updated: December 15, 2025</p>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Dream Holidays, we take your privacy seriously. This Privacy Policy explains what data we collect, why we collect it, how we use it, and the choices you have. By using our services, you agree to this policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Data We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">You provide</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact details (name, email, phone)</li>
                    <li>Account credentials and profile preferences</li>
                    <li>Booking details and traveler information</li>
                    <li>Payment details processed by PCI-compliant partners</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Collected automatically</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Device, browser, and IP information</li>
                    <li>Usage data (pages viewed, actions taken)</li>
                    <li>Cookies, pixels, and similar identifiers</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Data</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Process bookings, payments, and confirmations</li>
                <li>Provide support and respond to requests</li>
                <li>Send travel updates and service notices</li>
                <li>Improve, personalize, and secure the platform</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Send marketing communications with your consent</li>
                <li>Comply with legal and accounting obligations</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">How We Share Data</h2>
              </div>
              <p className="text-gray-700 mb-3">We share only what is needed to provide the service:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Travel providers:</strong> Airlines, hotels, and tour operators to fulfill bookings.</li>
                <li><strong>Payments:</strong> PCI-compliant processors. We do not store full payment details.</li>
                <li><strong>Vendors:</strong> Cloud hosting, analytics, communications, and security tools bound by contracts.</li>
                <li><strong>Legal:</strong> When required by law or to protect rights, safety, or prevent fraud.</li>
              </ul>
              <p className="text-gray-700 mt-3">We do not sell your personal information.</p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Security</h2>
              </div>
              <p className="text-gray-700">
                We use industry-standard safeguards: TLS encryption in transit, access controls, least-privilege practices, and regular security reviews. No system is perfectly secure; notify us promptly of any suspected issue.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
              </div>
              <p className="text-gray-700">
                We use essential cookies for core functionality, analytics cookies to improve the product, and preference cookies to remember settings. You can manage cookies in your browser; blocking some may affect functionality.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Your Choices and Rights</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access, correct, or update your information in account settings.</li>
                <li>Delete your account; we may retain limited data to meet legal obligations.</li>
                <li>Unsubscribe from marketing at any time.</li>
                <li>Request a copy of your data or object to certain processing where applicable law grants these rights.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
              </div>
              <p className="text-gray-700">
                We keep personal data while your account is active and as needed for bookings, support, and legal, tax, or compliance requirements. Retention periods vary by record type and legal obligations.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">International Transfers</h2>
              </div>
              <p className="text-gray-700">
                Your data may be stored or processed in countries with different data protection laws. We use appropriate safeguards (such as contractual protections) where required.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Children's Data</h2>
              </div>
              <p className="text-gray-700">
                Our services are not directed to children under 16. If we learn we collected data from a child without proper consent, we will delete it.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Changes to This Policy</h2>
              </div>
              <p className="text-gray-700">
                We may update this Privacy Policy to reflect product, legal, or operational changes. We will post the new date and, where required, provide notice. Continued use means you accept the updated policy.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
              </div>
              <p className="text-gray-700">
                Questions about this Privacy Policy or your data?
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