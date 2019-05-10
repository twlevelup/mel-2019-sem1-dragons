const BasePage = require('watch-framework').BasePage;
const centerShape = require('../../../images/GameOne_WINNING.png');
const leftShape = require('../../../images/TRIANGLE.png');
const rightShape = require('../../../images/SQUARE.png');
const bottomShape = require('../../../images/CIRCLE.png');

class ShapeGame extends BasePage {
  template = require('./shapeGame.hbs');

  pageWillLoad() {
    this.draw();
  }

  draw() {
    this.center = centerShape;
    this.left = leftShape;
    this.right = rightShape;
    this.bottom = bottomShape; 
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