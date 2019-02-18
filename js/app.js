'use strict'
console.log('script loaded');

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
