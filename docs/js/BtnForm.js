export function btnSuscription (btn,form){

    const d = document,
        $btn = d.querySelector(btn),
        $formSuscription = d.querySelector(form)

    d.addEventListener('click', (e)=>{

        if(e.target.matches(btn)){
            $formSuscription.classList.toggle('none')
        }
        if(!e.target.matches(btn)){
            $formSuscription.classList.add('none')
        }
    })
}