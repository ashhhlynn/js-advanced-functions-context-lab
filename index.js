/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(ary){
    let record 
    return record = { 
        firstName: ary[0],
        familyName: ary[1],
        title: ary[2],
        payPerHour: ary[3],
        timeInEvents: [], 
        timeOutEvents: []
    }
}

function createEmployeeRecords(arys){
    return arys.map(createEmployeeRecord)
}


function createTimeInEvent(timestamp) {
    const timeInEvent = {
        type: "TimeIn",
        hour: +timestamp.split(" ")[1],
        date: timestamp.split(" ")[0],
        timestamp: timestamp
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(timestamp) {
    const timeOutEvent = {
        type: "TimeOut",
        hour: +timestamp.split(" ")[1],
        date: timestamp.split(" ")[0],
        timestamp: timestamp
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(dateYMD){

    const timeIn = this.timeInEvents.find((e) => e.date === dateYMD).hour
    const timeOut = this.timeOutEvents.find((e) => e.date === dateYMD).hour
    return (timeOut - timeIn)/100
}

let wagesEarnedOnDate = function(date) 
    {
        let rate = this.payPerHour
        let hours = hoursWorkedOnDate.call(this,date)
        return rate * hours
    }


function calculatePayroll(employees){
return employees.map((employee) => allWagesFor.call(employee)).reduce((total, currentValue) => currentValue += total)


}
function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find((record) => record.firstName === firstName)
}



let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}