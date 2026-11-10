
    // Завдання 1

    const firstName = "Олексій"; 
    const nameList = document.getElementById('name-list');

    for (const char of firstName) {
      const li = document.createElement('li');
      li.textContent = char;
      li.addEventListener('mouseenter', () => {
        alert(char);
      });

      nameList.appendChild(li);
    }

    // Завдання 2
    
    const startBtn = document.getElementById('start-input-btn');
    const namesOutput = document.getElementById('names-output');

    startBtn.addEventListener('click', () => {
      while (true) {
        const input = prompt("Введіть прізвище та ім'я (або натисніть 'Скасувати' для виходу):");
        if (input === null) {
          break;
        }
        if (input.trim() === "") {
          continue;
        }

        const li = document.createElement('li');
        li.textContent = input;
        namesOutput.appendChild(li);
      }
    });

    
    // Завдання 3
    
    const lastName = "Дуда";
    const toggleBtn = document.getElementById('toggle-blocks-btn');
    const lettersContainer = document.getElementById('letters');

    toggleBtn.addEventListener('click', () => {
      if (lettersContainer.children.length > 0) {
        lettersContainer.innerHTML = '';
        toggleBtn.textContent = 'Показати блоки';
      } else {
        for (const char of lastName) {
          toggleBtn.textContent = 'Сховати блоки';
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