const ShapeIntroPage = require('./shapeIntroPage');
// const ShapeGame = require('../shapeGame/shapeGame');

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
    // xdescribe('#faceButtonEvent', () => {
    //     it('should navigate to the first game', () => {
    //         const props = {
    //             navigate: () => { },
    //         };
    //         const page = new ShapeGame(props);
    //         jest.spyOn(page, 'shapeGame');
    //         page.faceButtonEvent();
    //         expect(page.navigate).toBeCalledWith('shapeGame');
    //     })
    // })
});