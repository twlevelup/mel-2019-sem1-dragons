const ShapeGame = require('./shapeGame');

describe('#canvasExists', () => {
    it('should show canvas outline', () => {
        const page = new ShapeGame();
        expect(page.render()).toContain("<canvas id=\"canvas\"></canvas>");
    })
})


describe('#rightButtonEvent', () => {
    it('goes to correct page', () => {
      const page = new ShapeGame();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('correctAnswer');
    });
  });
