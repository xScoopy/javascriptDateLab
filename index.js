// What is a date? 

// Make a Date
const today = new Date() // Gets the time now
// Print the date
console.log(today, '<- Today')  
// It's really a number
console.log(today.getTime(), '<- Time') 


// It's really the number of milliseconds since 1970
// get the number of years since 1970
console.log('Years since 1970')
console.log(today / 1000 / 60 / 60 / 24 / 365.25) 
// Divide by 1000 to get seconds divide by 60 to get minutes
// divide by 60 to get hours, divide by 24 to get days, 
// divide by 365.25 to get years

// or divide by 86,400 seconds
console.log(today / 86400 / 1000 / 365.25)


console.log('-------- Age --------')

// You can make a date from almost any 
// human readable string for example: 
const bday = new Date('Nov 7, 1991')
// Challenge: Calculate your age with JS
const age = today - bday 
console.log(age, '<- Age in ms')
// Challenge: Calculate your age in secs, mins, hrs, days, years
const secs = age / 1000
console.log(secs, '<- Age in secs')
const mins = secs / 60
console.log(mins, '<- Age in mins')
const hrs = mins / 60
console.log(hrs, '< - age in hrs')
const days = hrs / 24
console.log(days, '<- age in days')
const years = days / 365.25
console.log(years, '<- age in years')

console.log('-------- BDay --------')

// You can also initialize a date with 
// year, month, date, hours, mins, secs, ms
// (month is 0 indexed Jan == 0)

const newYear = new Date(2021, 0, 1)
// Get the components from a date
console.log(newYear.getFullYear(), newYear.getMonth(), newYear.getDate())
// To get the month by name you might: 
const months = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
// Shows the month for new years
console.log(months[newYear.getMonth()])
// Challenge: Show the month of your birthday

// Days of the week are also 0 indexed 0:Sun - 6:Sat 
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
// Challenge: Show the day of the week of your birthday


console.log('-------- Data Offsets --------')

// Date offsets show the difference between two dates

const date = new Date()          // Start with a date 
const startDate = new Date(date) // copy the date
const dueDate = new Date(date)   // copy the date

// Start date is 7 days ago
// Use setDate to modify the start date subtract 7 days
startDate.setDate( date.getDate() - 7 ) // 7/20

// Due date is 3 days from now
// Use setDate to modify the end date add 3 days
dueDate.setDate( date.getDate() + 3 ) // 7/30

console.log(startDate.getDate(), dueDate.getDate())
console.log(startDate, dueDate)
// Check these dates they should be 7 days ago and 3 days from now



// Try these problems 

console.log('--------- Problem 1 --------')
// Schedule future dates - Given a date return a list of 
// dates separated by a time offset
// date is a Date object
// repeat is a number, the number of repeats 
// offset is a number, the number days between dates returned

function consecutiveDates(date, repeat, offset) {
  // Your code here 
}

// Starting date 1/1/2019, repeat 4 times, return dates 
// 3 days apart
consecutiveDates(new Date(2019, 0, 1), 4, 3)

// Should return an array with dates:
// 1. 1/1/2019 <- Starting date
// 2. 1/4/2019 <- Each date 3 days apart
// 3. 1/7/2019
// 4. 1/10/2019

// Stretch goals 
// add a unit for time:
// consecutiveDates(new Date(2019, 0, 1), 3, 1, 'year')
// Should return an array of 3 dates separated by 1 year

// 1. 1/1/2019
// 2. 1/1/2020
// 3. 1/1/2021

// function consecutiveDates(date, repeat, offset, unit = 'day') {
// 
// }



console.log('--------- Problem 2 --------')

// Write a function to order dates
// Takes an array of dates, returns an array of ordered dates

function orderDates(dates) {
  // orders the dates 
  // returns a new array of ordered dates
}

orderDates([today, dueDate, startDate, bday, newYear])

// [bday, startdate, duedate, newyear]

// Stretch: Return an object containing three keys each holding an array of dates. The keys are: 

// - past: array of dates that happened before today
// - present: all dates that happen today
// - furture: all of the dates that will occur in the future

// { past: [...], present:[...], future:[...] }

console.log('--------- Problem 3 --------')

// Given an array of dates find the date that will happen next. 
// You need to find the date that is closetest to today
// but not before. 

function nextDate(dates) {
  // find the date that will happen next in dates
  // return the next date
}

nextDate([today, dueDate, startDate, bday, newYear])

// Stretch Goal: Return a human readable string: 
// Your next appointment is 3 days from now. 

console.log('--------- Problem 4 --------')

// Birthday planner. Write a function that takes a date (your birthday) 
// and a year, and returns the day of the week for that date in that year. 

function whensYourParty(date, year) {
  // Find the day of the year for your birthday
}

whensYourParty(bday, 2022)

// Stretch Goal: Return an array listing all 
// the days when your birthday occured since 
// you were born. 



const nums = [5555, 888, 77, 2222, 1111, 3333]
nums.sort((a,b) => a - b)

console.log('<><><><><><><>')
console.log(nums)
