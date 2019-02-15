'use strict'
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

var pikeUl = document.getElementById('pike');
var seaTacUl  = document.getElementById('airport');
var seattleUl = document.getElementById('seattle');
var hill = document.getElementById('capHill');
var alki = document.getElementById('beach');

var pike = {
  name: "1st and Pike",
 pikeAvg = 6.3,
 custPh: function randFunction(){
   var x = Math.floor((Math.random()*42)+23);
   return x;
 },
  /*render: function (){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} ${this.custPh()*$this.pikeAvg} customers per hour.`;
      pikeUl.appendChild(liEl);
    }

  }
  
};
pike.render();

