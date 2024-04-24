function calculate() {
    var num1Element = document.getElementById("num1");
    var num2Element = document.getElementById("num2");
    var operationElement = document.getElementById("operation");
    var resultElement = document.getElementById("result");
    var num1 = parseFloat(num1Element.value);
    var num2 = parseFloat(num2Element.value);
    var operation = operationElement.value;
    var result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            }
            else {
                result = "num2 cannot be zero";
            }
            break;
        default:
            result = "Error";
    }
    resultElement.value = result.toString();
}
