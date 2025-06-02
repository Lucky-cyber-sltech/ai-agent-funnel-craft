
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StickyBar = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 sm:p-4 shadow-2xl z-50 animate-slide-in-right">
      <div className="container mx-auto flex items-center justify-between max-w-4xl gap-4">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <div className="hidden sm:block">
            <div className="font-semibold text-sm sm:text-base">Ready to get started?</div>
            <div className="text-xs sm:text-sm text-purple-100">Book your free AI strategy call today</div>
          </div>
          <div className="sm:hidden min-w-0">
            <div className="font-semibold text-sm truncate">Ready for AI agents?</div>
          </div>
        </div>
        
        <Button 
          onClick={scrollToLeadForm}
          className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm flex-shrink-0 transition-all duration-300 focus:ring-4 focus:ring-white/30"
        >
          <span className="hidden sm:inline">Book Free Strategy Call</span>
          <span className="sm:hidden">Book Call</span>
          <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
};
