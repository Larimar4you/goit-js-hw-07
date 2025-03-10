/* #завдання */
/*
HTML містить список категорій ul#categories.

відправлення форми form.login-form повинна відбуватися за подією submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 
'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, 
де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. 
Для доступу до елементів форми використовуй властивість elements.
При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

`use strict`;

const form = document.querySelector(".login-form");

if (form) {
  // Проверяем, существует ли форма
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if (emailVal === "" || passwordVal === "") {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    const formData = {
      email: emailVal,
      password: passwordVal,
    };

    console.log("Данные формы:", formData);
    form.reset();
  });
} else {
  console.error("Форма с классом .login-form не найдена.");
}
