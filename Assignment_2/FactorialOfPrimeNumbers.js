// Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

function prime(minRange, maxRange) {
  if (minRange !== null && maxRange !== null) {
    let primeList = new Array();

    for (let i = minRange; i <= maxRange; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
          count++;
        }
      }
      if (count === 2) {
        primeList.push(i);
      }
    }
    console.log("Prime Numbers: " + primeList);

    let map = new Map();
    for (let i = 0; i < primeList.length; i++) {
      let factorialCount = 1;

      for (let j = 1; j <= primeList[i]; j++) {
        factorialCount = factorialCount * j;
      }

      map.set(primeList[i], factorialCount);
    }

    for (let [key, value] of map.entries()) { 
      console.log(`${key} : ${value}`);
    }

  } else {
    console.log("Invalid Data Provided!");
  }
}

// Calling function
prime(20, 47);