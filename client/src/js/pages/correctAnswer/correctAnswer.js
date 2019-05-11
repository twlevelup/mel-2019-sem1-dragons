const BasePage = require('watch-framework').BasePage;
const correct = require('../../../images/correctanswerImage.png');


class correctAnswer extends BasePage {

  template = require('./correctAnswer.hbs');

  pageWillLoad() {
    this.correct = correct;
  }

  pageDidLoad() {
    this.timerCheck(this);
  }

  timerCheck(self) {
    var that = self;
    var counter = 3;
    
    var timer = setInterval(function () {
      counter -= 1;
      if (counter === 0) {
        clearInterval(timer);

        that.navigate("shapeGame2");
        
        
      }

      if (counter >= 0) {
        var item = document.getElementById("spike-text");
        item.innerHTML = counter;
      }

    }, 1000);
  }

  topButtonEventHold() {
    this.navigate('shapeintropage');
  }

}

module.exports = correctAnswer;
