const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.textContent;

    if (value === 'C') {
      currentInput = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = 'Error';
      }
    } else {
      if (currentInput === 'Error') currentInput = '';
      currentInput += value;
    }

    display.value = currentInput;
  });
});

document.addEventListener('keydown', (event) => {
  const allowedKeys = '0123456789+-*/.=';
  if (allowedKeys.includes(event.key)) {
    if (event.key === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else if (event.key === '.') {
      currentInput += '.';
    } else {
      currentInput += event.key;
    }
    display.value = currentInput;
  } else if (event.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (event.key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
    display.value = currentInput;
  }
});
