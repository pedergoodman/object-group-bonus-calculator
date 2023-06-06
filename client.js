// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let employeesCalculatedBonus = [];


function employeeForBonus (employeesArray) {
  // let newObjectArray = [];
  for (let employee of employeesArray) {
  
    // Test for accessing individual employee info
    console.log(employee.name);
    // console.log('employeeNumber', employee.employeeNumber);
    // console.log('employeeNumber length', employee.employeeNumber.length);
    // console.log('employeeSalaray', employee.annualSalary);
    // console.log('employeeRating', employee.reviewRating);
    calculateIndividualEmployeeBonus(employee);

    // push to newObjectArray
  }
  // return newObjectArray

}



// percentage calc salay * (13/100) 


// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here

  let bonusPercentage = 0;
  // Checking ratings and years of serivce 
  if (employee.reviewRating <= 2) {
    console.log('Employee Rating 2 & below');
    bonusPercentage = 0;
  } // end low rating check

  // check years of service
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 5;
  } // end check for 15 years

  // Check employee rating above 2
  if (employee.reviewRating === 3) {
    bonusPercentage += 4;
  } 
  else if (employee.reviewRating === 4) {
    bonusPercentage += 6;
  } 
  else if (employee.reviewRating === 5) {
    bonusPercentage += 10;
  } // end check ratings above 2
  
  
  // checking salary 
  if (Number(employee.annualSalary) > 65000) {
    bonusPercentage--
  }
  // checking if above 13 or below 0
  if (bonusPercentage < 0) {
    bonusPercentage = 0
  }
  if (bonusPercentage > 13) {
    bonusPercentage = 13
  }

  let decimialBonusPercentage = bonusPercentage; 

  let result = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: 'total comp',
    totalBonus: 'bonue' 
  }

  console.log(result);
  return result
}

employeeForBonus(employees)


// console.log(calculateIndividualEmployeeBonus(employees[3])); // # should be 14
  // return new object with bonus results
  

/*
INPUT
- employee object

OUTPUT
- new bounusCalculated object 
OR 
- percent# / 100 
// example 13 would be .13


* Check employee rating
  * If its 2 or below
    * no bonus
  * else
    * 



*/



// TESTS!!
// employeeForBonus(employees);