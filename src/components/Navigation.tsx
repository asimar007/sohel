import { useState } from "react";
import { Calculator, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScientificCalculator from "./calculator/ScientificCalculator";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.02,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <motion.nav
      className="bg-gradient-to-r from-indigo-50 to-indigo-100 shadow-xl sticky top-0 z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-4"
            variants={logoVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Calculator className="w-8 h-8 md:w-10 md:h-10 text-indigo-600 transform hover:scale-110 transition-transform" />
            </motion.div>
            <motion.span
              className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
              animate={{
                backgroundPosition: ["0%", "100%"],
                backgroundSize: ["100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              School of Mathematics
            </motion.span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-10">
            {["Services", "Schedule", "Testimonials", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-indigo-600 transition-colors duration-200 font-medium hover:underline"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgb(99 102 241 / 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsCalculatorOpen(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transform transition-all duration-200 flex items-center gap-3 shadow-lg font-medium"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Calculator className="w-5 h-5" />
              Calculator
            </motion.button>
          </div>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-indigo-200 transition-colors duration-200 active:scale-95"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-indigo-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Menu className="w-6 h-6 text-indigo-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-20 w-full max-w-sm h-[calc(100vh-5rem)] bg-white/95 backdrop-blur-lg border-l border-indigo-100 shadow-2xl origin-top"
              onClick={(e) => e.stopPropagation()}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.5,
                  ease: [0.36, 0, 0.66, 1],
                },
              }}
              exit={{
                scaleY: 0,
                opacity: 0,
                transition: {
                  type: "spring",
                  duration: 0.5,
                  ease: [0.36, 0, 0.66, 1],
                },
              }}
            >
              <div className="px-6 py-6 space-y-4 overflow-y-auto h-full">
                <div className="space-y-2">
                  <motion.h3
                    className="text-sm font-semibold text-indigo-600 px-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    MENU
                  </motion.h3>
                  <div className="bg-indigo-50/50 rounded-2xl p-2 space-y-1">
                    {["Services", "Schedule", "Testimonials", "Contact"].map(
                      (item, i) => (
                        <motion.a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-3 px-4 text-gray-800 hover:text-indigo-600 hover:bg-white rounded-xl font-medium transition-all duration-200 active:scale-98"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: "white" }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {item}
                        </motion.a>
                      )
                    )}
                  </div>
                </div>

                <div className="px-4 pt-4">
                  <motion.button
                    onClick={() => {
                      setIsCalculatorOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-indigo-600 text-white py-4 px-5 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-3 hover:bg-indigo-700 active:scale-98 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calculator className="w-5 h-5" />
                    Open Calculator
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calculator Modal */}
      <ScientificCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </motion.nav>
  );
}
