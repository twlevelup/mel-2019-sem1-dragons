const BasePage = require('watch-framework').BasePage;
const centerShape = require('../../../images/GameTwo_WINNING.png');
const leftShape = require('../../../images/TRIANGLE.png');
const rightShape = require('../../../images/SQUARE.png');
const bottomShape = require('../../../images/CIRCLE.png');

class ShapeGame extends BasePage {
  template = require('./shapeGame2.hbs');

  pageWillLoad() {
    this.draw();
  }

  draw() {
    this.center = centerShape;
    this.left = rightShape;
    this.right = bottomShape;
    this.bottom = leftShape; 
  }
    
  rightButtonEvent() {
      this.navigate('correctAnswer');
  }

  leftButtonEvent() {
      this.navigate('wrongAnswer');
  }

  topButtonEventHold() {
      this.navigate('shapeIntroPage');
    }
}

module.exports = ShapeGame;