export function doorDynamics (btnOpen, btnClose, door, link0, link1, link2, link3, link4){
    const d = document,
        $btnOpen= d.querySelector(btnOpen),
        $btnClose = d.querySelector(btnClose),
        $door = d.querySelector(door)
    d.addEventListener('click', (e)=>{
        if(e.target.matches(btnOpen)){
            $door.classList.remove('hidden-izq')
            $door.classList.add('animation-open-izq-der')
            $btnOpen.classList.add('none')
            $btnClose.classList.remove('none')
            $btnClose.classList.add('opacity-open') 
            $door.classList.remove('animation-close-der-izq')
        }
        if(e.target.matches(btnClose)){ 
            $door.classList.add('hidden-izq')
            $door.classList.add('animation-close-der-izq')
            $btnClose.classList.add('none')
            $btnOpen.classList.remove('none')
            $btnOpen.classList.add('opacity-open')
            $door.classList.remove('animation-open-izq-der')
        }
        if(e.target.matches(link0)||e.target.matches(`${link0} *`)|| e.target.matches(link1)||e.target.matches(`${link1} *`)|| e.target.matches(link2)||e.target.matches(`${link2} *`)|| e.target.matches(link3)||e.target.matches(`${link3} *`)|| e.target.matches(link4)||e.target.matches(`${link4} *`)){
            $door.classList.add('hidden-izq')
            $door.classList.add('animation-close-der-izq')
            $btnClose.classList.add('none')
            $btnOpen.classList.remove('none')
            $btnOpen.classList.add('opacity-open')
            $door.classList.remove('animation-open-izq-der')
        }
    })
}