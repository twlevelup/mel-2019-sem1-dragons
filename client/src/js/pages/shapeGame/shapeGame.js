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
            ctx.fillRect(0,0,150,75);

        }
    }
}

module.exports = ShapeGame;