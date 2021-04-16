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
    +'<img src="./imagens/logoRafaExpressWhite.png" alt="logo-rafaexpress" width="250px"/>'
  +'</a>'
+'</div>'
+'<h3>Projetos na Trybe:</h3><br>'
+'<a class="link-home-github" href="https://github.com/RafaelBiatoAzevedo" target="blank"><img src="./imagens/logo_github.png" alt="logo-gihub" width="70px"/></a>';

const formation = '<h2>Formação</h2>'
+'<p class="text-principal"><strong>Trybe</strong><br>Desenvolvimento Web Full Stack 1° Semestre<br>Situação: Cursando</p>'
+'<p class="text-principal"><strong>Pontifícia Universidade Católica (PUC-Campinas)</strong><br>Análise de Sistemas 7° semestre<br>Situação: trancado desde 2009</p>';

const courses = '<h2>Cursos</h2>'
+'<div class="courses-container">'
  +'<div class="course">'
    +'<h4>Desenvolvimento Web (HTML,CSS,JavaScript,React,Redux)</h4>'
    +'<p>1 ano<br>Cursando</p>'
  +'</div>'
  +'<div class="course">'
    +'<h4>Python</h4>'
    +'<p>120 horas<br>Concluído em 2020</p>'
  +'</div>'
  +'<div class="course">'
    +'<h4>Linux</h4>'
    +'<p>40 horas<br>Concluído em 2020</p>'
  +'</div>'
  +'<div class="course">'
    +'<h4>Java</h4>'
    +'<p>120 horas<br>Concluído em 2018</p>'
  +'</div>'
  +'<div class="course">'
    +'<h4>Inglês</h4>'
    +'<p>Nível avançado<br>Concluído em 2008</p>'
  +'</div>'
  +'<div class="course">'
    +'<h4>Manutenção, instalação e configuração de computadores</h4>'
    +'<p>160 horas<br>Concluído em 2004</p>'
  +'</div>'
  +'<div class="course">'
    +'<h4>Senai</h4>'
    +'<p>600 horas<br>Concluído em 2003</p>'
  +'</div>'
  +'<div class="course">'
    +'<h4>Informática</h4>'
    +'<p>Nível avançado<br>Concluído em 1998</p>'
  +'</div>'
+'</div>';

const experiences = '<h2>Experiências Profissionais</h2>'
+'<p class="text-principal"><strong>Restaurante Bandeirantes</strong><br>Av. Bandeirantes 1640, Mogi-Guaçu - SP<br>Cargo: Gerente<br>De: Janeiro/2003 - Até: Maio/2018</p>'
 

const about = '<h2>Sobre mim</h2>'
+'<p class="text-principal">Iniciei estudos na área de TI desde muito jovem.<br>'
+'Em 1995, com 9 anos iniciei os estudos em informática,<br>'
+'Aos 15 anos fiz curso de manutenção e instalação de redes e computadores,<br>'
+'Aos 19 estudei 4 anos de Análise de Sistema na Puc-Campinas,<br>'
+'Trabalhei 15 anos profissionalmente como Gerente no ramo alimentício,<br>'
+'Em 2020 decidi mudar e trabalhar com TI que realmente amo e retomei os estudos em desenvolvimento web full stack na Trybe.</p>';

const contacts = '<h2>Contato</h2>'
+'<p class="text-principal">'
  +'<strong>Endereço:</strong> Rua Cleonice Ap. Cruz Thielle, 350 - Jd. Alvorada<br>Cep: 13841-077, Mogi-Guaçu - SP'
+'</p>'
+'<p class="text-principal"><strong>Cel/Whats:</strong> (19) 997426983</p>'
+'<p class="text-principal"><strong>Email:</strong> rafaelazevedo321@gmail.com</p>'
+'<div class="links-container">'
  +'<a class="link" href="https://www.linkedin.com/in/rafael-azevedo-530889195/" target="blank"><img src="./imagens/logo_linke.png" alt="logo-linke" width="50px"/></a>'
  +'<a class="link" href="https://github.com/RafaelBiatoAzevedo" target="blank"><img src="./imagens/logo_github.png" alt="logo-gihub" width="60px"/></a>'
  +'<a class="link" href="https://www.instagram.com/rafael_azevedo_55/" target="blank"><img src="./imagens/logo_insta.png" alt="logo-insta" width="50px"/></a>'
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

const showHome = () => {
  const mainContainer = document.querySelector('#centerContent');
  mainContainer.innerHTML = '';
  mainContainer.innerHTML = home;

}

const createEvents = () => {
  const home = document
    .querySelector('#spanHome').addEventListener('click', showInformations);
  const formation = document
    .querySelector('#spanFormation').addEventListener('click', showInformations);
  const courses = document
    .querySelector('#spanCourses').addEventListener('click', showInformations);
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