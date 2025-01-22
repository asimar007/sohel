import {
  GraduationCap,
  Award,
  Clock,
  ArrowRight,
  Star,
  Phone,
} from "lucide-react";
import Badge from "./ui/Badge";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-70"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="flex items-center gap-2">
              <Badge>Aliah University M.Sc. in Mathematics</Badge>
              <span className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              Math Journey
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hi, I'm Md. Sohel, with 3+ years of experience making mathematics
              accessible and enjoyable for students of all levels. Let's unlock
              your mathematical potential together through personalized
              guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => (window.location.href = "tel:9734540802")}
                className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                Book a Free Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                View Course Plans
              </button>
            </div>
          </div>
          <div className="flex-1 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-[2rem] rotate-6 opacity-90"></div>
              <img
                src="https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Math Tutor"
                className="relative rounded-[2rem] shadow-2xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-24">
          {[
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Expert Guidance",
              description:
                "Personalized learning approach tailored to your unique learning style and goals",
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Proven Results",
              description:
                "90% of students improve by at least one grade level within 3 months",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Flexible Schedule",
              description:
                "Choose from batch classes, one-on-one online sessions, or in-person tutoring at your convenience",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
