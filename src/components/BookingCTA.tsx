
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Shield, Clock } from "lucide-react";

export const BookingCTA = () => {
  const faqs = [
    {
      question: "Do I need to be technical to use this?",
      answer: "Nope. We handle everything. You just explain your workflow."
    },
    {
      question: "Can this connect to my current tools?",
      answer: "Yes! We work with Notion, Slack, GCal, ClickUp, etc."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients launch their first trained agent within 7 days."
    }
  ];

  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Calendar className="h-4 w-4" />
            Limited Calls This Week
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Meet Your First AI Team Member?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's find out what repetitive work your team can offload to intelligent agents.
            <br />
            <span className="font-semibold">Custom, secure, and fully tailored to your stack.</span>
          </p>
          
          <Button 
            size="lg"
            onClick={scrollToLeadForm}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Free AI Strategy Call
          </Button>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              30-minute session
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-purple-500" />
              Completely confidential
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
