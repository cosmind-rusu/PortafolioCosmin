AOS.init();

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    langName: "HyperText Markup Language",
    langDesc: "<li></li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    langName: "Ruby",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    langName: "C#",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    langName: "Wordpress",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
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
