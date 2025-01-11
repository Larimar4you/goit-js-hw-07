/* #завдання */
/*
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка 
елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

*/
`use strict`;

const categoriesList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const title = category.firstElementChild.textContent;
  const itemsCount = category.lastElementChild.children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
