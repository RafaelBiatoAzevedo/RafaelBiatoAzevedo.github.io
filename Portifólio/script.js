const home = '<div class="homeHeader-container">'
  +'<h2>Rafael Azevedo</h2>'
  +'<h4>Full Stack Web development student at Trybe</h4>'
+'</div>'
+'<h3>My Projects</h3>'
+'<div class="my-projects">'
  +'<a class="link-project" href="https://rafaelbiatoazevedo.github.io/SiteBrothers/" target="_blank">'
    +'<img class="logoBrothers" src="./imagens/logo-brothers.png" alt="logo-brothers"/>'
  +'</a>'
  +'<a class="link-project" href="" target="_blank">'
    +'<img class="logoRafaexpress" src="./imagens/logoRafaExpressWhite.png" alt="logo-rafaexpress"/>'
  +'</a>'
+'</div>'
+'<h3>Trybe Projects</h3><br>'
+'<div class="container-project-trybe">'
  +'<select id="selectProjects" class="select-projects">'
  +'  <option>Choose project</option>'
  +'  <option value="lessons-learned">1° Project Lessons Learned</option>'
  +'  <option value="playground-functions">2° Project Playground Functions (only code)</option>'
  +'  <option value="pixels-art">3° Project Pixels Art</option>'
  +'  <option value="todo-list">4° Project Todo List</option>'
  +'  <option value="meme-generator">5° Project Meme Generator</option>'
  +'  <option value="color-guess">6° Project Color Guess</option>'
  +'  <option value="mistery-letter">7° Project Mistery Letter</option>'
  +'  <option value="facebook-signup">8° Project Facebook SignUp</option>'
  +'  <option value="zoo-functions">9° Project Zoo Functions (only code)</option>'
  +'  <option value="shopping-cart">10° Project Shopping Cart</option>'
  +'<select>'
  +'<a class="link-home-github" href="https://github.com/RafaelBiatoAzevedo/RafaelBiatoAzevedo.github.io/tree/main/Projects" target="_blank"><img class="link-logo-github" src="./imagens/logo_github.png" alt="logo-gihub"/></a>'
+'<div/>';

const formation = '<h2>Formation</h2>'
+'<div class="container-card">'
  +'<img class="img-pucIcon" src="./imagens/pucIcon.svg" alt="pucIcon"/>'
  +'<p class="text-principal">Análise de Sistemas 7° semestre<br>Situation: locked from 2009</p>'
+'<div>';

const courses = '<h2>Courses</h2>'
+'<div class="courses-container">'
  +'<div class="course">'
    +'<div class="container-icon-courses">'
      +'<img class="img-coursesIcon" src="./imagens/trybeIcon.png" alt="trybeIcon"/>'
    +'</div>'
      +'<div>'
      +'<h4>Full Stack Web Development</h4>'
      +'<p class="text-info-course">1 year<br>Studying</p>'
    +'</div>'
  +'</div>'
  +'<div class="course">'
    +'<div class="container-icon-courses">'
      +'<img class="img-coursesIcon" src="./imagens/pythonIcon.png" alt="pythonIcon"/>'
    +'</div>'
      +'<div>'
      +'<h4>Python</h4>'
      +'<p class="text-info-course">120 hours<br>concluded in 2020</p>'
    +'</div>'
  +'</div>'
  +'<div class="course">'
    +'<div class="container-icon-courses">'
      +'<img class="img-coursesIcon" src="./imagens/linuxIcon.ico" alt="linuxIcon"/>'
    +'</div>'
      +'<div>'
      +'<h4>Linux</h4>'
      +'<p class="text-info-course">40 hours<br>concluded in 2020</p>'
    +'</div>'
  +'</div>'
  +'<div class="course">'
    +'<div class="container-icon-courses">'
      +'<img class="img-coursesIcon" src="./imagens/javaIcon.jpg" alt="javaIcon"/>'
    +'</div>'
      +'<div>'
      +'<h4>Java</h4>'
      +'<p class="text-info-course">120 hours<br>concluded in 2018</p>'
    +'</div>'  
  +'</div>'
  +'<div class="course">'
    +'<div class="container-icon-courses">'
      +'<img class="img-coursesIcon iconLarge" src="./imagens/fiskIcon.svg" alt="fiskIcon"/>'
    +'</div>'
      +'<div>'
      +'<h4>Inglês</h4>'
      +'<p class="text-info-course">Advanced<br>concluded in 2008</p>'
    +'</div>'
  +'</div>'
  +'<div class="course">'
    +'<div class="container-icon-courses">'
      +'<img class="img-coursesIcon iconLarge" src="./imagens/microlinsIcon.png" alt="microlinsIcon"/>'
    +'</div>'
      +'<div>'
      +'<h4>Manutenção de computadores</h4>'
      +'<p class="text-info-course">160 hours<br>concluded in 2004</p>'
    +'</div>'
  +'</div>'
  +'<div class="course">'
    +'<div class="container-icon-courses">'
      +'<img class="img-coursesIcon iconLarge" src="./imagens/senai-logo.png" alt="senaiIcon"/>'
    +'</div>'
      +'<div>'
      +'<h4>Senai</h4>'
      +'<p class="text-info-course">600 hours<br>concluded in 2003</p>'
    +'</div>'
  +'</div>'
  +'<div class="course">'
    +'<div class="container-icon-courses">'
      +'<img class="img-coursesIcon" src="./imagens/informatica.jpg" alt="informaticaIcon"/>'
    +'</div>'
      +'<div>'
      +'<h4>Informática</h4>'
      +'<p class="text-info-course">Advanced<br>concluded in 1998</p>'
    +'</div>'
  +'</div>'
+'</div>';

const experiences = '<h2>Professional experiences</h2>'
+'<div class="container-card">'
  +'<img class="img-pucIcon" src="./imagens/managerIcon.jpeg" alt="managerIcon" />'
  +'<p class="text-principal"><strong>Restaurante Bandeirantes</strong><br>Av. Bandeirantes 1640, Mogi-Guaçu - SP<br>Responsibility: Manager<br>from January/2003 to May/2018</p>'
+'</div>';
const certificates = '<h2>Certificates</h2>'
+ '<a class="link-certificate" href="./certificates/RafaelModulo1.pdf" target="_blank"><img class="certificate-icon" src="./imagens/certificateModulo1.jpeg" width="200px" alt="certificate1" /></a>'

const about = '<h2>About me</h2>'
+'<p class="text-principal">I started studying in the TI area from a very young age.<br>'
+'In 1995, when I was 9 years old, I started studying computer science,<br>'
+'At the age of 15 I took a course in maintenance and installation of networks and computers,<br>'
+'At the age of 19 I studied 4 years of System Analysis at Puc-Campinas,<br>'
+'I worked 15 years professionally as a manager in the food industry,<br>'
+'In 2020 I decided to change and work with TI that I really love and I resumed my studies in full stack web development at Trybe.</p>';

const contacts = '<h2>Contact</h2>'
+'<p class="text-principal contact">'
  +'<img class="contact-icon" src="./imagens/adressIcon.jpeg" alt="adressIcon" /> Rua Cleonice Ap. Cruz Thielle, 350 - Jd. Alvorada<br>Cep: 13841-077, Mogi-Guaçu - SP'
+'</p>'
+'<p class="text-principal contact"><img class="contact-icon" src="./imagens/celIcon.jpeg" alt="celIcon" /> (19) 997426983</p>'
+'<p class="text-principal contact"><img class="contact-icon" src="./imagens/emailIcon.png" alt="emailIcon" /> rafaelazevedo321@gmail.com</p>'
+'<div class="links-container">'
  +'<a class="link" href="https://www.linkedin.com/in/rafael-azevedo-530889195/" target="_blank"><img class="link-logo-linkid" src="./imagens/logo_linke.png" alt="logo-linke"/></a>'
  +'<a class="link" href="https://github.com/RafaelBiatoAzevedo" target="_blank"><img class="link-logo-github" src="./imagens/logo_github.png" alt="logo-gihub"/></a>'
  +'<a class="link" href="https://www.instagram.com/rafael_azevedo_55/" target="_blank"><img class="link-logo-insta" src="./imagens/logo_insta.png" alt="logo-insta"/></a>'
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
      mainContainer.innerHTML = courses;
      break;
    case 'spanCertificates':
      mainContainer.innerHTML = certificates;
      break;  
    case 'spanExperiences':
      mainContainer.innerHTML = experiences;
      break;
    case 'spanAbout':
      mainContainer.innerHTML = about;
      break;
    case 'spanContact':
      mainContainer.innerHTML = contacts;
      break;
    default:
      mainContainer.innerHTML = home;
  }
};

const selectProject = (evt) => {
  const { value } = evt.target;
  switch (value) {
  case 'lessons-learned':
    window.location.assign('https://rafaelbiatoazevedo.github.io/Projects/1%C2%B0%20Project%20-%20lessons-learned/');
    break;
  case 'playground-functions':
    window.location.assign('https://github.com/RafaelBiatoAzevedo/RafaelBiatoAzevedo.github.io/tree/main/Projects/2%C2%B0%20Project%20-%20playground-functions')
    break;
  case 'pixels-art':
    window.location.assign('https://rafaelbiatoazevedo.github.io/Projects/3%C2%B0%20Project%20-%20pixels-art/');
    break;
  case 'todo-list':
    window.location.assign('https://rafaelbiatoazevedo.github.io/Projects/4%C2%B0%20Project%20-%20todo-list/');
    break;
  case 'meme-generator':
    window.location.assign('https://rafaelbiatoazevedo.github.io/Projects/5%C2%B0%20Project%20-%20meme-generator/');
    break;
  case 'color-guess':
    window.location.assign('https://rafaelbiatoazevedo.github.io/Projects/6%C2%B0%20Project%20-%20color-guess/');
    break;
  case 'mistery-letter':
    window.location.assign('https://rafaelbiatoazevedo.github.io/Projects/7%C2%B0%20Project%20-%20mistery-letter/');
    break;
  case 'facebook-signup':
    window.location.assign('https://rafaelbiatoazevedo.github.io/Projects/8%C2%B0%20Project%20-%20facebook-signup/');
    break;
  case 'zoo-functions':
    window.location.assign('https://github.com/RafaelBiatoAzevedo/RafaelBiatoAzevedo.github.io/tree/main/Projects/9%C2%B0%20Project%20-%20zoo-functions');
    break;
  case 'shopping-cart':
    window.location.assign('https://rafaelbiatoazevedo.github.io/Projects/10%C2%B0%20Project%20-%20shopping-cart/');
    break;
  }
}

const showHome = () => {
  const mainContainer = document.querySelector('#centerContent');
  mainContainer.innerHTML = '';
  mainContainer.innerHTML = home;
  const selectProjects = document.querySelector('#selectProjects');
  selectProjects.addEventListener('change', selectProject);
}

const createEvents = () => {
  const home = document
    .querySelector('#spanHome').addEventListener('click', showHome);
  const formation = document
    .querySelector('#spanFormation').addEventListener('click', showInformations);
  const courses = document
    .querySelector('#spanCourses').addEventListener('click', showInformations);
  const certificates = document
    .querySelector('#spanCertificates').addEventListener('click', showInformations);
  const experiences = document
    .querySelector('#spanExperiences').addEventListener('click', showInformations);
  const about = document
    .querySelector('#spanAbout').addEventListener('click', showInformations);
  const contact = document
    .querySelector('#spanContact').addEventListener('click', showInformations);
};

window.onload = () => {
  createEvents();
  showHome();
};