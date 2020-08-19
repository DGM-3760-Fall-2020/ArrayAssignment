import { sum, product } from "../src/math.js";

describe("Math Functions", () => {
    it("should add 2 numbers", () => {
        expect(sum( 1, 3 )).toBe(4);
    });
    //Then
    it("should multiply numbers", () => {
        expect(product( 3, 5 )).toBe(15);
    });
});