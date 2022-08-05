AOS.init();

//  Tarjetas desactivas de trabajo

/* 
 const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "",
    cardImage: "assets/images/experience-page/",
    place: "",
    time: "",
    desp: "",
  },
  {
    title: "",
    cardImage: "assets/images/experience-page/",
    place: "",
    time: "",
    desp: "",
  },
  {
    title: "",
    cardImage: "assets/images/experience-page/",
    place: "",
    time: "",
    desp:"",
  },
]; 

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
 */







// Tarjetas largas

/* const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

 */
// Tarjetas largas



// Seccion de lenguajes


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Sistema de calificación",
    subtitle: "⭐⭐⭐⭐⭐",
    image: "assets/images/experience-page/conocimineto.jpg",
    desp: "Cuantas más estrellas indique la tarjeta más alto es el conocimiento en ese ámbito.",
  },
  {
    title: "HTML  CSS  JS",
    subtitle: "⭐⭐⭐",
    image: "assets/images/experience-page/html5-css3-js.png",
    desp: "Tengo conocimiento medios de HTML,CSS y JS, tengo varias paginas web desarrolladas.",
  },
  {
    title: "Python",
    subtitle: "⭐⭐",
    image: "assets/images/experience-page/pythonlogo.png",
    desp: "Un lenguaje muy simple con el que se pueden hacer muchas cosas.",
  },
  {
    title: "C#",
    subtitle: "⭐",
    image: "assets/images/experience-page/csharp.jpg",
    desp: "Apenas empeze a programar con este lenguaje me parece muy interesante.",
  },
  {
    title: "Java",
    subtitle: "⭐",
    image: "assets/images/experience-page/java.png",
    desp: "Tengo conociminetos muy basicos en este lenguaje, no me atrae tanto la verdad.",
  },
  {
    title: "SQL",
    subtitle: "⭐⭐⭐",
    image: "assets/images/experience-page/sqllogo.png",
    desp: "Domino un poco más de los conceptos basicos de SQL.",
  },
  {
    title: "Git y GitHub",
    subtitle: "⭐⭐⭐⭐",
    image: "assets/images/experience-page/gitgithub.png",
    desp: "Tengo un manejo alto de Git y GitHub, ademas de diversos proyectos subidos a GitHub.",
  },
  {
    title: "Sistemas y Redes",
    subtitle: "⭐⭐⭐⭐",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "Tengo conocimintos de alto nivel en montaje de sistemas en red de todo tipo.",
  },
  {
    title: "Ciberseguridad",
    subtitle: "⭐⭐⭐",
    image: "assets/images/experience-page/cibersecurity.jpg",
    desp: "Mantengo conociminetos de ciberseguridad y hacking etico de niveles medios, todo depende del desafío.",
  },

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);


// Seccion de lenguajes