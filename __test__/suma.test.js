const sum = require('../utils/suma');

test("suma 1 mas 2", () => {
    expect(sum(1,2)).toBe(3);

})

test("suma 2 mas -3", () => {
    expect(sum(2,-3)).toBe(-1);
})

test("suma -2 mas -3", () => {
    expect(sum(-2,-3)).toBe(-5);
})