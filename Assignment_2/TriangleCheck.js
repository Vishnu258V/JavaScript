// 1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

const triangle = (sideOne, sideTwo, sideThree) => {
  if (sideOne !== null && sideTwo !== null && sideThree !== null) {
    let sides = [sideOne, sideTwo, sideThree];
    console.warn(sides);
    let count = 0;

    for(let i=0; i < sides.length; i++) {
      for(let j=0; j < sides.length; j++){
        if(sides[i] === sides[j]){
          count++;
        }
      }
    }

   console.log("count: " + count);
    if(count === 9 ){
      return "Equvilatoral Triangle"
    }else if(count == 5){
      return "Isosles Traingle"
    }else{
      return "Scalene Traingle"
    }
  } else {
    console.error("Insufficient data available for the triangle");
  }
};

console.log(triangle(222, 111, 222));
