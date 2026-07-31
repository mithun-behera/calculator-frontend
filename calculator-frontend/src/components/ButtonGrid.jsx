import { Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import calculatorService from "../services/calculatorService";
const Buttons = [
    ["AC", "⌫", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="]
];
function ButtonGrid({ display, setDisplay,
    history, setHistory
}) {
    const handleClick = async (value) => {
        if (value === "AC") {
            setDisplay("");
            return;
        }
        if (value === "⌫") {
            setDisplay(display.slice(0, -1));
            return;
        }
        if (value === "=") {
            const operators = ["+", "-", "×", "÷", "%"];
            const lastChar = display.slice(-1);

            if (display === "" || operators.includes(lastChar)) {
                setDisplay("Invalid Expression");
                return;
            }
            try {
                let operator = "";
                let num1 = "";
                let num2 = "";

                const operators = ["+", "-", "×", "÷", "%"];

                for (const op of operators) {
                    if (display.includes(op)) {
                        operator = op;
                        const parts = display.split(op);
                        num1 = parts[0];
                        num2 = parts[1];
                        break;
                    }
                }
                if (!operator) return;

                const apiOperator =
                    operator === "×" ? "*" :
                        operator === "÷" ? "/" :
                            operator;

                const response = await calculatorService.calculate({
                    num1: Number(num1),
                    num2: Number(num2),
                    operator: apiOperator
                });

                const result = response.data.data.result;
                setHistory((prevHistory) => [
                    `${num1} ${operator} ${num2} = ${result}`,
                    ...prevHistory
                ])
                setDisplay(result.toString());
            } catch (error) {
                console.error(error);
                setDisplay("Error");
            }
            return;
        }
        if (
            display === "" &&
            ["+", "×", "÷", "%"].includes(value)
        ) {
            return;
        }
        const operators = ["+", "-", "×", "÷", "%"]
        const lastChar = display.slice(-1);
        if (operators.includes(lastChar) && operators.includes(value)) {
            return;
        }
        if (value === ".") {
            let currentNumber = display;
            const operatorIndex = Math.max(
                display.lastIndexOf("+"),
                display.lastIndexOf("-"),
                display.lastIndexOf("×"),
                display.lastIndexOf("÷"),
                display.lastIndexOf("%")
            );
            if (operatorIndex !== -1) {
                currentNumber = display.substring(operatorIndex + 1);
            }
            if (currentNumber.includes(".")) {
                return;
            }
        }
        setDisplay(display + value);
    };
    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;
            if ("0123456789".includes(key)) {
                handleClick(key);
            } else if (["+", "-", "*", "/", "."].includes(key)) {
                if (key === "*") {
                    handleClick("×");
                }
                else if (key === "/") {
                    handleClick("÷");
                } else {
                    handleClick(key);
                }
            }
            else if (key === "Enter") {
                handleClick("=");
            } else if (key === "Backspace") {
                handleClick("⌫");
            }
            else if (key === "Escape") {
                handleClick("AC");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [display]);
    return (
        <>
            {Buttons.map((row, rowIndex) => (
                <Row className="mb-3" key={rowIndex}>
                    {row.map((btn) => (
                        <Col xs={3} key={btn}>
                            <Button
                                onClick={() => handleClick(btn)}
                                className="w-100 py-3 fs-4 fw-bold"
                                variant={
                                    btn === "="
                                        ? "success"
                                        : ["+", "-", "×", "÷", "%"].includes(btn)
                                            ? "warning"
                                            : ["AC", "⌫"].includes(btn)
                                                ? "secondary"
                                                : "light"
                                }>
                                {btn}
                            </Button>
                        </Col>
                    ))}
                </Row>
            ))}
        </>
    );
}
export default ButtonGrid;