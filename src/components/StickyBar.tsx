
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StickyBar = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 shadow-2xl z-50 animate-slide-in-right">
      <div className="container mx-auto flex items-center justify-between max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <div className="font-semibold">Ready to get started?</div>
            <div className="text-sm text-purple-100">Book your free AI strategy call today</div>
          </div>
          <div className="sm:hidden">
            <div className="font-semibold">Ready for AI agents?</div>
          </div>
        </div>
        
        <Button 
          onClick={scrollToLeadForm}
          className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg"
        >
          Book Free Strategy Call
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
