
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Calendar, MessageSquare, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [activeAgent, setActiveAgent] = useState(0);
  const agents = [
    { icon: Bot, name: "Task Agent", color: "text-purple-500" },
    { icon: MessageSquare, name: "Chat Agent", color: "text-blue-500" },
    { icon: Calendar, name: "Schedule Agent", color: "text-green-500" },
    { icon: FileText, name: "Report Agent", color: "text-orange-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [agents.length]);

  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Build Your Own{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI Team
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Get 10X More Done Without Hiring.
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              We train custom AI agents to plan, manage, and automate your work — 
              tailored to your workflow, goals, and stack.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={scrollToLeadForm}
              >
                Book Free AI Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg rounded-xl"
              >
                See Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 border-2 border-white"></div>
                ))}
              </div>
              <p className="text-gray-600">Trusted by 100+ teams worldwide</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-gray-500 text-sm">AI Agent Dashboard</span>
              </div>
              
              <div className="space-y-4">
                {agents.map((agent, index) => {
                  const Icon = agent.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-500 ${
                        activeAgent === index 
                          ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 shadow-md' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${agent.color}`} />
                      <div className="flex-1">
                        <div className="font-medium">{agent.name}</div>
                        <div className="text-sm text-gray-500">
                          {activeAgent === index ? 'Processing...' : 'Ready'}
                        </div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        activeAgent === index ? 'bg-green-400 animate-pulse' : 'bg-gray-300'
                      }`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
