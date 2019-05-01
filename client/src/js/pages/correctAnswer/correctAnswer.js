const BasePage = require('watch-framework').BasePage;
const correct = require('../../../images/correctanswerImage.png');


class correctAnswer extends BasePage {

template = require('./correctAnswer.hbs');

  pageWillLoad() {

this.correct = correct;

  }

  pageDidLoad() {


  this.timerCheck();




  }








timerCheck() {



    var counter = 5;

    var timer =  setInterval(function() {

       counter -= 1;

      if (counter === 0) {

          clearInterval(timer);

      }

      if (counter >= 0) {

          var item  = document.getElementById("spike-text");
          item.innerHTML = counter;

      }

    },1000);




}




}


module.exports = correctAnswer;
