'use strict';

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });

  try {
    const name = await rl.question('Введите имя: ');
    console.log(`Привет, ${name}!`);

    const price = Number(await rl.question('Цена одного товара: '));
    const quantity = Number(await rl.question('Количество товара: '));

    if (Number.isNaN(price) || Number.isNaN(quantity)) {
      console.log('Ошибка: цена и количество должны быть числами.');
      return;
    }

    const total = price * quantity;
    console.log(`Стоимость заказа: ${total}`);
  } finally {
    rl.close();
  }
}

main();
