const correctAnswer = require('./correctAnswer');

describe('.spike', () => {
    it('Should have a timer div', () => {
        const page = new correctAnswer();
        expect(page.render()).toContain("<div class=\"spike\"");
    })
})
