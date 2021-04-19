function showText() {
  const text = document.querySelector('#text-input');
  const paragraph = document.querySelector('#meme-text');
  paragraph.innerText = text.value;
}

function insertImage(evt) {
  if (this.files && this.files[0]) {
    let file = new FileReader();
    file.onload = (evt) => {
      const container = document.querySelector('#containerMeme');
      container.style.backgroundImage = `url(${evt.target.result})`;
    }
    file.readAsDataURL(this.files[0]);
  }
}

function memeInsert(evt) {
  const { id } = evt.target;
  const container = document.querySelector('#containerMeme');
  switch (id) {
    case 'meme-1':
      container.style.backgroundImage = `url('imgs/meme1.png')`;
      break;
    case 'meme-2':
      container.style.backgroundImage = `url('imgs/meme2.png')`;
      break;
    case 'meme-3':
      container.style.backgroundImage = `url('imgs/meme3.png')`;
      break;
    case 'meme-4':
      container.style.backgroundImage = `url('imgs/meme4.png')`;
      break;
    default:
      break;  
  }
}

function memeStyle(evt) {
  const container = document.querySelector('#containerMeme');
  const { id } = evt.target;
  switch (id) {
    case 'fire':
      container.className = 'container-meme fire';
      break;
    case 'water':
      container.className = 'container-meme water';
      break;
    case 'earth':
      container.className = 'container-meme earth';
      break;
  }
}

function alignVertical(evt) {
  const { value } = evt.target;
  const text = document.querySelector('#containerMeme');
  text.style.alignItems = value;
}

function alignHorizontal(evt) {
  const { value } = evt.target;
  const text = document.querySelector('#containerMeme');
  text.style.justifyContent = value;
}

function events() {
  document.querySelector('#text-input').addEventListener('keyup', showText);
  document.querySelector('#insertMeme').addEventListener('change', insertImage);
  document.querySelector('#verticalPosition').addEventListener('change', alignVertical);
  document.querySelector('#horizontalPosition').addEventListener('change', alignHorizontal);
  document.querySelector('#fire').addEventListener('click', memeStyle);
  document.querySelector('#water').addEventListener('click', memeStyle);
  document.querySelector('#earth').addEventListener('click', memeStyle);
  document.querySelector('#meme-1').addEventListener('click', memeInsert);
  document.querySelector('#meme-2').addEventListener('click', memeInsert);
  document.querySelector('#meme-3').addEventListener('click', memeInsert);
  document.querySelector('#meme-4').addEventListener('click', memeInsert);
}

window.onload = function () {
  events();
};
