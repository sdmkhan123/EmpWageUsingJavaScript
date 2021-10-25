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
const MAX_WORKING_HOURS = 160;
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
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
// UC4 - Calculate total emp wage assuming maximum 20 working days in a month
for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) 
{
    let EmpCheck = Math.floor(Math.random() * 10) % 3;
     let dailyHr = getWorkingHrs(EmpCheck);
     empHrs += dailyHr;
    let dailyWage = dailyHr * WAGE_PER_HR
    console.log("Daily Employee wage of day-"+day+" : " + dailyWage);
}
let empWage = WAGE_PER_HR * empHrs;
console.log("Total working hours : " + empHrs + "\nTotal monthly wage  : " + empWage);

//Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
let totalEmpHours = 0;
let totalWorkingDays = 0;

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) 
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHours += getWorkingHrs(empCheck);
}
let totalEmpWage = WAGE_PER_HR * totalEmpHours;
console.log("Total days  : " + totalWorkingDays + ", Total hours : " + totalEmpHours + ", Total wage : " + totalEmpWage);