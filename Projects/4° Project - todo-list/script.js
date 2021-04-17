function setDisplayList(status) {
  const display = document.querySelector('#displayList');
  const listStorage = JSON.parse(localStorage.getItem('myList'));
  const listAsks = document.querySelectorAll('li');
  switch (status) {
    case 'clear':
      display.style.display = 'none';
      break;
    case 'add':
      display.style.display = 'flex';
      break;
    case 'delete':
      if (listAsks.length > 0) display.style.display = 'flex';
      else display.style.display = 'none';
      break;
    default:
      if (listStorage === null) {
        if (listAsks.length > 0) display.style.display = 'flex';
        else display.style.display = 'none';
      } else if (listStorage.length > 0 || listAsks.length > 0) display.style.display = 'flex';
        else display.style.display = 'none';
  }
}

function selectedItem(elementLi) {
  elementLi.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('li');
    for (let item = 0; item < listItem.length; item += 1) {
      listItem[item].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

function taskCompleted(elementLi) {
  elementLi.addEventListener('dblclick', function () {
    if (elementLi.className === '') {
      elementLi.className = 'completed';
    } else {
      elementLi.className = '';
    }
  });
}

function clearList() {
  const taskList = document.querySelector('#lista-tarefas');
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.lastChild);
  }
  setDisplayList('clear');
}

function taskAdd() {
  const listTask = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = input.value;
  listTask.appendChild(li);
  input.value = '';
  selectedItem(li);
  taskCompleted(li);
  setDisplayList('add');
}

function removeElementSelected() {
  const elementsLi = document.querySelectorAll('li');
  const taskList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < elementsLi.length; index += 1) {
    if (elementsLi[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      taskList.removeChild(elementsLi[index]);
    }
  }
  setDisplayList('delete');
}

function removeElementsCompleted() {
  const taskListCompleted = document.querySelectorAll('.completed');
  const taskList = document.querySelector('#lista-tarefas');
  for (let index = 0; index < taskListCompleted.length; index += 1) {
    taskList.removeChild(taskListCompleted[index]);
  }
  setDisplayList('delete');
}

function upTaskSelected() {
  const taskList = document.querySelector('#lista-tarefas');
  const elementsLi = document.querySelectorAll('li');
  for (let index = 0; index < elementsLi.length; index += 1) {
    if ((elementsLi[index].style.backgroundColor === 'rgb(128, 128, 128)') && (elementsLi[index] !== taskList.firstChild)) {
      const liAux = {
        text: elementsLi[index].previousElementSibling.innerText,
        class: elementsLi[index].previousElementSibling.className,
      };
      elementsLi[index].previousElementSibling.innerText = elementsLi[index].innerText;
      elementsLi[index].previousElementSibling.className = elementsLi[index].className;
      elementsLi[index].innerText = liAux.text;
      elementsLi[index].className = liAux.class;
      elementsLi[index].previousElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
      elementsLi[index].style.backgroundColor = '';
      break;
    }
  }
}

function downTaskSelected() {
  const taskList = document.querySelector('#lista-tarefas');
  const elementsLi = document.querySelectorAll('li');
  for (let index = 0; index < elementsLi.length; index += 1) {
    if ((elementsLi[index].style.backgroundColor === 'rgb(128, 128, 128)') && (elementsLi[index] !== taskList.lastChild)) {
      const liAux = {
        text: elementsLi[index].nextElementSibling.innerText,
        class: elementsLi[index].nextElementSibling.className,
      };
      elementsLi[index].nextElementSibling.innerText = elementsLi[index].innerText;
      elementsLi[index].nextElementSibling.className = elementsLi[index].className;
      elementsLi[index].innerText = liAux.text;
      elementsLi[index].className = liAux.class;
      elementsLi[index].nextElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';
      elementsLi[index].style.backgroundColor = '';
      break;
    }
  }
}

function itemList(text, classe, color, pos) {
  const item = {};
  item.innerText = text;
  item.class = classe;
  item.backgroundColor = color;
  item.position = pos;
  return item;
}

function salveList() {
  const vectorList = [];
  const taskList = document.querySelectorAll('li');
  for (let index = 0; index < taskList.length; index += 1) {
    vectorList.push(itemList(
      taskList[index].innerText,
      taskList[index].className,
      taskList[index].style.backgroundColor,
      index));
  }
  localStorage.setItem('myList', JSON.stringify(vectorList));
}

function loadList() {
  const vectorList = JSON.parse(localStorage.getItem('myList'));
  const taskList = document.querySelector('#lista-tarefas');
  if (vectorList !== null) {
    for (let index = 0; index < vectorList.length; index += 1) {
      const li = document.createElement('li');
      li.innerText = vectorList[index].innerText;
      li.className = vectorList[index].class;
      li.style.backgroundColor = vectorList[index].backgroundColor;
      taskList.appendChild(li);
      selectedItem(li);
      taskCompleted(li);
    }
  }
  setDisplayList('start');
}

function createEvents() {
  const btnAdd = document.querySelector('#criar-tarefa');
  btnAdd.addEventListener('click', taskAdd);
  const btnDownload = document.querySelector('#downloadList');
  btnDownload.addEventListener('click', loadList);
  const btnRemoveSelected = document.querySelector('#remover-selecionado');
  btnRemoveSelected.addEventListener('click', removeElementSelected);
  const btnUp = document.querySelector('#mover-cima');
  btnUp.addEventListener('click', upTaskSelected);
  const btnDown = document.querySelector('#mover-baixo');
  btnDown.addEventListener('click', downTaskSelected);
  const btnClearCompleted = document.querySelector('#remover-finalizados');
  btnClearCompleted.addEventListener('click', removeElementsCompleted);
  const btnClear = document.querySelector('#apaga-tudo');
  btnClear.addEventListener('click', clearList);
  const btnSalvar = document.querySelector('#salvar-tarefas');
  btnSalvar.addEventListener('click', salveList);
}

window.onload = function () {
  loadList();
  createEvents();
};
