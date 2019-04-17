const ShapeGame = require('./shapeGame');

describe('#canvasExists', () => {
    it('should show canvas outline', () => {
        const page = new ShapeGame();
        expect(page.render()).toContain("<canvas id=\"canvas\"></canvas>");
    })
})