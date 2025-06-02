
import { Star, Quote } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "I thought I needed a VA — turns out I needed Tasked AI. Game-changer.",
      author: "Sarah Lee",
      role: "Founder at LaunchStack",
      avatar: "SL",
      rating: 5,
      result: "17 hours/week saved"
    },
    {
      quote: "We automated our ops team's weekly tasks in 5 days. Unreal.",
      author: "David M.",
      role: "Head of Ops",
      avatar: "DM", 
      rating: 5,
      result: "80% task automation"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
            Client Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4">
            "Our agents saved us 17 hours/week. We scaled without hiring."
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300 mb-4" />
              
              <blockquote className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex gap-1 mb-1 justify-end">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-green-600">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {[
              { number: "100+", label: "Teams served" },
              { number: "17hrs", label: "Avg. weekly savings" },
              { number: "7 days", label: "Setup time" },
              { number: "99%", label: "Satisfaction rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
