'use strict'
console.log('script loaded');
var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];
var theTable = document.getElementById('sales-table');

function CookieStand(name, min, max, avg, id) {
  this.name = name;
  this.avg = avg;
  this.min = min;
  this.max = max;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.is = id;
  this.calcCustomerEachHour = function() {
  this.calcUsuctomerEachHour.push(random(this.min, this.max));

}
};
getRandom () = 
  randomNum = Math.floor (Math.random() * (this.max - this.min))+this.min;
  var totalCookies = Math.floor (randomNum * this.avg);
  return totalCookies;

var pike = {
  name: "1st and Pike",
  avg : 6.3,
  min : 23,
  max : 65,
  customerTotal : 0}
  
var seaTac = {
    name: "Seatac Airport",
    avg : 1.2,
    min : 3,
    max : 24,
    customerTotal : 0}

var seattle = {
      name: "Seattle Center",
      avg : 3.7,
      min : 11,
      max : 38,
      customerTotal : 0}
    
 var hill = {
        name: "Capitol Hill",
        avg : 2.3,
        min : 20,
        max : 38,
        customerTotal : 0}
       
 var alki = {
          name: "Alki",
          avg : 4.6,
          min : 2,
          max : 16,
          customerTotal : 0
 }
 getRandom(alki);
