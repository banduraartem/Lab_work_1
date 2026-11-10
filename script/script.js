function checkName(str) {

  const regex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ\s\-]+$/;
  const firstChar = str[0];
  if(firstChar === firstChar.toUpperCase() && firstChar !== firstChar.toLowerCase()){ // перевірка
  return regex.test(str.trim());
  }
}


const createNameBtn = document.getElementById('create-name-btn');
const nameList = document.getElementById('name-list');

createNameBtn.addEventListener('click', () => {
  const firstName = prompt("Введіть ваше ім'я:");

  if (!firstName || !firstName.trim()) {
    alert("Поле не може бути порожнім!");
    return;
  }

  if (!checkName(firstName)) {
    alert("Помилка! Ім'я не повинно містити цифр або спеціальних символів.");
    return;
  }

  nameList.innerHTML = '';
  for (const char of firstName.trim()) {
    const li = document.createElement('li');
    li.textContent = char;
    li.addEventListener('mouseenter', () => {
      alert(char);
    });
    nameList.appendChild(li);
  }
});


const startBtn = document.getElementById('start-input-btn');
const namesOutput = document.getElementById('names-output');

startBtn.addEventListener('click', () => {
  while (true) {
    const input = prompt("Введіть прізвище та ім'я (або натисніть 'Скасувати' для виходу):");
    
    // Якщо натиснуто "Скасувати"
    if (input === null) {
      break;
    }
    
    // Якщо введено порожній рядок або лише пробіли
    if (input.trim() === "") {
      alert("Ви нічого не ввели. Спробуйте ще раз.");
      continue;
    }

    // Перевірка на наявність цифр (прізвище та ім'я не повинні містити цифр)
    if (!checkName(input)) {
      alert("Помилка! Прізвище та ім'я не повинні містити цифр.");
      continue;
    }

    const li = document.createElement('li');
    li.textContent = input.trim();
    namesOutput.appendChild(li);
  }
});

const toggleBtn = document.getElementById('toggle-blocks-btn');
const lettersContainer = document.getElementById('letters');

toggleBtn.addEventListener('click', () => {
  if (lettersContainer.children.length > 0) {
    lettersContainer.innerHTML = '';
  } else {
    const lastName = prompt("Введіть ваше прізвище:");
    
    if (!lastName || !lastName.trim()) {
      alert("Поле не може бути порожнім!");
      return;
    }

    if (!checkName(lastName)) {
      alert("Помилка! Прізвище не повинно містити цифр.");
      return;
    }

    for (const char of lastName.trim()) {
      const div = document.createElement('div');
      div.classList.add('letter-block');
      div.textContent = char;
        
      div.addEventListener('mouseenter', () => {
        alert(`Це літера [ ${char} ]`);
      });

      lettersContainer.appendChild(div);
    }
  }
});
