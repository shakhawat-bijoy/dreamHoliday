import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, CreditCard, HelpCircle, ChevronDown } from 'lucide-react';
import Container from '../components/common/Container';

const Terms = () => {
  const faqs = [
    {
      question: "What happens if I need to cancel my booking?",
      answer: "Cancellation policies vary by service provider. Some bookings may be non-refundable, while others allow cancellations with fees. Check your booking confirmation for specific cancellation terms."
    },
    {
      question: "How long do refunds take to process?",
      answer: "Refunds are typically processed within 7-14 business days. The exact timing depends on your payment provider and the service provider's policies."
    },
    {
      question: "Can I modify my booking after confirmation?",
      answer: "Modifications depend on the service provider's policies. Contact our support team as soon as possible to request changes. Additional fees may apply."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover) and process payments through secure third-party providers."
    },
    {
      question: "Are there any hidden fees?",
      answer: "All mandatory fees are disclosed before you confirm your booking. Some providers may charge additional taxes or service fees, which will be clearly shown during checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: December 1, 2024</p>
          </div>

          {/* Introduction */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Dream Holidays! These Terms of Service govern your use of our platform and services. By accessing or using Dream Holidays, you agree to be bound by these terms.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700">
                By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
              </p>
            </section>

            {/* User Accounts */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. User Accounts</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p><strong>Account Creation:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must be at least 18 years old to create an account</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>You must not share your account credentials</li>
                </ul>
                <p className="mt-4"><strong>Account Termination:</strong></p>
                <p>We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activities.</p>
              </div>
            </section>

            {/* Booking and Payments */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Booking and Payments</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Booking Process</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All bookings are subject to availability</li>
                    <li>Prices are displayed in USD unless otherwise stated</li>
                    <li>Booking confirmation will be sent via email</li>
                    <li>You must review all booking details before confirming</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Payment is required at the time of booking</li>
                    <li>We accept major credit cards and secure payment methods</li>
                    <li>All payments are processed through secure third-party providers</li>
                    <li>Additional fees may apply (taxes, service charges)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation and Refunds */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Cancellation and Refunds</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p><strong>Cancellation Policy:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cancellation policies vary by service provider (airline, hotel, etc.)</li>
                  <li>Cancellation fees may apply based on timing and provider policies</li>
                  <li>Some bookings may be non-refundable</li>
                  <li>Cancellation requests must be submitted through your account</li>
                </ul>
                <p className="mt-4"><strong>Refund Processing:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Refunds are processed within 7-14 business days</li>
                  <li>Refund amount depends on provider policies and timing</li>
                  <li>Processing fees may be non-refundable</li>
                </ul>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. User Conduct</h2>
              </div>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Use the platform for any illegal or unauthorized purpose</li>
                <li>Violate any laws or regulations</li>
                <li>Impersonate another person or entity</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Scrape, copy, or misuse our content</li>
                <li>Engage in fraudulent activities</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Intellectual Property</h2>
              </div>
              <p className="text-gray-700">
                All content on Dream Holidays, including text, graphics, logos, images, and software, is the property of Dream Holidays or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">7. Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dream Holidays acts as an intermediary between you and service providers (airlines, hotels, tour operators). We are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Quality of services provided by third parties</li>
                  <li>Flight delays, cancellations, or schedule changes</li>
                  <li>Hotel accommodations or amenities</li>
                  <li>Lost luggage or personal belongings</li>
                  <li>Travel disruptions due to weather, natural disasters, or other events</li>
                </ul>
                <p className="mt-4">
                  To the maximum extent permitted by law, Dream Holidays shall not be liable for any indirect, incidental, special, or consequential damages.
                </p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Dispute Resolution</h2>
              </div>
              <p className="text-gray-700">
                Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in accordance with the laws of the State of New York. You waive your right to participate in class action lawsuits.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">9. Changes to Terms</h2>
              </div>
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes via email or platform notification. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">10. Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@dreamholidays.com</p>
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
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              By using Dream Holidays, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;