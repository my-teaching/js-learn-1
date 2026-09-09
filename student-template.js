'use strict';

// Практическая работа №1
// Заполните только участки TODO.
// Названия функций и module.exports внизу файла не изменяйте:
// они нужны преподавателю для автоматической проверки.

// 1. Стоимость заказа
// Вернуть общую стоимость: цена одного товара * количество.
function calculateOrderCost(price, quantity) {
  // TODO
}

// 2. Площадь прямоугольника
// Вернуть площадь прямоугольника.
function rectangleArea(width, height) {
  // TODO
}

// 3. Скидка
// Вернуть итоговую цену после применения скидки в процентах.
// Например: calculateDiscount(1000, 10) -> 900
function calculateDiscount(price, discountPercent) {
  // TODO
}

// 4. Минуты -> часы и минуты
// Вернуть строку строго в формате: "2 ч 5 мин"
// Например: minutesToHours(125) -> "2 ч 5 мин"
function minutesToHours(totalMinutes) {
  // TODO
}

// 5. Целая часть и остаток от деления
// Вернуть строку строго в формате: "2;1"
// Сначала целая часть, затем остаток через точку с запятой.
// Например: divisionResult(5, 2) -> "2;1"
function divisionResult(dividend, divisor) {
  // TODO
}

module.exports = {
  calculateOrderCost,
  rectangleArea,
  calculateDiscount,
  minutesToHours,
  divisionResult,
};
