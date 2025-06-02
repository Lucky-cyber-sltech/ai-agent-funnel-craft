
import { Button } from "@/components/ui/button";
import { Video, Play } from "lucide-react";

export const VideoDemo = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            See Tasked AI Agents in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Watch how our AI agents transform chaotic workflows into streamlined productivity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20"></div>
              
              <div className="relative z-10 text-center text-white space-y-4 sm:space-y-6 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto hover:bg-white/30 transition-colors cursor-pointer group">
                  <Play className="h-6 w-6 sm:h-8 sm:w-8 ml-1 group-hover:scale-110 transition-transform" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold">90-Second Demo</h3>
                  <p className="text-gray-200 text-sm sm:text-base">See real AI agents managing real workflows</p>
                </div>
              </div>
              
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1 text-white text-xs sm:text-sm">
                <Video className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1 sm:mr-2" />
                1:30 minutes
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-6 py-3 text-sm sm:text-base">
              See More Agent Use Cases →
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto">
          {[
            { title: "Task Automation", description: "Watch agents auto-assign from Slack" },
            { title: "Meeting Summaries", description: "See instant action item extraction" },
            { title: "Progress Monitoring", description: "Real-time roadblock detection" }
          ].map((demo, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{demo.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{demo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
