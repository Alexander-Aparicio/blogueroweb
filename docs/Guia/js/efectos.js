export function efectoHeader() {
    const d = document;
    const  w = window;
    w.addEventListener('scroll', () => {
      let sectionInitial = d.querySelector('#section1');
      let positionTop = sectionInitial.getBoundingClientRect().top; 
      let screenPosition = w.innerHeight*0.22;
      let imgAutorScroll = d.querySelector('.card-branding');
      let nameScroll = d.querySelector('.blogueroweb-name');
      let autorScroll = d.querySelector('.blogueroweb-autor');
      let heightHeader = d.querySelector('.header');
      let headerScroll = d.querySelector('.header');
      let subMenuHeader = d.querySelector('.submenu');

      if(positionTop < screenPosition && window.innerWidth>=900){
        headerScroll.style.setProperty("background","var(--main)");
        headerScroll.classList.add('background-animation');
        heightHeader.style.setProperty("grid-template-rows","85px");
        autorScroll.style.setProperty("font-size","0.9rem");
        autorScroll.style.setProperty("color","#fff");
        nameScroll.style.setProperty("color","var(--link-color2)");
        nameScroll.style.setProperty("font-size","1.75rem");
        imgAutorScroll.style.setProperty("width","53px");
        subMenuHeader.style.setProperty("background","var(--main");
      }else{
        headerScroll.style.setProperty("background","var(--transparente)");
        heightHeader.style.setProperty("grid-template-rows","110px");
        autorScroll.style.setProperty("font-size","1.15rem");
        autorScroll.style.setProperty("color","var(--yellow)");
        nameScroll.style.setProperty("color","var(--fondo-claro)");
        nameScroll.style.setProperty("font-size","1.85rem");
        imgAutorScroll.style.setProperty("width","60px");
        subMenuHeader.style.setProperty("background","var(--transparente)");
      }

      if(positionTop <= window.innerHeight+100 && window.innerWidth<900){
        headerScroll.style.setProperty("background","var(--fondo-claro)");
        autorScroll.style.setProperty("color","revert");
        autorScroll.style.setProperty("font-size","0.9rem");
        nameScroll.style.setProperty("color","var(--main)");
        nameScroll.style.setProperty("font-size","1.2rem");
        imgAutorScroll.style.setProperty("width","60px");
      }
    });
}