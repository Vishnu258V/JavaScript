/**
Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
 */

// Converting temperature from Celsius to Fahrenheit
let calsiusToFahrenheit = (celsius) => {
  if (celsius !== undefined && celsius !== null) {
    let isInteger = Number.isInteger(celsius);
    let isDecimal = celsius % 10 !== 0;
    
    if(isInteger || isDecimal) {
        let fahrenheit = (celsius/5)*9+32;
        return `${fahrenheit} F`;
    }else{
        return "Input Temperature is not a proper number format";
    }

  }
  return "No Proper Input Temperature";
};

let fahrenheit = calsiusToFahrenheit(60);
console.log(fahrenheit);



// Converting temperature from Fahrenheit to Celsius
let fahrenheitToCelsius = (fahrenheit) => {
    if (fahrenheit !== undefined && fahrenheit !== null) {
      let isInteger = Number.isInteger(fahrenheit);
      let isDecimal = fahrenheit % 10 !== 0;
      
      if(isInteger || isDecimal) {
          let celsius = ((fahrenheit - 32)/9)*5;
          return `${celsius} C`;
      }else{
          return "Input Temperature is not a proper number format";
      }
  
    }
    return "No Proper Input Temperature";
  };
  
  let celsius = fahrenheitToCelsius(45);
  console.log(celsius);


