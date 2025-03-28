import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(null);

    const addNumber = (num) => {
        setNumbers([...numbers, num]);
        setCurrentNumber(num);
    };

    const resetCalculator = () => {
        setNumbers([]);
        setCurrentNumber(null);
    };

    let sumNumbers = 0;
    for (let num of numbers) {
        sumNumbers += num;
    }

    return (
    <CalculatorContext.Provider
        value={{ numbers, currentNumber, addNumber, resetCalculator, sumNumbers }}
    >
    {children}
    </CalculatorContext.Provider>
    );
};
