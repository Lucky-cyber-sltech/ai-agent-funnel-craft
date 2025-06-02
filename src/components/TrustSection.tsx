
import { Button } from "@/components/ui/button";
import { Shield, Globe, Zap, Users } from "lucide-react";

export const TrustSection = () => {
  const trustMarkers = [
    {
      icon: Shield,
      title: "100% Secure & Custom",
      description: "Your data stays private and agents are built for you alone"
    },
    {
      icon: Globe,
      title: "Used by 100+ teams worldwide",
      description: "From startups to scale-ups across every industry"
    },
    {
      icon: Zap,
      title: "Powered by GPT-4 + automation APIs",
      description: "Best-in-class AI with rock-solid integrations"
    },
    {
      icon: Users,
      title: "Done-for-you service",
      description: "Zero setup stress, we handle the technical details"
    }
  ];

  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your AI team is waiting. Let's get started.
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {trustMarkers.map((marker, index) => (
                <div key={index} className="space-y-2 sm:space-y-3 text-center sm:text-left">
                  <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                    <marker.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 flex-shrink-0" />
                    <h3 className="font-semibold text-base sm:text-lg leading-tight">{marker.title}</h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {marker.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <div className="text-center space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold">Ready to transform your workflow?</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <Button 
                  size="lg"
                  onClick={scrollToLeadForm}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 sm:py-4 text-base sm:text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-purple-200"
                >
                  Book My Free AI Strategy Call
                </Button>
                
                <div className="text-xs sm:text-sm text-gray-300">
                  30 minutes • No sales pitch • Actionable insights guaranteed
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Join the productivity revolution. Your competitors already are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
