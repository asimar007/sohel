import { Star, Quote } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Bristi",
      grade: "12th Grade",
      content:
        "Thanks to Sohel's help, I went from struggling with calculus to acing my 12th exam. Hir patient approach and clear explanations made all the difference.",
      rating: 5,
    },
    {
      name: "Yousuf",
      grade: "11th Grade",
      content:
        "The online sessions are so convenient, and the interactive tools make learning algebra fun. My grades have improved significantly!",
      rating: 5,
    },
    {
      name: "Ujjal",
      grade: "11th Grade",
      content:
        "Sohel's 12th math prep was invaluable. His strategies and practice materials helped me achieve a score I never thought possible.",
      rating: 5,
    },
  ];

  return (
    <div
      className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Student Success Stories"
          subtitle="Hear what our students have to say about their learning journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <Quote className="absolute -top-2 -left-2 w-12 h-12 text-indigo-100 transform -rotate-12" />

              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4 mt-auto">
                  <div className="font-semibold text-lg text-indigo-600">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {testimonial.grade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
