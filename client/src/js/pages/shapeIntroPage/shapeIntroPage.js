const BasePage = require('watch-framework').BasePage;

class ShapeIntroPage extends BasePage {
    template = require('./shapeIntroPage.hbs');

    faceButtonEvent() {
        this.navigate('shapeGame');
    }
}

module.exports = ShapeIntroPage;
