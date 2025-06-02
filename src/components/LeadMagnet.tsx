
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    bookCall: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Success! 🎉",
      description: "Your free guide is on the way! Check your email in a few minutes.",
    });

    setFormData({ name: "", email: "", role: "", bookCall: false });
    setIsSubmitting(false);
  };

  return (
    <section id="lead-form" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Download className="h-4 w-4" />
            Free Resource
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Not Sure Where to Start?
          </h2>
          
          <p className="text-xl text-gray-300 mb-4">
            Download Our Free Guide:
          </p>
          
          <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-8">
            "How to Build Your First AI Agent in 24 Hours"
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-4">What You'll Learn:</h4>
              <ul className="space-y-3">
                {[
                  "The 3-step AI agent blueprint",
                  "Tool integration strategies", 
                  "Common workflow automations",
                  "ROI calculation framework",
                  "Security & compliance basics"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-gray-300">
                This is the same framework we use with our $10k+ clients. 
                Now available free for a limited time.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="h-12 text-gray-900"
                />
                
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="h-12 text-gray-900"
                />
                
                <Input
                  placeholder="Role or Company"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="h-12 text-gray-900"
                />
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="bookCall"
                    checked={formData.bookCall}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, bookCall: checked as boolean }))}
                  />
                  <label htmlFor="bookCall" className="text-sm text-gray-700">
                    Book a strategy call after download
                  </label>
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl"
              >
                {isSubmitting ? "Sending..." : "Get the Free Guide"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
