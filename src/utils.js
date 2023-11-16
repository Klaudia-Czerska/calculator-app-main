const checkIfIncludes = (nodeList, calc) => {
    for (let i = 0; i < nodeList.length; i++) {
        if(calc.includes(nodeList[i].innerText)) {
            return nodeList[i].innerText;
        }
    }
}

export default checkIfIncludes;