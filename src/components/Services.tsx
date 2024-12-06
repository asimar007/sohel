import { Users, Monitor, BookOpen, Target } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

export default function Services() {
  const services = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Group Classes",
      description: "Small group sessions for collaborative learning",
      price: "500/Month per student",
      features: [
        "7-10 students per group",
        "Peer learning",
        "Weekly assignments",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1-on-1 Tutoring",
      description: "Personalized attention and customized learning plans",
      price: "5,000/Month",
      features: [
        "Customized curriculum",
        "Flexible scheduling",
        "Progress tracking",
      ],
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Online Classes",
      description: "Learn from anywhere with interactive digital tools",
      price: "500/Month",
      features: [
        "Interactive whiteboard",
        "Screen sharing",
        "Session recording",
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Exam Prep",
      description: "Focused preparation for 12th, 10th",
      price: "Coming Soon",
      features: [
        "Practice tests",
        "Test strategies",
        "Score improvement tracking",
      ],
    },
  ];

  return (
    <div className="py-24 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Services Offered"
          subtitle="Choose the perfect learning experience that matches your needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition duration-300 border-2 border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <p className="text-3xl font-bold text-indigo-600 mb-6">
                {service.price}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
