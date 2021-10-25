console.log("Welcome to Employee Wage Practice problem");
//To check Employee is present or absent
const IS_PRESENT = 1;
let Check = Math.floor(Math.random() * 10) % 2;
if (Check == IS_PRESENT) 
{
    console.log("Employee is present");
}
else 
{
    console.log("Employee is absent");
}
//Refactor the code to Calculate Daily Employee Wage using fun.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
function getWorkingHrs(empCheck) {
    switch (empCheck) 
    {
        case IS_PART_TIME:
            return PART_TIME_HR;
        case IS_FULL_TIME:
            return FULL_TIME_HR;
        default:
            return 0;
    }
}
empHrs = getWorkingHrs(empCheck)
let empWage = empHrs * WAGE_PER_HR;
console.log("Daily Employee wage: " + empWage);