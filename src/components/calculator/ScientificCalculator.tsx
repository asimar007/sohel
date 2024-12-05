import React, { useState } from "react";
import { X } from "lucide-react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

interface ScientificCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScientificCalculator({
  isOpen,
  onClose,
}: ScientificCalculatorProps) {
  const [display, setDisplay] = useState("0");
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  if (!isOpen) return null;

  const buttons = [
    ["sin", "cos", "tan", "DEG"],
    ["√", "x²", "xʸ", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "=", "C"],
  ];

  const evaluateExpression = (expr: string): string => {
    try {
      // Replace mathematical operators and evaluate
      const sanitizedExpr = expr.replace(/×/g, "*").replace(/÷/g, "/");
      return String(eval(sanitizedExpr));
    } catch {
      return "Error";
    }
  };

  const calculateTrigonometry = (op: string, value: number): string => {
    const radians = (value * Math.PI) / 180;
    const mathFunction = op as "sin" | "cos" | "tan";
    return String(Math[mathFunction](radians));
  };

  const handleNumber = (num: string) => {
    if (isNewCalculation) {
      setDisplay(num);
      setIsNewCalculation(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    switch (op) {
      case "C": {
        setDisplay("0");
        setIsNewCalculation(true);
        break;
      }
      case "=": {
        const result = evaluateExpression(display);
        setDisplay(result);
        setIsNewCalculation(true);
        break;
      }
      case "sin":
      case "cos":
      case "tan": {
        const result = calculateTrigonometry(op, parseFloat(display));
        setDisplay(result);
        setIsNewCalculation(true);
        break;
      }
      case "√": {
        setDisplay(String(Math.sqrt(parseFloat(display))));
        setIsNewCalculation(true);
        break;
      }
      case "x²": {
        setDisplay(String(Math.pow(parseFloat(display), 2)));
        setIsNewCalculation(true);
        break;
      }
      default: {
        setDisplay(display + op);
        setIsNewCalculation(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Scientific Calculator</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close calculator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <CalculatorDisplay value={display} />
          <div className="grid grid-cols-4 gap-2 mt-4">
            {buttons.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((button) => (
                  <CalculatorButton
                    key={button}
                    value={button}
                    onClick={() => {
                      if ("0123456789.".includes(button)) {
                        handleNumber(button);
                      } else {
                        handleOperator(button);
                      }
                    }}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
