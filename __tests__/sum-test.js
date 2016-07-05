jest.unmock('../src/sum'); // unmock to use the actual implementation of sum

describe('sum', () => {
    it('adds 100 + 1 to equal 101', () => {
        const sum = require('../src/sum');
        expect(sum(100, 1)).toBe(101);
    });
});

