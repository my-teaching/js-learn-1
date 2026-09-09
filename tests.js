'use strict';

const assert = require('node:assert/strict');
const student = require('./student-template.js');

function test(name, fn) {
  try {
    fn();
    console.log(`${name}`);
  } catch (error) {
    console.error(`${name}`);
    console.error(`${error.message}`);
    process.exitCode = 1;
  }
}

test('1. Стоимость заказа', () => {
  assert.equal(student.calculateOrderCost(250, 3), 750);
  assert.equal(student.calculateOrderCost(99.5, 2), 199);
  assert.equal(student.calculateOrderCost(0, 10), 0);
});

test('2. Площадь прямоугольника', () => {
  assert.equal(student.rectangleArea(5, 8), 40);
  assert.equal(student.rectangleArea(2.5, 4), 10);
  assert.equal(student.rectangleArea(0, 8), 0);
});

test('3. Скидка', () => {
  assert.equal(student.calculateDiscount(1000, 10), 900);
  assert.equal(student.calculateDiscount(500, 20), 400);
  assert.equal(student.calculateDiscount(250, 0), 250);
});

test('4. Минуты в часы и минуты', () => {
  assert.equal(student.minutesToHours(125), '2 ч 5 мин');
  assert.equal(student.minutesToHours(60), '1 ч 0 мин');
  assert.equal(student.minutesToHours(45), '0 ч 45 мин');
});

test('5. Целая часть и остаток', () => {
  assert.equal(student.divisionResult(5, 2), '2;1');
  assert.equal(student.divisionResult(10, 3), '3;1');
  assert.equal(student.divisionResult(20, 5), '4;0');
});

if (!process.exitCode) {
  console.log('\nВсе тесты пройдены.');
}
