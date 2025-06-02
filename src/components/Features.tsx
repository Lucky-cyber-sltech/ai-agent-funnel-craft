
import { ClipboardCheck, MessageSquare, Mail, Calendar, Zap, FileText } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: ClipboardCheck,
      title: "Auto-create and assign tasks",
      description: "From Slack messages to actionable items",
      color: "text-purple-500 bg-purple-100"
    },
    {
      icon: MessageSquare,
      title: "Summarize meetings",
      description: "Extract next steps automatically",
      color: "text-blue-500 bg-blue-100"
    },
    {
      icon: Mail,
      title: "Draft follow-ups & updates",
      description: "Keep your team in sync effortlessly",
      color: "text-green-500 bg-green-100"
    },
    {
      icon: Calendar,
      title: "Monitor progress",
      description: "Flag roadblocks before they happen",
      color: "text-orange-500 bg-orange-100"
    },
    {
      icon: Zap,
      title: "Smart integrations",
      description: "Works with Notion, GCal, Zapier & more",
      color: "text-red-500 bg-red-100"
    },
    {
      icon: FileText,
      title: "Automated reporting",
      description: "Weekly summaries and insights",
      color: "text-indigo-500 bg-indigo-100"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What Your AI Agents Can Do for You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each agent is custom-trained for your workflow and integrated with your existing tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-white"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to see what's possible?
            </h3>
            <p className="text-gray-700">
              Every agent is built specifically for your business processes and goals. 
              No generic solutions, just pure productivity gains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
