//3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

const sumOfMultiples = () => {
let sum = 0;
    for(let i = 1; i<=1000; i++){
        if((i%3 === 0) || (i%5 === 0)){
            sum = sum+i;
        }
    }
    return sum;
}

console.log(sumOfMultiples());