const NUMERIC_CHARS = "0123456789." as const;
const OPERATOR_CHARS = "+-×÷=" as const;

interface CalculatorButtonProps {
  value: string;
  onClick: () => void;
}

export default function CalculatorButton({
  value,
  onClick,
}: CalculatorButtonProps) {
  const getButtonStyle = (): string => {
    if (NUMERIC_CHARS.includes(value)) {
      return "bg-white hover:bg-gray-50";
    }
    if (OPERATOR_CHARS.includes(value)) {
      return "bg-indigo-500 hover:bg-indigo-600 text-white";
    }
    return "bg-gray-100 hover:bg-gray-200";
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonStyle()} p-3 rounded-lg font-medium transition-colors duration-200 text-center`}
      aria-label={`Calculator button ${value}`}
    >
      {value}
    </button>
  );
}
