function generateRgbColor() {
  let number;
  let rgbColor = '';
  for (let index = 1; index <= 3; index += 1) {
    number = Math.floor(Math.random() * 256);
    if (index === 1) {
      rgbColor = `(${number}`;
    } else if (index === 2) {
      rgbColor += `, ${number}`;
    } else {
      rgbColor += `, ${number})`;
    }
  }
  return rgbColor;
}

function colectionColors() {
  const listColors = document.querySelectorAll('.ball');
  const rgb = document.querySelector('#rgb-color');
  const number = Math.floor(Math.random() * 7);
  for (let index = 0; index < listColors.length; index += 1) {
    if (index === number) {
      listColors[index].style.backgroundColor = `rgb${rgb.innerText}`;
    } else {
      listColors[index].style.backgroundColor = `rgb${generateRgbColor()}`;
    }
  }
}

function creactEventColors() {
  const listColors = document.querySelectorAll('.ball');
  const rgb = document.querySelector('#rgb-color');
  const answer = document.querySelector('#answer');
  const span = document.querySelector('span');
  for (let index = 0; index < listColors.length; index += 1) {
    listColors[index].addEventListener('click', function (event) {
      if (event.target.style.backgroundColor === `rgb${rgb.innerText}`) {
        answer.innerText = 'Acertou!';
        span.innerText = Number(span.innerText) + 3;
        reset();
      } else {
        answer.innerText = 'Errou! Tente novamente!';
        span.innerText = Number(span.innerText) - 1;
      }
    });
  }
}

function reset() {
  document.querySelector('#rgb-color').innerText = generateRgbColor();
  colectionColors();
  document.querySelector('#answer').innerText = 'Escolha uma cor';
}

window.onload = function () {
  document.querySelector('#rgb-color').innerText = generateRgbColor();
  colectionColors();
  creactEventColors();
  document.querySelector('#reset-game').addEventListener('click', reset);
};
