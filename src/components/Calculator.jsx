import { useContext } from "react";
import { CalculatorContext } from "../calculator/CalculatorProvider";
import { Link } from "react-router-dom";
import "./Calculator.css";

const Calculator = () => {
    const {addNumber, currentNumber } = useContext(CalculatorContext);
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="calculator">
            <h2>Pulsa los numeros a sumar</h2>
            <div className="buttons">
                {numberArray.map((num) => (
                    <button
                        key={num}
                        onClick={() => addNumber(num)}
                        className={currentNumber === num ? "selected" : ""}
                    >
                    {num}
                    </button>
                ))}
            </div>
        <Link to="/resultado">Ver Resultado</Link>
        </div>
    );
};

export default Calculator;
