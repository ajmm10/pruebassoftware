function sum(a, b) {
    return a + b;
}



function multiply(a, b) {
    return a * b;
}




function devide(a, b) {
    return a / b;
}


const average = (values) => {
    const valuesLength = values.length
    if (valuesLength === 0) return null 
    
    const totalvalues = values.reduce((a,b) => a + b, 0)
    return totalvalues / valuesLength
    
}
module.exports = {sum, multiply, devide, average};
