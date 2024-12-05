import { Calculator as CalculatorIcon } from "lucide-react";

export default function Calculator() {
  const openCalculator = () => {
    window.open("https://www.desmos.com/scientific", "_blank");
  };

  return (
    <button
      onClick={openCalculator}
      className="bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center gap-2 mx-auto"
    >
      <CalculatorIcon className="w-5 h-5 text-indigo-600" />
      <span className="text-gray-800">Open Scientific Calculator</span>
    </button>
  );
}
