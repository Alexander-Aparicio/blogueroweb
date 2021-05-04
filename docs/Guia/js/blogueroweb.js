import {efectoHeader} from "./efectos.js";
import {activar,activarSubmenu} from "./menuhamburguer.js";
import envioFormulario from "./formulario.js";
import {btnContactar,modalClose,btnOpenOff,ctaBanner} from "./botones.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e)=> {
  setTimeout(()=>{d.getElementById("pop-up").classList.toggle("none")},2000);
  activar(".btns-new", "#btn-active", "#btn-close", ".menu-blogueroweb");
  activarSubmenu("#blog-on","#blog-off",".submenu");
  efectoHeader();
  envioFormulario ();
  btnOpenOff("#web-tienda","#off-web-tienda","#web-e-commerce","#off-web-afiliados","#off-web-entretenimiento","#off-web-servicios","#eco-close");
  btnOpenOff("#web-afiliados","#off-web-afiliados","#web-afiliacion-art","#off-web-tienda","#off-web-entretenimiento","#off-web-servicios","#afi-close");
  btnOpenOff("#web-entretenimiento","#off-web-entretenimiento","#web-entretenimiento-art","#off-web-afiliados","#off-web-tienda","#off-web-servicios","#ent-close");
  btnOpenOff("#web-servicios","#off-web-servicios","#web-servicios-art","#off-web-afiliados","#off-web-entretenimiento","#off-web-tienda","#ser-close");
  btnContactar("#proyectos-on",".div3-section5",".div4-section5",".div5-section5",".div6-section5","#sobremi-on","#servicios-on","#contactar-bw");
  btnContactar("#sobremi-on",".div4-section5",".div3-section5",".div5-section5",".div6-section5","#proyectos-on","#servicios-on","#contactar-bw");
  btnContactar("#servicios-on",".div5-section5",".div4-section5",".div3-section5",".div6-section5","#sobremi-on","#proyectos-on","#contactar-bw");
  btnContactar("#contactar-bw",".div6-section5",".div4-section5",".div5-section5",".div3-section5","#sobremi-on","#servicios-on","#proyectos-on");
  modalClose("#cerrar-modal","pop-up");
  ctaBanner("cta",".form-cta");
});
