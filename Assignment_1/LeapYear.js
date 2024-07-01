/**
 * Write a program to find whether a given year is a leap year or not.
 */

let isLeapYear = (year) => {
  if (year !== undefined && year !== null) {
    let bool = (year % 100) / 4;
    if (bool) {
      return "leap year";
    } else {
      return "not leap year";
    }
  }
  return "No proper Input Year";
};

let year;
console.log(isLeapYear(year));

/**
 * Initially i have forgotten that declaring the return for the funtion.
 * So, it was printing the console statement and "undefined".
 * Since i did not return anything from the method.
 */
