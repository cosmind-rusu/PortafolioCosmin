AOS.init();

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    langName: "Visual Studio Code",
    langDesc: "<li>Mi editor de texto plano favorito, su punto fuerte son las extensiones.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    langName: "Docker",
    langDesc: "<li>La ballena que ejecuta todo.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    langName: "Git",
    langDesc: "<li>Git es la herramineta por preferencia de control de versiones de los desarrolladores.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    langName: "Azure",
    langDesc: "<li>Servidores, rapidez y Cloud ¿Necesito algo más?</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    langName: "Google Cloud",
    langDesc: "<li>Muy sencillo y rápido, lo recomendaria para empezar.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    langName: "Jira",
    langDesc: "<li>Cuando gestiono grupos o equipos lo primero que pienso es en jira.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    langName: "Wordpress",
    langDesc: "<li>El CMS más usado en todo el mundo.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    langName: "Angular",
    langDesc: "<li>Mi primer Framework de Javascript, me gusta mucho poder implementarlo en mis proyectos.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    langName: "Javascript",
    langDesc: "<li>El lenguaje de programacion del desarrollo web.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    langName: "Bootstrap",
    langDesc: "<li>Mi libreria de estilos favorita, para mi simplemente perfecta.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    langName: "C#",
    langDesc: "<li>Un lenguaje muy rudo pero facil de aprender.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    langName: "Ruby",
    langDesc: "<li>Empece a probar diferentes lenguajes de programación y me he dado cuenta que ruby es mi favorito.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    langName: "Go",
    langDesc: "<li>Rápido y escalable. Go me parece un lenguaje de futuro, cada dia aprendo más con él.</li>",
  },

];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};

// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
