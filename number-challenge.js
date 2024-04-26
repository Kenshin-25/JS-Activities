/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

function sumOfThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
  }

function differenceOfTwoNumbers(num1, num2) {
    return num1 - num2;
  }

function productOfTwoNumbers(num1, num2) {
    return num1 * num2;
  }

function averageOfTwoNumbers(num1, num2) {
    return (num1 + num2) / 2;
  }

  console.log(sumOfThreeNumbers(1, 2, 3));
  console.log(differenceOfTwoNumbers(5, 3));
  console.log(productOfTwoNumbers(4, 6));
  console.log(averageOfTwoNumbers(10, 20));