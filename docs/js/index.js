// IMPORT-FUNCTIONS
import {doorDynamics} from "./MobileMenu.js"
import {headerNavigation,HeaderEfects} from "./Header.js"
import {DoorEfects} from "./DoorEfects.js"
import envioFormulario from "./formulario.js"
import {btnSuscription} from "./BtnForm.js"

const d = document

d.addEventListener('DOMContentLoaded', ()=>{
    doorDynamics ('.btn-open','.btn-close','.modal-menu', '#link0','#link1','#link2','#link3','#link4')
    headerNavigation ('.title-options','.nav-options')
    DoorEfects ('#btn-door1','#btn-door2','#btn-door3','#btn-door4','#door1','#door2','#door3','#door4','#close-door1','#close-door2','#close-door3','#close-door4','.image-of-doors','.container-door')
    envioFormulario ();
    HeaderEfects('.header','.nav-options','.introduction')
    btnSuscription('.btn-banner-suscription','.form-suscription')
})