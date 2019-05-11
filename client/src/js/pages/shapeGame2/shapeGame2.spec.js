const ShapeGame = require('./shapeGame2');

describe('#rightButtonEvent', () => {
    it('goes to correct page', () => {
      const page = new ShapeGame();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('correctAnswer');
    });
  });

  describe('#renderLeftShape', () => {
    it('should render the LEFT shapes to screen', () => {
      const page = new ShapeGame();
      expect(page.render()).toContain("<img id=\"leftImage\"");
    });
  });