/* Your Code Here */

function createEmployeeRecord(employee){
    const record = {
        firstName: employee[0], 
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents : [], 
        timeOutEvents: [],
    };

    return record;
}

function createEmployeeRecords(employees){
    const empArray = [];

    employees.forEach(e => {
        empArray.push(createEmployeeRecord(e));
    });

    return empArray;
}

function createTimeInEvent(timeIn){
    const tEvent = {
        type: "TimeIn",
        hour: parseInt( timeIn.slice(10)),
        date: timeIn.slice(0,10),
    }
    this.timeInEvents.push(tEvent);
    return this;
}

function createTimeOutEvent(timeOut){
    const tEvent = {
        type: "TimeOut",
        hour: parseInt( timeOut.slice(10)),
        date: timeOut.slice(0,10),
    }
    this.timeOutEvents.push(tEvent);
    return this;
}

function hoursWorkedOnDate(d)
{
   
    const tIn = this.timeInEvents.find(({ date }) => date === d);
    const tOut = this.timeOutEvents.find(({ date }) => date === d);

    return (tOut.hour - tIn.hour) / 100;
}

function wagesEarnedOnDate(d){
    return hoursWorkedOnDate.call(this, d) * this.payPerHour;
}

function findEmployeeByFirstName(employees, name){
    return employees.find(({ firstName }) => firstName === name);
}

function calculatePayroll(employees){
    let payroll = 0;
    employees.forEach(e => {
        payroll += allWagesFor.call(e);
    });

    return payroll;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

