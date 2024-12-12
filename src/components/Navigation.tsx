import { useState } from "react";
import { Calculator, Menu, X } from "lucide-react";
import ScientificCalculator from "./calculator/ScientificCalculator";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white to-blue-50 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Calculator className="w-8 h-8 text-blue-600 transform hover:scale-110 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              School of Mathematics
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#schedule"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Schedule
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <Calculator className="w-4 h-4" />
              Calculator
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-blue-600" />
            ) : (
              <Menu className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <a
              href="#services"
              className="block py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all duration-200"
            >
              Services
            </a>
            <a
              href="#schedule"
              className="block py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all duration-200"
            >
              Schedule
            </a>
            <a
              href="#testimonials"
              className="block py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all duration-200"
            >
              Contact
            </a>
            <button
              onClick={() => {
                setIsCalculatorOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full text-left py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all duration-200 flex items-center gap-2"
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
