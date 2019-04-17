const ShapeIntroPage = require('./shapeIntroPage');

describe('The Shape Intro Page', () => {
    let watchFace;
    beforeEach(() => {
        document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
        watchFace = document.getElementById('watch-face');
    });

    describe('#render', () => {
        it('should contain the correct text', () => {
            const page = new ShapeIntroPage();
            expect(page.render()).toContain('Welcome to build that shape');
        });
    });
    describe('#faceButtonEvent', () => {
        it('should navigate to the first game', () => {
            expect(page.render()).toContain(button);
        })
    })
});