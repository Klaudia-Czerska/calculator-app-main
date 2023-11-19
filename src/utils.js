const checkIfIncludes = (nodeList, calc) => {
    for (let i = 0; i < nodeList.length; i++) {
        if(calc.substring(1).includes(nodeList[i].innerText)) {
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
            if (secondNumber === 0) {
                return "You can't divide by 0!";
            }
            return firstNumber / secondNumber;
        case 'x':
            return firstNumber * secondNumber;
    }

}

const result = (op, calc) => {
    if (checkIfIncludes(op, calc)) {
        const no = calc.split(' ');
        return calculate(no[0], no[1], no[2]);
    }
}

const isLastCharOperation = (op, calc) => {
    if (calc.innerText.split(' ').length === 2 && checkIfIncludes(op, calc.innerText)) {
        return true;
    }
}


export { checkIfIncludes, calculate, result, isLastCharOperation };