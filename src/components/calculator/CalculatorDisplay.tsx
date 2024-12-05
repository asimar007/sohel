interface CalculatorDisplayProps {
  value: string;
}

export default function CalculatorDisplay({ value }: CalculatorDisplayProps) {
  return (
    <div 
      className="bg-gray-100 p-4 rounded-lg"
      role="textbox"
      aria-label="Calculator display"
    >
      <div className="text-right text-2xl font-mono truncate">
        {value}
      </div>
    </div>
  );
}
