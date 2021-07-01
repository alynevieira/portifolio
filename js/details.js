var projects = [
  {
    id: 1,
    urlImage: "../portifolio/img/portifolio.PNG",
    urlGitHub: "",
    urlLink: "",
    name: "Sisys",
    language: "Angular 9 · SCSS · Node.js · Express · MongoDB",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 2,
    urlImage: "../portifolio/img/portifolio.PNG",
    urlGitHub: "",
    urlLink: "",
    name: "Nomid",
    language: "Angular 8 · SCSS · i18n · Firebase",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  }, 
  {
    id: 3,
    urlImage: "../portifolio/img/mundopet.PNG",
    urlGitHub: "",
    urlLink: "",
    name: "Mundo pet",
    language: "Angular 9 · SCSS · Node.js · Express · MongoDB · Firebase",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 4,
    urlImage: "../portifolio/img/netflix.PNG",
    urlGitHub: "https://github.com/alynevieira/netflix-clone",
    urlLink: "",
    name: "Netflix clone",
    language: "HTML · CSS · JavaScript · JQuery",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 5,
    urlImage: "../portifolio/img/portifolio.PNG",
    urlGitHub: "https://github.com/alynevieira/portifolio",
    urlLink: "",
    name: "Portfólio",
    language: "HTML · CSS · JavaScript · JQuery",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 6,
    urlImage: "../portifolio/img/portifolio.PNG",
    urlGitHub: "",
    urlLink: "",
    name: "Eager2Learn",
    language: "Angular 8 · SCSS",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 7,
    urlImage: "../portifolio/img/portifolio.PNG",
    urlGitHub: "https://github.com/alynevieira/ecoleta",
    urlLink: "",
    name: "Ecoleta",
    language: "React · React Native · Node.js · Express · Knex.js",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  },
  {
    id: 8,
    urlImage: "../portifolio/img/happy.PNG",
    urlGitHub: "https://github.com/alynevieira/happy",
    urlLink: "",
    name: "Happy",
    language: "React · Node.js · Express",
    description: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent."
  }
]

const id = location.search.split('id=')[1]

projects.forEach(result => {
  if(result.id === parseInt(id)) {
    let title = document.getElementById('title');
    let description = document.getElementById('description')

    title.innerHTML = result.name;
    description.innerHTML = result.description;
  }
})