import React, { useState } from "react";
import "./calc.css";

function Calculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState("");

    const handleAddition = () => {
        const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
        setResult(`Result: ${sum}`);
    };

    const handleMultiplication = () => {
        const product = parseFloat(firstNumber) * parseFloat(secondNumber);
        setResult(`Result: ${product}`);
    };

    const handleSubtraction = () => {
        const difference = parseFloat(firstNumber) - parseFloat(secondNumber);
        setResult(`Result: ${difference}`);
    };

    const handleDivision = () => {
        const quotient = parseFloat(firstNumber) / parseFloat(secondNumber);
        setResult(`Result: ${quotient}`);
    };

    return (
        <div className="calc">
            <div className="container-fluid">
                <div id="ground">
                    <div id="calculator" className="flex-container row">
                        <div id="getNumber">
                            <input
                                type="text"
                                placeholder="Enter first number"
                                id="inputGetNumber"
                                value={firstNumber}
                                onChange={(e) => setFirstNumber(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Enter second number"
                                id="inputGetNumber2"
                                value={secondNumber}
                                onChange={(e) => setSecondNumber(e.target.value)}
                            />

                            <p id="result">{result}</p>

                            <div className="flex-container" id="keys">
                                <div>
                                    <button type="button" id="add" onClick={handleAddition}>
                                        +
                                    </button>
                                </div>
                                <div>
                                    <button type="button" id="multiply" onClick={handleMultiplication}>
                                        *
                                    </button>
                                </div>
                                <div>
                                    <button type="button" id="minus" onClick={handleSubtraction}>
                                        -
                                    </button>
                                </div>
                                <div>
                                    <button type="button" id="divide" onClick={handleDivision}>
                                        /
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
