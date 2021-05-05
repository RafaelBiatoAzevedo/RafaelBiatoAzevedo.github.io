const services = [
  {
    title: 'Pedreiro',
    image: './images/pedreiro.jpg',
    description: 'Executamos trabalhos em alvenaria, concreto e outros materiais, para construir, reformar ou reparar',
  },
  {
    title: 'Encanador',
    image: './images/encanador.jpeg',
    description: 'Montamos, ajustamos, instalamos e reparamos encanamentos, tubulações e outros condutos',
  },
  {
    title: 'Eletricista',
    image: './images/eletricista.jpeg',
    description: 'Realizamos manutenção preventiva e corretiva, instalalções e reparos em residências',
  },
  {
    title: 'Pintor',
    image: './images/pintor.jpeg',
    description: 'Preparamos e pintamos as superfícies externas e internas residenciais e outras obras civis',
  },
  {
    title: 'Instalações em Geral',
    image: './images/manutencao.jpg',
    description: 'Manutenção e instalações de roteadores, computadores, notebooks e games',
  },
];

const professionals = [
  {
    name: 'Rafael Azevedo',
    work: 'Estudante',
    description: 'Developer Web Full Stack \nAnálise de Sistemas na Puc-Campinas 2009 \nManutenção de Computadores 2004 \nSenai 2002',
    cel: '(19) 99742-6983',
    picture: './images/contacts/rafael-picture.jpg',
  },
  {
    name: 'Jean Maycon',
    work: 'Samae-Mogi-Guaçu',
    description: 'Trabalha no Samae a mais de 15 anos\nExperiência em construção em geral \nEducação Física na Anhanguera',
    cel: '(19) 99906-4561',
    picture: './images/contacts/jean-picture.jpg',
  },
];

const mason = [
  {
    title: 'Concretagem',
    image: './images/mason/concretagem.jpg',
    description: 'Fazemos concreagem de calçadas, lajes e solos em geral.',
  },
  {
    title: 'Contrapiso',
    image: './images/mason/contrapiso.jpeg',
    description: 'Fazemos contrapisos em concreto ou argamassa, para impermeabilizar, regular e nivelar solo e lajes.',
  },
  {
    title: 'Assentamento de Pisos',
    image: './images/mason/assentamento-pisos.jpeg',
    description:'Assentamos pisos, cerâmicas e pedras com ótimo acabamento.',
  },
  {
    title: 'Reboco',
    image: './images/mason/reboco.jpeg',
    description: 'Aplicamos reboco para acabamento ou assentamento de azuleijos.'
  },
  {
    title: 'Assentamento de Azuleijos',
    image: './images/mason/azuleijo.jpeg',
    description: 'Assentamos azuleijos com ótimo acabamento.',
  },
  {
    title: 'Muros',
    image: './images/mason/muros.jpeg',
    description: 'Construimos muros com todos tipos tijolos.',
  },
  {
    title: 'Instalação de Portões',
    image: './images/mason/instalacao-portao.jpeg',
    description: 'Instalamos portões basculantes, corrediços e comuns.',
  },
  {
    title: 'Instalação de Pias',
    image: './images/mason/instalacao-da-pia.webp',
    description: 'Instalamos pias de cozinha, banheiro e lavanderia com ótimo acabamento.',
  }
];

const plumber = [
  {
    title: 'Vazamentos',
    image: './images/plumber/vazamento.jpeg',
    description: 'Achamos vazamentos com aparelho, consertamos e fazemos ótimo acamento e limpeza. ',
  },
  {
    title: 'Instalacões Torneiras',
    image: './images/plumber/torneira.jpeg',
    description: 'Instalamos todos tipos de torneiras, registros, sifões  e trocamos reparos.',
  },
  {
    title: 'Caixa água Padrão',
    image: './images/plumber/caixa-padrao-agua.jpg',
    description: 'Instalamos caixa água padrão de acordo com expecificações do SAMAE.',
  },
  {
    title: 'Caixa de Gordura',
    image: './images/plumber/caixa-gordura.jpeg',
    description: 'Instalamos caixa de gordura com ótimo acabamento.',
  },
];

const electrician = [
  {
    title: 'Instalações em Geral',
    image: './images/electrician/instalacoesgeralEletri.jpeg',
    description: 'Instalamos tomadas e bocais em geral, chuveiros, ventiladores, lustres, etc',
  },
  {
    title: 'Caixa de Distribuição',
    image: './images/electrician/caixa_distribuicao.jpeg',
    description: 'Instalamos Caixa distribuidoras de acordo com a norma NBR-5410',
  },
  {
    title: 'Segurança',
    image: './images/electrician/cameras.jpeg',
    description: 'Instalamos câmeras de segurança e interfone',
  },
];

const painter = [
  {
    title: 'Pintura de Paredes',
    image: './images/painter/pintura_parede.jpeg',
    description: 'Pintamos todos tipos de paredes',
  },
  {
    title: 'Pintura de Pisos',
    image: './images/painter/pintura_pisos.jpeg',
    description: 'Pintamos calçadas e pisos em geral',
  },
  {
    title: 'Pintura de Ferragem',
    image: './images/painter/pintura_ferragem.jpeg',
    description: 'Pintamos janelas, venezianas, portões e grades',
  },
];

const installationGeneral = [
  {
    title: 'Computadores e notebooks',
    image: './images/installation/limpeza_computador.jpeg',
    description: 'Limpamos, trocamos pasta térmica, formatamos e fazemos upgrades',
  },
  {
    title: 'Limpeza VideoGames',
    image: './images/installation/limpeza_videogame.jpeg',
    description: 'Limpamos e trocamos pasta térmica para aumentar vida útil do seu VideoGame',
  },
  {
    title: 'Redes e roteadores',
    image: './images/installation/instalacao_redes.jpeg',
    description: 'Fazemos instalações de redes, cabos, switch e roteadores para melhorar tranmissão de dados',
  },
  {
    title: 'Desbloqueio de PS3',
    image: './images/installation/desbloqueio_ps3.jpeg',
    description: 'Desbloqueamos seu PS3 com mais de 1000 jogos famosos',
  },
];

createElement = (obj) => {
  const div = document.createElement('div');
  div.className = 'service-container';
  const image = document.createElement('img');
  image.className = 'service-image';
  image.src = obj.image;
  div.appendChild(image);
  const div2 = document.createElement('div');
  div2.className = 'text-container';
  const h2 = document.createElement('h2');
  h2.className = 'service-title';
  h2.innerText = obj.title;
  const p = document.createElement('p');
  p.className = 'service-description';
  p.innerText = obj.description;
  const btn = document.createElement('button');
  btn.className = 'btn-order service-btn';
  btn.id = 'btnOrder';
  btn.innerText = 'Solicitar Orçamento';
  div2.appendChild(h2);
  div2.appendChild(p);
  div2.appendChild(btn);
  div.appendChild(div2);
  document.querySelector('#containerMain').appendChild(div);
};

createServices = (list) => list.forEach(service => createElement(service));

createElementContacts = (obj) => {
  const div = document.createElement('div');
  div.className = 'contact-container';
  const image = document.createElement('img');
  image.className = 'contact-image';
  image.src = obj.picture;
  const h2 = document.createElement('h2');
  h2.className = 'contact-name';
  h2.innerText = obj.name;
  const descri = document.createElement('p');
  descri.className = 'contact-description';
  descri.innerText = obj.description;
  const cel = document.createElement('p');
  cel.className = 'contact-cel';
  cel.innerText = `WhatsApp ${obj.cel}`;
  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(descri);
  div.appendChild(cel);
  const divMain = document.querySelector('#contactContainerMain');
  divMain.appendChild(div);
}

createContacts = () => {
  const container = document.querySelector('#containerMain');
  container.innerHTML = '';
  const divMain = document.createElement('div');
  divMain.className = 'contact-container-main';
  divMain.id = 'contactContainerMain';
  const p = document.createElement('p');
  p.className = 'contact-msg'
  p.innerText = '>> Mande mensagem ou ligue para um de nossos profissionais para agendar uma visita <<';
  container.appendChild(p);
  container.appendChild(divMain);
  professionals.forEach(profi => createElementContacts(profi));
}

eventsBtn = () => document
  .querySelectorAll('#btnOrder')
  .forEach(btn => btn.addEventListener('click', createContacts));

showInMain = (list) => {
  const container = document.querySelector('#containerMain');
  container.innerHTML = '';
  createServices(list);
  eventsBtn();
};

showCompany = () => {
  const container = document.querySelector('#containerMain');
  container.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'logo-description';
  const h3 = document.createElement('h3');
  h3.innerText = 'Informações';
  h3.className='subtitle logoSubtitle';
  const paragraph = document.createElement('p');
  paragraph.innerText = 'Logo criado em Free Logo Maker. \n'
    +'"Brothers reparos em geral" '
    + 'nome fantasia criado pelo desenvolvedor Rafael Biato de Azevedo.\n'
    + 'Email: rafaelazevedo321@gmail.com';
  paragraph.className='paragraph-logo';
  div.appendChild(h3);
  div.appendChild(paragraph);
  container.appendChild(div);
};

eventBtnHeader = () => document
  .querySelector('#btnHeader').addEventListener('click', createContacts);

eventsMenu = () => {
  eventBtnHeader();
  const logo = document.querySelector('#logoType');
  logo.addEventListener('click', showCompany);
  const spanServices = document.querySelector('#spanNav');
  spanServices.addEventListener('click', () => showInMain(services));
  const masonServices = document.querySelector('#masonNav');
  masonServices.addEventListener('click', () => showInMain(mason));
  const plumerServices = document.querySelector('#plumerNav');
  plumerServices.addEventListener('click',() => showInMain(plumber));
  const electricianServices = document.querySelector('#electrician');
  electricianServices.addEventListener('click', () => showInMain(electrician));
  const painterServices = document.querySelector('#painter');
  painterServices.addEventListener('click', () => showInMain(painter));
  const installationGeneralServices = document.querySelector('#instalationGeneral');
  installationGeneralServices
    .addEventListener('click', () => showInMain(installationGeneral));
}

window.onload = () => {
  eventsMenu();
  showInMain(services);
};