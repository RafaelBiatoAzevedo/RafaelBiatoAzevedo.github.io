const home = '<div class="homeHeader-container">'
  +'<h2>Rafael Azevedo</h2>'
  +'<h4>Estudante de desenvolvimento Web Full Stack na Trybe</h4>'
+'</div>'
+'<h3>Projetos Particulares:</h3>'
+'<div class="my-projects">'
  +'<a class="link-project" href="https://rafaelbiatoazevedo.github.io/SiteBrothers/" target="blank">'
    +'<img src="./imagens/logo-brothers.png" alt="logo-brothers" width="150px"/>'
  +'</a>'
  +'<a class="link-project" href="" target="blank">'
    +'<img src="./imagens/logoRafaExpressWhite.png" alt="logo-rafaexpress" width="330px"/>'
  +'</a>'
+'</div>'
+'<h3>Projetos na Trybe:</h3>';

const formation = '<h2>Formação</h2>'
+'<p class="text-principal"><strong>Trybe</strong><br>Desenvolvimento Web Full Stack 1° Semestre<br>Situação: Cursando</p>'
+'<p class="text-principal"><strong>Pontifícia Universidade Católica (PUC-Campinas)</strong><br>Análise de Sistemas 7° semestre<br>Situação: trancado desde 2009</p>';


const contacts = '<h2>Contato</h2>'
+'<p class="text-principal">'
  +'<strong>Endereço:</strong> Rua Cleonice Ap. Cruz Thielle, 350 - Jd. Alvorada<br>Cep: 13841-077, Mogi-Guaçu - SP'
+'</p>'
+'<p class="text-principal"><strong>Cel/Whats:</strong> (19) 997426983</p>'
+'<p class="text-principal"><strong>Email:</strong> rafaelazevedo321@gmail.com</p>'
+'<div class="links-container">'
  +'<a class="link" href="https://www.linkedin.com/in/rafael-azevedo-530889195/" target="blank"><img src="./imagens/logo_linke.png" alt="logo-linke" width="50px"/></a>'
  +'<a class="link" href="https://github.com/RafaelBiatoAzevedo" target="blank"><img src="./imagens/logo_github.png" alt="logo-gihub" width="60px"/></a>'
  +'<a href="https://www.instagram.com/rafael_azevedo_55/" target="blank"><img src="./imagens/logo_insta.png" alt="logo-insta" width="50px"/></a>'
+'</div>';


const showInformations = (evt) => {
  const { id } = evt.target;
  const mainContainer = document.querySelector('#centerContent');
  mainContainer.innerHTML = '';
  switch (id) {
    case 'spanHome':
      mainContainer.innerHTML = home;
      break;
    case 'spanFormation':
      mainContainer.innerHTML = formation;
      break;
    case 'spanCourses':
      break;
    case 'spanExperiences':
      break;
    case 'spanAbout':
      break;
    case 'spanContact':
      mainContainer.innerHTML = contacts;
      break;
    default:
  }
};

const createEvents = () => {
  const home = document.querySelector('#spanHome');
  home.addEventListener('click', showInformations);
  const formation = document.querySelector('#spanFormation');
  formation.addEventListener('click', showInformations)
  const courses = document.querySelector('#spanCourses');
  courses.addEventListener('click', showInformations)
  const experiences = document.querySelector('#spanExperiences');
  experiences.addEventListener('click', showInformations)
  const about = document.querySelector('#spanAbout');
  about.addEventListener('click', showInformations)
  const contact = document.querySelector('#spanContact');
  contact.addEventListener('click', showInformations)
};

window.onload = () => {
  createEvents();
};