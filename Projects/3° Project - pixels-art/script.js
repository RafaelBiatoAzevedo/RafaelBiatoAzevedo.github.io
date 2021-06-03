function createColor() {
  const colors = ['red', 'yellow', 'magenta', 'blue', 'green', 'pink', 'grey', 'purple', 'orange', 'brown'];
  const number = Math.ceil(Math.random() * 9);
  const color = document.createElement('div');
  color.className = `color ${colors[number]}`;
  return color;
}

function createPalette() {
  const colorPalette = document.querySelector('#color-palette');
  const blackInsert = createColor();
  blackInsert.className = 'color black selected';
  colorPalette.appendChild(blackInsert);
  for (let index = 1; index <= 4; index += 1) {
    let color = createColor();
    while (document.querySelectorAll(`.color.${color.classList[1]}`).length > 0) {
      color = createColor();
    }
    colorPalette.appendChild(color);
  }
}

function btnEvents() {
  const btnPaint = document.querySelector('#paint-pixel');
  const btnErase = document.querySelector('#erase-pixel');
  const btnClear = document.querySelector('#clear-board');
  btnPaint.addEventListener('click', function () {
    console.log(btnPaint.classList);
    btnErase.classList.remove("btn-selected");
    btnPaint.classList.add("btn-selected");
  });
  btnErase.addEventListener('click', function () {
    btnPaint.classList.remove("btn-selected");
    btnErase.classList.add("btn-selected");
  });
  btnClear.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

function selectedColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    const colorsPalette = document.querySelectorAll('.color');
    for (let index = 0; index < colorsPalette.length; index += 1) {
      if (event.target === colorsPalette[index]) {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        event.target.classList.add('selected');
      }
    }
  });
}

function paintPixel() {
  const btnPaint = document.querySelector('#paint-pixel');
  const btnErase = document.querySelector('#erase-pixel');
  document.querySelector('#pixel-board')
    .addEventListener('click', function (event) {
    if (btnPaint.className === "button btn-paint btn-selected") {
      if (event.target.className === "pixel") {
        const colorSelected = document.querySelector('.selected');
        event.target.style.backgroundColor = colorSelected.classList[1];
      }
    } else {
      event.target.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}

function clearDiv() {
  const pixelBoard = document.querySelector('#pixel-board');
  const linesBoard = document.querySelectorAll('.line-board');
  for (let index = 0; index < linesBoard.length; index += 1) {
    pixelBoard.removeChild(linesBoard[index]);
  }
}

function checkInput() {
  const inputBoardSize = document.querySelector('#board-size');
  let result = 0;
  if (inputBoardSize.value < 5) {
    result = 5;
  } else if (inputBoardSize.value > 50) {
    result = 50;
  } else {
    result = inputBoardSize.value;
  }
  return result;
}

function creatLineBoard(inputBoardSize) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 1; index <= inputBoardSize; index += 1) {
    const lineBoard = document.createElement('div');
    lineBoard.className = 'line-board';
    pixelBoard.appendChild(lineBoard);
  }
}

function creatPixels(inputBoardSize) {
  const newLines = document.querySelectorAll('.line-board');
  for (let line = 0; line < newLines.length; line += 1) {
    for (let count = 1; count <= inputBoardSize; count += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      newLines[line].appendChild(pixel);
    }
  }
}

function creatBoard() {
  document.querySelector('#generate-board')
    .addEventListener('click', function () {
    const inputBoardSize = document.querySelector('#board-size');
    if (inputBoardSize.value < 5 || inputBoardSize.value > 50) {
      alert('Board inválido! ( min 5 - max 50 )');
    } else {
      inputBoardSize.value = checkInput();
      clearDiv();
      creatLineBoard(inputBoardSize.value);
      creatPixels(inputBoardSize.value);
    }
  });
}

window.onload = function () {
  createPalette();
  btnEvents();
  selectedColor();
  paintPixel();
  creatBoard();
};
