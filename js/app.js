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

var pikeUl = document.getElementById('pike');
var seaTacUl = document.getElementById('airport');
var seattleUl = document.getElementById('seattle');
var hillUl = document.getElementById('capHill');
var alkiUl = document.getElementById('beach');



var pike = {
  name: "1st and Pike",
  avg : 6.3,
  min : 23,
  max : 65,
  customerTotal : 0,
  getRandom: function () {
    var randomNum = Math.floor (Math.random() * (this.max - this.min))+this.min;
    var totalCookies = Math.floor (randomNum * this.avg);
    return totalCookies;
  },

  render: function () {
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      this.customerTotal = this.getRandom();
      liEl.textContent = `${hours[i]} : ${this.customerTotal} cookies per hour.`;
      pikeUl.appendChild(liEl);
    }

  }
}
  pike.render ();


  var seaTac = {
    name: "Seatac Airport",
    avg : 1.2,
    min : 3,
    max : 24,
    customerTotal : 0,
    getRandom: function () {
      var randomNum = Math.floor (Math.random() * (this.max - this.min))+this.min;
      var totalCookies = Math.floor (randomNum * this.avg);
      return totalCookies;
    },
  
    render: function () {
      for (var i = 0; i < hours.length; i++){
        var liEl = document.createElement('li');
        this.customerTotal = this.getRandom();
        liEl.textContent = `${hours[i]} : ${this.customerTotal} cookies per hour.`;
        seaTacUl.appendChild(liEl);
      }
  
    }
  }
    seaTac.render ();

    var seattle = {
      name: "Seattle Center",
      avg : 3.7,
      min : 11,
      max : 38,
      customerTotal : 0,
      getRandom: function () {
        var randomNum = Math.floor (Math.random() * (this.max - this.min))+this.min;
        var totalCookies = Math.floor (randomNum * this.avg);
        return totalCookies;
      },
    
      render: function () {
        for (var i = 0; i < hours.length; i++){
          var liEl = document.createElement('li');
          this.customerTotal = this.getRandom();
          liEl.textContent = `${hours[i]} : ${this.customerTotal} cookies per hour.`;
          seattleUl.appendChild(liEl);
        }
    
      }
    }
      seattle.render ();

      var hill = {
        name: "Capitol Hill",
        avg : 2.3,
        min : 20,
        max : 38,
        customerTotal : 0,
        getRandom: function () {
          var randomNum = Math.floor (Math.random() * (this.max - this.min))+this.min;
          var totalCookies = Math.floor (randomNum * this.avg);
          return totalCookies;
        },
      
        render: function () {
          for (var i = 0; i < hours.length; i++){
            var liEl = document.createElement('li');
            this.customerTotal = this.getRandom();
            liEl.textContent = `${hours[i]} : ${this.customerTotal} cookies per hour.`;
            hillUl.appendChild(liEl);
          }
      
        }
      }
        hill.render ();


        var alki = {
          name: "Alki",
          avg : 4.6,
          min : 2,
          max : 16,
          customerTotal : 0,
          getRandom: function () {
            var randomNum = Math.floor (Math.random() * (this.max - this.min))+this.min;
            var totalCookies = Math.floor (randomNum * this.avg);
            return totalCookies;
          },
        
          render: function () {
            for (var i = 0; i < hours.length; i++){
              var liEl = document.createElement('li');
              this.customerTotal = this.getRandom();
              liEl.textContent = `${hours[i]} : ${this.customerTotal} cookies per hour.`;
              alkiUl.appendChild(liEl);
            }
        
          }
        }
          alki.render ();

