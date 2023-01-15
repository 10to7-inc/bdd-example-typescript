import assert from "assert";

import { Given, When, Then } from "@cucumber/cucumber";
import { sum } from "../../src/calculator";

interface MyWorld {
  firstNumber: number;
  secondNumber: number,
  result: number
}

Given('I have the number {int}', function (this: MyWorld, firstNumber: number) {
    this.firstNumber = firstNumber;
});
       
When('I add {int}', function (this: MyWorld, secondNumber: number) {
    this.secondNumber = secondNumber;
});
       
Then('I should have {int}', function (this: MyWorld, expectedResult: number) {
    assert.equal(sum(this.firstNumber, this.secondNumber), expectedResult);
});