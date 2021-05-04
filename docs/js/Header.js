export function headerNavigation(titleOptions, options){
    const d = document,
        $options = d.querySelector(options)
    d.addEventListener('click',(e)=>{
        if(e.target.matches(titleOptions)){
            $options.classList.toggle('none')
        }
        if(!e.target.matches(titleOptions)){
            $options.classList.add('none')
        }
    })
}

export function HeaderEfects(header,navOption,introduction){
    const d = document,
    w = window
    w.addEventListener('scroll', ()=>{ 
        const $introduction = d.querySelector(introduction),
        $header = d.querySelector(header),
        $navOptions = d.querySelector(navOption),
        introductionTop = $introduction.getBoundingClientRect().top,
        windowHeight = w.innerHeight,
        topOfAction = windowHeight*0.22


        if(introductionTop < topOfAction){

            d.documentElement.style.setProperty('--bgHeader','#387780')
            $header.classList.add('backgroundEffect')

        }else{
            d.documentElement.style.setProperty('--bgHeader','transparent')
           
        }
    })  
}