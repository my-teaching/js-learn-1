# Ввод и вывод в Node.js

В Node.js нет встроенных браузерных функций `prompt()`, `alert()` и `confirm()`.

Вывод обычно выполняют через:

```js
console.log('Сообщение');
```

Для интерактивного ввода из терминала можно использовать встроенный модуль `readline`. Современный удобный вариант — `readline/promises`.

## Пример

```js
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });

  const name = await rl.question('Введите имя: ');
  console.log(`Привет, ${name}!`);

  rl.close();
}

main();
```

Запуск:

```bash
node node-input.js
```

## Ввод числа

`rl.question()` возвращает строку. Если требуется число, его нужно преобразовать.

```js
const ageText = await rl.question('Возраст: ');
const age = Number(ageText);
```

## Пример: стоимость заказа

```js
const price = Number(await rl.question('Цена товара: '));
const quantity = Number(await rl.question('Количество: '));

if (Number.isNaN(price) || Number.isNaN(quantity)) {
  console.log('Ошибка ввода');
} else {
  console.log(`Стоимость заказа: ${price * quantity}`);
}
```

## Это не работа с файлами

Интерактивный ввод в терминале идёт через стандартный поток ввода — `stdin`. Файлы в Node.js читаются отдельным модулем `fs`; это другая тема.
