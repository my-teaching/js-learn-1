'use strict';

// Типы данных, преобразования и базовая арифметика
// Файл предназначен для запуска через Node.js:

console.log('1. Базовые типы');

const numberValue = 42.5;
const stringValue = 'JavaScript';
const booleanValue = true;
const undefinedValue = undefined;
const nullValue = null;
const bigIntValue = 9007199254740993n;
const symbolValue = Symbol('id');

console.log(numberValue, '->', typeof numberValue);
console.log(stringValue, '->', typeof stringValue);
console.log(booleanValue, '->', typeof booleanValue);
console.log(undefinedValue, '->', typeof undefinedValue);
console.log(nullValue, '->', typeof nullValue, '(историческая особенность)');
console.log(bigIntValue, '->', typeof bigIntValue);
console.log(symbolValue, '->', typeof symbolValue);

console.log('\n2. Объекты, массивы и функции');

const user = { name: 'Alex', age: 18 };
const numbers = [1, 2, 3];
function sum(a, b) {
  return a + b;
}

console.log(typeof user);    // object
console.log(typeof numbers); // object
console.log(typeof sum);     // function

console.log('\n3. Преобразование в Number');

const numberSamples = [5, 5.5, '.555', '123', '.45', '.45w', 'true', true, false];
for (const value of numberSamples) {
  console.log(`Number(${JSON.stringify(value)}) ->`, Number(value));
}

console.log('\n4. Number, parseInt и parseFloat');

const textNumber = '123.45px';
console.log('Исходная строка:', textNumber);
console.log('Number(...)    ->', Number(textNumber));
console.log('parseInt(...)  ->', parseInt(textNumber));
console.log('parseFloat(...) ->', parseFloat(textNumber));

console.log('\n5. NaN');

const invalidNumber = Number('hello');
console.log(invalidNumber);                     // NaN
console.log(typeof invalidNumber);              // number
console.log(invalidNumber === NaN);             // false
console.log(Number.isNaN(invalidNumber));       // true
console.log(Number.isNaN('hello'));             // false
console.log(isNaN('hello'));                    // true, т.к. есть предварительное преобразование

console.log('\n6. Infinity');

console.log('5 / 0 =', 5 / 0);
console.log('-5 / 0 =', -5 / 0);
console.log('5 / Infinity =', 5 / Infinity);
console.log('Infinity / Infinity =', Infinity / Infinity);
console.log('0 / 0 =', 0 / 0);

console.log('\n7. Строки');

const language = 'JavaScript';
const ordinary = 'Одинарные кавычки';
const doubleQuoted = "Двойные кавычки";
const template = `Шаблонная строка: ${language}`;

console.log(ordinary);
console.log(doubleQuoted);
console.log(template);
console.log(`Длина слова ${language}:`, language.length);

console.log('\n8. Boolean: truthy / falsy');

const booleanSamples = [1, 0, -5, '', ' ', 'false', null, undefined, NaN, [], {}];
for (const value of booleanSamples) {
  console.log(value, '->', Boolean(value));
}

console.log('\n9. Арифметика Number & Number');

const n1 = 5;
const n2 = 2;

console.log('5 + 2 =', n1 + n2);
console.log('5 - 2 =', n1 - n2);
console.log('5 * 2 =', n1 * n2);
console.log('5 / 2 =', n1 / n2);
console.log('Math.trunc(5 / 2) =', Math.trunc(n1 / n2));
console.log('5 % 2 =', n1 % n2);
console.log('5 ** 2 =', n1 ** n2);

console.log('\n10. Number & String');

console.log('5 + "2" =', 5 + '2');
console.log('5 - "2" =', 5 - '2');
console.log('5 * "2" =', 5 * '2');
console.log('5 / "2" =', 5 / '2');
console.log('5 - "true" =', 5 - 'true');

console.log('\n11. Number & Boolean');

console.log('5 + true =', 5 + true);
console.log('5 - true =', 5 - true);
console.log('5 + false =', 5 + false);
console.log('5 * false =', 5 * false);

console.log('\n12. Явное преобразование');

const ageFromInput = '18';
const age = Number(ageFromInput);

console.log(ageFromInput, '->', typeof ageFromInput);
console.log(age, '->', typeof age);
console.log(String(500), '->', typeof String(500));
console.log(Boolean(1), '->', typeof Boolean(1));

console.log('\n13. Несколько особенностей JavaScript');

console.log('typeof null ->', typeof null);
console.log('typeof NaN ->', typeof NaN);
console.log('NaN === NaN ->', NaN === NaN);
console.log('"5" + 2 ->', '5' + 2);
console.log('"5" - 2 ->', '5' - 2);
console.log('Boolean("false") ->', Boolean('false'));
console.log('0.1 + 0.2 ->', 0.1 + 0.2);
