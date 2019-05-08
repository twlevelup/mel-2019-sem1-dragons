const BasePage = require('watch-framework').BasePage;

class ShapeGame extends BasePage {
    template = require('./shapeGame.hbs');

    pageDidLoad() {
        this.draw();
    }

    draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(150,50,50,50);

        }
        var rightShape = document.getElementById('rightShape');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(150,50,50,50);

        }
    }



  rightButtonEvent() {
      this.navigate('correctAnswer');
  }

  leftButtonEvent() {
      this.navigate('wrongAnswer');
  }


}

module.exports = ShapeGame;
