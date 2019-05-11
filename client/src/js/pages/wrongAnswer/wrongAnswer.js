const BasePage = require('watch-framework').BasePage;
const wrong = require('../../../images/wrong.png');


class wrongAnswer extends BasePage {

  template = require('./wrongAnswer.hbs');

  pageWillLoad() {
    this.wrong = wrong;
  }

  pageDidLoad() {
    this.timerCheck();
  }

  timerCheck() {
    var counter = 5;
    var timer = setInterval(function () {
      counter -= 1;
      if (counter === 0) {
        clearInterval(timer);
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

module.exports = wrongAnswer;
