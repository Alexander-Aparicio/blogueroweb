export function modalClose(a,b){
    const d = document;
    d.addEventListener("click", (e)=> {
      if(e.target.matches(a)){
        d.getElementById(b).classList.toggle("none");
      }
    })
};

export function btnOpenOff(a,b,c,x,y,z,s) {
    const d = document,
        $btnA = d.querySelector(a),
        $article = d.querySelector(c),
        $btnD = d.querySelector(b),
        $btnDx = d.querySelector(x),
        $btnDy = d.querySelector(y),
        $btnDz = d.querySelector(z),
        $svgOff = d.querySelector(s);
    $btnA.addEventListener("click", ()=>{  
         $btnA.classList.add("none");
         $btnD.classList.remove("none");
         $btnD.style.setProperty("background","rgba(248, 162, 33, 1)");
         $btnD.style.setProperty("animation","opacity-btn  1s ease");
         $article.style.setProperty("display","grid");
         $article.style.setProperty("animation","open-img 1s ease-in-out");  
         d.querySelector(".img-svgg").style.setProperty("animation","opacity-off-bw  0.5s ease-in-out");
         setTimeout(() => {
           d.querySelector(".img-svgg").style.setProperty("width","0px");
      }, 400);
    });
    $btnD.addEventListener("click", ()=>{
         $btnD.classList.add("none");
         $btnA.classList.remove("none");
         $btnA.style.setProperty("animation","opacity-btn-red  1s ease");
         $article.style.setProperty("animation","opacity-off-bw  1s ease");      
         setTimeout(() => {
            $article.style.setProperty("display","none");
        }, 1000);
        if( $btnDx.classList.contains("none") == true & $btnDy.classList.contains("none") == true & $btnDz.classList.contains("none") == true){
                d.querySelector(".img-svgg").style.setProperty("width","380px");
                d.querySelector(".img-svgg").style.setProperty("animation","opacity-open-bw  1.1s ease");
         }       
    })  
    $svgOff.addEventListener("click", ()=>{
      $btnD.classList.add("none");
         $btnA.classList.remove("none");
         $btnA.style.setProperty("animation","opacity-btn-red  1s ease");
         $article.style.setProperty("animation","opacity-off-bw  1s ease-in-out");      
         setTimeout(() => {
            $article.style.setProperty("display","none");
        }, 1000);
        if( $btnDx.classList.contains("none") == true & $btnDy.classList.contains("none") == true & $btnDz.classList.contains("none") == true){
                d.querySelector(".img-svgg").style.setProperty("width","380px");
                d.querySelector(".img-svgg").style.setProperty("animation","opacity-open-bw  1.1s ease-in-out");
         }    
    })
};

export function btnContactar(a,b,x,y,z,a2,a3,a4){
  const d = document,
  $btnOnA = d.querySelector(a),     
  $section = d.querySelector(b),
  $sectionX = d.querySelector(x),
  $sectionY = d.querySelector(y),
  $sectionZ = d.querySelector(z),
  $btnOnA2 = d.querySelector(a2),
  $btnOnA3 = d.querySelector(a3),
  $btnOnA4 = d.querySelector(a4);
  $btnOnA.addEventListener("click", ()=>{
    $btnOnA.style.setProperty("background","rgb(248, 197, 29)");
    $section.style.setProperty("display","grid");
    $sectionX.style.setProperty("display","none");
    $sectionY.style.setProperty("display","none");
    $sectionZ.style.setProperty("display","none");
    $section.style.setProperty("animation","opacity-on 1s ease-in-out");
    $btnOnA2.style.setProperty("background","var(--main)");
    $btnOnA3.style.setProperty("background","var(--main)");
    $btnOnA4.style.setProperty("background","var(--main)");
  })
  
}

export function ctaBanner(a,b){
  const d = document,
    $ctaRegalo = d.getElementById(a),
    $formRegalo = d.querySelector(b);
    $ctaRegalo.addEventListener("click", ()=>{
        $formRegalo.classList.toggle("none");
        $formRegalo.style.setProperty("animation","opacity-on 1s ease-in-out");
        $ctaRegalo.classList.toggle("background-active");
      
     
    }) 
}
