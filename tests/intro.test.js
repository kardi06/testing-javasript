import { describe,test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe('max', () =>{
    it('should return the fitst argument if it is greater', () => {
        // AAA => Arrange, Act, Assert
        //Arrange -> contohnya seperti 'Turn On the TV'
        const a = 2;
        const b = 1;
        //ACT -> contohnya seperti 'Press the power button'
        const result = max(a, b);
        //Assert -> contohnya seperti 'Verify TV is Off q
        expect(result).toBe(2);

        // untuk lebih ringkasnya , coding hanya 1 line
        // expect(max(2, 1)).toBe(2);
    });

    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2);
    });

    it('should return the first argument if it is equal', () => {
        expect(max(1, 1)).toBe(1);
    })
})

describe('fizzbuzz', () => {
    it('should return "Fizz" if n is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('should return "Buzz" if n is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    it('should return "FizzBuzz" if n is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('should return n as a string if n is not divisible by 3 or 5', () => {
        expect(fizzBuzz(7)).toBe('7');
    });
});