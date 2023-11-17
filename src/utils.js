const checkIfIncludes = (nodeList, calc) => {
    for (let i = 0; i < nodeList.length; i++) {
        if(calc.includes(nodeList[i].innerText)) {
            return nodeList[i].innerText;
        }
    }
}

const calculate = (first, operation, second) => {
    const firstNumber = Number(first);
    const secondNumber = Number(second);

    switch (operation) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '/':
            return firstNumber / secondNumber;
        case 'x':
            return firstNumber * secondNumber;
    }

}

const result = (op, calc) => {
    if (checkIfIncludes(op, calc)) {
        let operation = checkIfIncludes(op, calc);
        const no = calc.split(`${operation}`);
        return calculate(no[0], operation, no[1]);
    }
}



export { checkIfIncludes, calculate, result };