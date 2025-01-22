import { Calculator as CalculatorIcon } from "lucide-react";
import { useState } from "react";

export default function Calculator() {
  const [isHovered, setIsHovered] = useState(false);

  const openCalculator = () => {
    window.open(
      "https://www.desmos.com/scientific",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={openCalculator}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        bg-white px-6 py-3 rounded-xl
        shadow-md hover:shadow-xl
        transform transition-all duration-300
        ${isHovered ? "scale-105" : "scale-100"}
        flex items-center gap-3 mx-auto
        hover:bg-indigo-50
      `}
      aria-label="Open Scientific Calculator"
    >
      <CalculatorIcon
        className={`
          w-5 h-5 
          transition-colors duration-300
          ${isHovered ? "text-indigo-700" : "text-indigo-600"}
        `}
      />
      <span
        className={`
        font-medium
        transition-colors duration-300
        ${isHovered ? "text-gray-900" : "text-gray-800"}
      `}
      >
        Open Scientific Calculator
      </span>
    </button>
  );
}
