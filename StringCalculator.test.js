const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for empty string', () => {
        expect(calculator.add('')).toBe(0);
    });

    test('should return number for single number', () => {
        expect(calculator.add('1')).toBe(1);
    });

    test('should return sum for two numbers', () => {
        expect(calculator.add('1,5')).toBe(6);
    });

    test('should handle multiple numbers', () => {
        expect(calculator.add('1,2,3,4,5')).toBe(15);
    });

});