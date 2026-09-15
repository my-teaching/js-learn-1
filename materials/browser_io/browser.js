'use strict';

alert('Начинаем небольшой эксперимент с вводом и выводом.');

const name = prompt('Как вас зовут?');

if (name === null) {
  alert('Ввод имени отменён.');
} else {
  alert(`Привет, ${name}!`);
}

const priceInput = prompt('Введите цену одного товара:');
const quantityInput = prompt('Введите количество товара:');

if (priceInput === null || quantityInput === null) {
  alert('Расчёт отменён.');
} else {
  const price = Number(priceInput);
  const quantity = Number(quantityInput);

  if (Number.isNaN(price) || Number.isNaN(quantity)) {
    alert('Ошибка: цена и количество должны быть числами.');
  } else {
    const total = price * quantity;
    const showResult = confirm('Показать рассчитанную стоимость?');

    if (showResult) {
      alert(`Стоимость заказа: ${total}`);
    }

    console.log({ price, quantity, total });
  }
}
