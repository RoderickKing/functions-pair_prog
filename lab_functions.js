// Create the following functions and test them by logging out their return value.

// MVP

// Part 1

var myNumbers = [1,2,3,4,5,6,7,8]

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

function getNumbers (numbers){
  var total = 0;
   for (number of numbers) {
     total += number;
   }
   return total;
}
console.log(getNumbers(myNumbers));

// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.

function getEvens(numbers){
  var outArray = [];
   for (number of numbers) {
     if (number % 2 === 0){
       outArray.push(number);
     };
   }
   return outArray;
}
console.log(getEvens(myNumbers));


// Part 2

var myBill = [
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.
function total_bill(Bills) {
  var total_bill = 0;
  for (bill of Bills )  {
      total_bill += bill.price;
   };
 return total_bill;
}


console.log(total_bill(myBill));

// 2.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.


function detail_bill(Bills,customerName) {
  var output_array = [];
  for (bill of Bills )  {
      if (bill.customer  === customerName) {
         output_array.push(bill);
      }
   }
   return output_array;
  }

console.log(detail_bill(myBill,'Upul'));


// 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.

function personBill(Bills,customerName) {
  var totalBill = 0;
  for (bill of Bills )  {
      if (bill.customer  === customerName) {
         totalBill += bill.price;
      }
   }
   return totalBill;
  }

console.log(personBill(myBill,'Rita'));


// 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.

function aveBill (Bills){
  var totalBill = 0;
  var itemCount = 0;
  for (bill of Bills )  {
             totalBill += bill.price;
             itemCount ++;
      }
   return totalBill/itemCount;
  }
console.log(aveBill(myBill));

// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
  }
}

// 3.a. Log out the the bodyBuilder's strength - the value should be 2.

// 3.b. Use the workOut function to update the bodyBuilder's strenth.

// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.
