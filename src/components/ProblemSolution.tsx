
import { ArrowRight, CheckCircle, Users, Zap, Target } from "lucide-react";

export const ProblemSolution = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnose Your Workflow",
      description: "We analyze your current processes and identify automation opportunities",
      icon: Target,
      color: "from-red-500 to-orange-500"
    },
    {
      number: "02", 
      title: "Build & Train Custom Agents",
      description: "Our team creates AI agents tailored to your specific needs and goals",
      icon: Users,
      color: "from-purple-500 to-blue-500"
    },
    {
      number: "03",
      title: "Launch + Optimize in Your Tools",
      description: "Seamless integration with Notion, Slack, Google Calendar, and more",
      icon: Zap,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            The Problem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight px-4">
            You're wasting hours on admin, updates, and follow-ups.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            That's where <span className="font-semibold text-purple-600">Tasked AI</span> steps in — 
            your virtual team of intelligent agents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-300">{step.number}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                </div>
                
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            Ready in 7 days or less
          </div>
        </div>
      </div>
    </section>
  );
};
