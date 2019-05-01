const wrongAnswer = require('./wrongAnswer');

describe('.spike', () => {
    it('Should have a timer div', () => {
        const page = new wrongAnswer();
        expect(page.render()).toContain("<div class=\"spike\"");
    })
})
