const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;

}

const fromYenToPound = function(valueinYen){
    let valueInEuro = valueinYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



const sum = (a,b)=>{
    return a + b;
}

console.log(sum(7,3));

module.exports = {sum , fromEuroToDollar, fromDollarToYen, fromYenToPound};


