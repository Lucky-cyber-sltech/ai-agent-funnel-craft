
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, ArrowRight, Phone, Building2, User, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SuccessDialog } from "./SuccessDialog";

export const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    message: "",
    bookCall: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email address, and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save lead to Supabase
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            role_or_company: `${formData.role} at ${formData.company}`.trim(),
            message: formData.message || null,
            book_call: formData.bookCall
          }
        ]);

      if (error) {
        throw error;
      }

      // Show success dialog
      setShowSuccessDialog(true);
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", role: "", company: "", message: "", bookCall: false });
      
      console.log('Lead saved successfully:', formData);
      
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="lead-form" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
              Free Resource
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Not Sure Where to Start?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-2 sm:mb-4">
              Download Our Free Guide:
            </p>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
              "How to Build Your First AI Agent in 24 Hours"
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                <h4 className="text-xl sm:text-2xl font-bold mb-4">What You'll Learn:</h4>
                <ul className="space-y-3">
                  {[
                    "The 3-step AI agent blueprint",
                    "Tool integration strategies", 
                    "Common workflow automations",
                    "ROI calculation framework",
                    "Security & compliance basics"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-200 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-sm sm:text-base">
                  This is the same framework we use with our $10k+ clients. 
                  Now available free for a limited time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" aria-label="Lead capture form">
                <div className="grid gap-4 sm:gap-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="h-11 sm:h-12 text-gray-900"
                        aria-label="Full name"
                      />
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="h-11 sm:h-12 text-gray-900"
                        aria-label="Email address"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                      className="h-11 sm:h-12 text-gray-900"
                      aria-label="Phone number"
                    />
                  </div>

                  {/* Role and Company Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Role / Title
                      </label>
                      <Input
                        id="role"
                        placeholder="e.g., CEO, Manager, Developer"
                        value={formData.role}
                        onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                        className="h-11 sm:h-12 text-gray-900"
                        aria-label="Role or job title"
                      />
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        <Building2 className="inline h-4 w-4 mr-1" />
                        Company / Team Size
                      </label>
                      <Input
                        id="company"
                        placeholder="Company name or team size"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="h-11 sm:h-12 text-gray-900"
                        aria-label="Company name or team size"
                      />
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-1" />
                      Optional Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your current workflow challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="min-h-[80px] text-gray-900 resize-none"
                      aria-label="Optional message"
                    />
                  </div>
                  
                  {/* Checkbox */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="bookCall"
                      checked={formData.bookCall}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, bookCall: checked as boolean }))}
                      className="mt-1"
                    />
                    <label htmlFor="bookCall" className="text-sm text-gray-700 leading-relaxed">
                      Book a strategy call after download (30 min free consultation)
                    </label>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 sm:h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-purple-200"
                >
                  {isSubmitting ? "Submitting..." : "Get the Free Guide"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  No spam. Unsubscribe anytime. We respect your privacy and will contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SuccessDialog 
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        showBookingOption={formData.bookCall}
      />
    </>
  );
};
