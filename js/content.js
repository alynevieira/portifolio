'use strict'

let projects = [
  {
    id: 1,
    urlImage: "img/sisys.PNG",
    urlGitHub: "",
    urlLink: "",
    name: "Sisys",
    language: "Angular 9 · SCSS · Node.js · Express · MongoDB",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 2,
    urlImage: "img/nomid.PNG",
    urlGitHub: "",
    urlLink: "",
    name: "Nomid",
    language: "Angular 8 · SCSS · i18n · Firebase",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  }, 
  {
    id: 3,
    urlImage: "img/mundopet.PNG",
    urlGitHub: "",
    urlLink: "",
    name: "Mundo pet",
    language: "Angular 9 · SCSS · Node.js · Express · MongoDB · Firebase",
    description: "Uma aplicação web para gerenciamento e divulgação de animais em uma ONG."
  },
  {
    id: 4,
    urlImage: "img/netflix.PNG",
    urlGitHub: "https://github.com/alynevieira/netflix-clone",
    urlLink: "",
    name: "Netflix clone",
    language: "HTML · CSS · JavaScript · JQuery",
    description: "O site foi realizado na proposta de um projeto do bootcamp na Digital Innovation One. O objetivo foi recriar a interface do Netflix, adicionando novas funcionalidades e a criatividade."
  },
  {
    id: 5,
    urlImage: "img/portifolio.PNG",
    urlGitHub: "",
    urlLink: "",
    name: "Eager2Learn",
    language: "Angular 8 · SCSS",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 6,
    urlImage: "img/ecoleta.PNG",
    urlGitHub: "https://github.com/alynevieira/ecoleta",
    urlLink: "",
    name: "Ecoleta",
    language: "React · React Native · Node.js · Express · Knex.js",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 7,
    urlImage: "img/happy.PNG",
    urlGitHub: "https://github.com/alynevieira/happy",
    urlLink: "",
    name: "Happy",
    language: "React · Node.js · Express",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 8,
    urlImage: "img/weather.PNG",
    urlGitHub: "https://github.com/alynevieira/happy",
    urlLink: "",
    name: "Weather",
    language: "Angular 9 · Scss · NgRx (Redux)",
    description: "É uma aplicação de previsão do tempo com o framework NgRx, consumindo dados da API OpenWeatherMap."
  }
]

function listAllProjects() {
  let card = document.getElementById("card-project");
  
  projects.forEach(res => {  
    let iconGithub, iconOpen;
    
    if (res.urlGitHub) {
      iconGithub =
      `<a href="${res.urlGitHub}" alt="Github" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="app-icon--github">
        <path class="path" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 
        6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 
        0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 
        6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      `
    } else {
      iconGithub = ""
    }

    if(res.urlLink) {
      iconOpen =
      `<a href="${res.urlLink}" alt="Abrir" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="app-icon--open">
          <path class="path" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline class="path" points="15 3 21 3 21 9"></polyline>
          <line class="path" x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>`
    } else [
      iconOpen = ""
    ]

    const cardHTML = 
    `<div class="card">
      <img src="${res.urlImage}" class="card-image" />
      <div class="card-content">
        <div class="card-content--title">
          <h3 class="card-title">${res.name}</h3>

          <div class="app-icon">
          `+ iconGithub +`

          `+ iconOpen +`
          </div>
        </div>

        <p class="card-text">${res.description}</p>

        <p class="card-subtitle">${res.language}</p>
        <a class="btn-primary" href="../portifolio/details.html?id=${res.id}" style="margin-top: 1.5rem;">Ver detalhes</a>
      </div>
    </div>`

    const ele = document.createElement('div');
    ele.innerHTML = cardHTML;

    card.appendChild(ele.firstChild);
  })
}

function details() {
  const id = location.search.split('id=')[1]

  projects.forEach(result => {
    if(result.id === parseInt(id)) {
      let title = document.getElementById('title');
      let description = document.getElementById('description')

      title.innerHTML = result.name;
      description.innerHTML = result.description;
    }
  })
}

