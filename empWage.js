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
//Calculate Daily Employee Wage.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) 
{
    case IS_PART_TIME:
        empHrs = PART_TIME_HR;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HR;
        break;
    default:
        empHrs = 0;
        break;
}
let empWage = empHrs * WAGE_PER_HR;
console.log("Daily Employee wage: " + empWage);