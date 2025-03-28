import { useContext } from "react";
import { CalculatorContext } from "../calculator/CalculatorProvider";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = () => {
    const {numbers,  sumNumbers, resetCalculator } = useContext(CalculatorContext);

    return (
        <div className="result">
            <h2>Resultado</h2>
            <p>Números seleccionados: {numbers.join(" + ") || "Ninguno"}</p>
            <h3>Total: {sumNumbers}</h3>
            <button onClick={resetCalculator}>Reset</button>
            <Link to="/">Volver</Link>
        </div>
    );
};

export default Result;
