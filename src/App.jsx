import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CalculatorProvider } from "./calculator/CalculatorProvider";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";
import './App.css'

const App = () => {
    return (
        <CalculatorProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resultado" element={<ResultPage />} />
                    </Routes>
            </Router>
        </CalculatorProvider>
    );
};

export default App;
