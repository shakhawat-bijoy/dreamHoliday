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
            <p className="text-gray-600">Last updated: December 15, 2025</p>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Dream Holidays. These Terms of Service form a contract between you and Dream Holidays. By creating an account, making a booking, or using our site or apps, you agree to these terms and our Privacy Policy. If you do not agree, do not use our services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Who We Are</h2>
              </div>
              <p className="text-gray-700">
                Dream Holidays is an online platform that lets you search, compare, and book travel services offered by airlines, hotels, tour operators, and other third-party providers.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Using Dream Holidays</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Eligibility:</strong> You must be at least 18 and able to form a binding contract.</p>
                <p><strong>Your account:</strong> Provide accurate details, keep credentials confidential, and promptly notify us of any unauthorized use. We may suspend or close accounts for misuse, fraud, or policy violations.</p>
                <p><strong>Accuracy:</strong> Review all booking details before paying. Prices, availability, and restrictions come from the provider and may change until confirmed.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Bookings and Payments</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Process:</strong> Bookings are placed on behalf of the provider. A confirmation email shows the applicable provider terms.</p>
                <p><strong>Charges:</strong> You authorize us and our payment partners to charge the amount shown at checkout, which may include taxes, fees, or surcharges. Currency and pricing are shown at checkout.</p>
                <p><strong>Fraud checks:</strong> We may decline or cancel a booking if payment cannot be verified or fraud is suspected.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Cancellations, Changes, and Refunds</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Provider rules:</strong> Each provider sets its own change and cancellation terms (including non-refundable fares or rooms). Those terms apply to your booking.</p>
                <p><strong>Our role:</strong> We help submit your request to the provider but cannot guarantee approval. Fees may apply.</p>
                <p><strong>Refund timing:</strong> Approved refunds are typically processed within 7-14 business days through the original payment method, subject to provider and bank timelines.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Your Responsibilities</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Use the service lawfully and for personal, non-commercial travel planning.</li>
                <li>Provide accurate traveler details and comply with passport, visa, health, and entry requirements.</li>
                <li>Avoid introducing malware, scraping, reverse engineering, or attempting unauthorized access.</li>
                <li>Do not misrepresent identities, submit fraudulent payments, or resell inventory.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Intellectual Property</h2>
              </div>
              <p className="text-gray-700">
                Dream Holidays content (brand, design, text, graphics, software) is owned by us or our licensors. You may use it only for personal travel planning. Do not copy, distribute, or create derivative works without permission.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">7. Disclaimers and Liability</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Provider responsibility:</strong> Travel services are provided by third parties. They are responsible for delivery, quality, safety, schedules, and compliance. We are not a carrier, hotel, or tour operator.</p>
                <p><strong>No warranties:</strong> Services are provided “as is” without warranties. Availability and pricing may change.</p>
                <p><strong>Limitation:</strong> To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or consequential damages. Our total liability related to a booking is capped at the amount you paid for that booking.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Dispute Resolution</h2>
              </div>
              <p className="text-gray-700">
                You agree to first contact us to resolve disputes. If unresolved, disputes will be handled by binding arbitration on an individual basis under the rules of the state or country where you reside, unless local law requires a different forum. You waive class actions to the extent permitted by law.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">9. Changes to These Terms</h2>
              </div>
              <p className="text-gray-700">
                We may update these terms to reflect legal, operational, or product changes. We will post the updated date and, where required, notify you. Continued use after changes means you accept the updated terms.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">10. Contact</h2>
              </div>
              <p className="text-gray-700 mb-4">Questions about these Terms of Service?</p>
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