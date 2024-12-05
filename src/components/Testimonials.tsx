import { Star } from "lucide-react";

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
    <div className="py-16 bg-blue-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Student Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.grade}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
