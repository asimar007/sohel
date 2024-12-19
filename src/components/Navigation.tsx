import { useState } from "react";
import { Calculator, Menu, X } from "lucide-react";
import ScientificCalculator from "./calculator/ScientificCalculator";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-50 to-indigo-100 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Calculator className="w-8 h-8 md:w-10 md:h-10 text-indigo-600 transform hover:scale-110 transition-transform" />
            <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              School of Mathematics
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#services"
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-200 font-medium hover:underline"
            >
              Services
            </a>
            <a
              href="#schedule"
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-200 font-medium hover:underline"
            >
              Schedule
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-200 font-medium hover:underline"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-200 font-medium hover:underline"
            >
              Contact
            </a>
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-3 shadow-lg font-medium"
            >
              <Calculator className="w-5 h-5" />
              Calculator
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-indigo-200 transition-colors duration-200 active:scale-95"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-indigo-600 transform rotate-90 transition-transform" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-600 hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-20 w-full max-w-sm h-[calc(100vh-5rem)] bg-white/95 backdrop-blur-lg border-l border-indigo-100 shadow-2xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-6 space-y-4 overflow-y-auto h-full">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-indigo-600 px-4">
                  MENU
                </h3>
                <div className="bg-indigo-50/50 rounded-2xl p-2 space-y-1">
                  <a
                    href="#services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-gray-800 hover:text-indigo-600 hover:bg-white rounded-xl font-medium transition-all duration-200 active:scale-98"
                  >
                    Services
                  </a>
                  <a
                    href="#schedule"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-gray-800 hover:text-indigo-600 hover:bg-white rounded-xl font-medium transition-all duration-200 active:scale-98"
                  >
                    Schedule
                  </a>
                  <a
                    href="#testimonials"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-gray-800 hover:text-indigo-600 hover:bg-white rounded-xl font-medium transition-all duration-200 active:scale-98"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-gray-800 hover:text-indigo-600 hover:bg-white rounded-xl font-medium transition-all duration-200 active:scale-98"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="px-4 pt-4">
                <button
                  onClick={() => {
                    setIsCalculatorOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-indigo-600 text-white py-4 px-5 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-3 hover:bg-indigo-700 active:scale-98 shadow-md"
                >
                  <Calculator className="w-5 h-5" />
                  Open Calculator
                </button>
              </div>
            </div>
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
