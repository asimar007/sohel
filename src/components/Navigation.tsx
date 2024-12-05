import { useState } from "react";
import { Calculator, Menu, X } from "lucide-react";
import ScientificCalculator from "./calculator/ScientificCalculator";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Calculator className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">School of Mathematics</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#schedule" className="text-gray-600 hover:text-blue-600">
              Schedule
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Calculator
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a
              href="#services"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#schedule"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Schedule
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Contact
            </a>
            <button
              onClick={() => {
                setIsCalculatorOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full text-left py-2 text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Calculator
            </button>
          </div>
        </div>
      )}

      {/* Calculator Modal */}
      <ScientificCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </nav>
  );
}
