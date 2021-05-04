export function DoorEfects (DoorButton1,DoorButton2,DoorButton3,DoorButton4,Door1,Door2,Door3,Door4,CloseDoor1,CloseDoor2,CloseDoor3,CloseDoor4,Img,Door){
    const d= document,
        $DoorButton1 = d.querySelector(DoorButton1),
        $DoorButton2 = d.querySelector(DoorButton2),
        $DoorButton3 = d.querySelector(DoorButton3),
        $DoorButton4 = d.querySelector(DoorButton4),
        $CloseDoor1 = d.querySelector(CloseDoor1),
        $CloseDoor2 = d.querySelector(CloseDoor2),
        $CloseDoor3 = d.querySelector(CloseDoor3),
        $CloseDoor4 = d.querySelector(CloseDoor4),
        $Door1 = d.querySelector(Door1),
        $Door2 = d.querySelector(Door2),
        $Door3 = d.querySelector(Door3),
        $Door4 = d.querySelector(Door4),
        $DoorImg = d.querySelector(Img),
        $Door = d.querySelector(Door)
        
    d.addEventListener('click', (e)=>{

        if(e.target.matches(DoorButton1)){
            $DoorButton1.classList.add('none')
            $CloseDoor1.classList.remove('none')
            $Door1.classList.toggle('hidden-der')
            $Door1.style.setProperty('transition','1s ease-in')
            $Door1.style.setProperty('animation','doorHeightOpen 1s ease-in')
            $Door1.classList.toggle('h0')
            $Door1.style.setProperty('animation','open-opacity 1s ease-in')
            $DoorImg.style.setProperty('right','-10%')
            $DoorImg.classList.add('hidden-der')
            $DoorImg.style.setProperty('animation','close-opacity 1s ease-in')
        }
        
        if(e.target.matches(DoorButton2)){
            $DoorButton2.classList.add('none')
            $CloseDoor2.classList.remove('none')
            $Door2.classList.toggle('hidden-der')
            $Door2.style.setProperty('transition','1s ease-in')
            $Door2.style.setProperty('animation','doorHeightOpen 1s ease-in')
            $Door2.classList.toggle('h0')
            $Door2.style.setProperty('animation','open-opacity 1s ease-in')
            $DoorImg.classList.add('hidden-der')
            $DoorImg.style.setProperty('right','-10%')
            $DoorImg.style.setProperty('animation','close-opacity 1s ease-in')
        }


        if(e.target.matches(DoorButton3)){
            $DoorButton3.classList.add('none')
            $CloseDoor3.classList.remove('none')
            $Door3.classList.toggle('hidden-der')
            $Door3.style.setProperty('transition','1s ease-in')
            $Door3.style.setProperty('animation','doorHeightOpen 1s ease-in')
            $Door3.classList.toggle('h0')
            $Door3.style.setProperty('animation','open-opacity 1s ease-in')
            $DoorImg.classList.add('hidden-der')
            $DoorImg.style.setProperty('right','-10%')
            $DoorImg.style.setProperty('animation','close-opacity 1s ease-in')
        }
    
        if(e.target.matches(DoorButton4)){
            $DoorButton4.classList.add('none')
            $CloseDoor4.classList.remove('none')
            $Door4.classList.toggle('hidden-der')
            $Door4.style.setProperty('transition','1s ease-in')
            $Door4.style.setProperty('animation','doorHeightOpen 1s ease-in')
            $Door4.classList.toggle('h0')
            $Door4.style.setProperty('animation','open-opacity 1s ease-in')
            $DoorImg.classList.add('hidden-der')
            $DoorImg.style.setProperty('right','-10%')
            $DoorImg.style.setProperty('animation','close-opacity 1s ease-in')
        }
    })

    $CloseDoor1.addEventListener('click', ()=>{
        $DoorButton1.classList.remove('none')
        $CloseDoor1.classList.add('none')
        $Door1.classList.toggle('hidden-der')
        $Door1.classList.toggle('h0')
        $Door1.style.setProperty('animation','doorHeightClose 1s ease-in')
        
        if($DoorButton2.classList.contains('none') == false & $DoorButton3.classList.contains('none') == false & $DoorButton4.classList.contains('none') == false){
            $DoorImg.classList.remove('hidden-der')
            $DoorImg.style.setProperty('right','10%')
            $DoorImg.style.setProperty('animation','open-opacity 1s ease-in')
        }
    })

    $CloseDoor2.addEventListener('click', ()=>{
        $DoorButton2.classList.remove('none')
        $CloseDoor2.classList.add('none')
        $Door2.classList.toggle('hidden-der')
        $Door2.classList.toggle('h0')
        $Door2.style.setProperty('animation','doorHeightClose 1s ease-in')
        
        if($DoorButton1.classList.contains('none') == false & $DoorButton3.classList.contains('none') == false & $DoorButton4.classList.contains('none') == false){
            $DoorImg.classList.remove('hidden-der')
            $DoorImg.style.setProperty('right','10%')
            $DoorImg.style.setProperty('animation','open-opacity 1s ease-in')
        }
    })

    $CloseDoor3.addEventListener('click', ()=>{
        $DoorButton3.classList.remove('none')
        $CloseDoor3.classList.add('none')
        $Door3.classList.toggle('hidden-der')
        $Door3.classList.toggle('h0')
        $Door3.style.setProperty('animation','doorHeightClose 1s ease-in')
        
        if($DoorButton1.classList.contains('none') == false & $DoorButton2.classList.contains('none') == false & $DoorButton4.classList.contains('none') == false){
            $DoorImg.classList.remove('hidden-der')
            $DoorImg.style.setProperty('right','10%')
            $DoorImg.style.setProperty('animation','open-opacity 1s ease-in')
        }
    })

    $CloseDoor4.addEventListener('click', ()=>{
        $DoorButton4.classList.remove('none')
        $CloseDoor4.classList.add('none')
        $Door4.classList.toggle('hidden-der')
        $Door4.classList.toggle('h0')
        $Door4.style.setProperty('animation','doorHeightClose 1s ease-in')
        
        if($DoorButton1.classList.contains('none') == false & $DoorButton2.classList.contains('none') == false & $DoorButton3.classList.contains('none') == false){
            $DoorImg.classList.remove('hidden-der')
            $DoorImg.style.setProperty('right','10%')
            $DoorImg.style.setProperty('animation','open-opacity 1s ease-in')
        }
    })
}