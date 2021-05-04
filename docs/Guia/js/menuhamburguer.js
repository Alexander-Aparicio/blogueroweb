export function activar (w,x,y,z){
    const d = document;
    d.addEventListener("click", (e)=>{
      if(e.target.matches(w)|| e.target.matches(`${w} *`)){
        d.querySelector(x).classList.toggle("none");
        d.querySelector(y).classList.toggle("none");
        d.querySelector(z).classList.toggle("trasladar");
      }
    })
  };
  export function activarSubmenu (w,y,x){
    const d = document,
      $onSubmenu = d.querySelector(w),
      $offSubmenu = d.querySelector(y),
      $subMenu = d.querySelector(x);
      $onSubmenu.addEventListener("click", ()=>{
          $onSubmenu.classList.add("none");
          $offSubmenu.classList.remove("none");
          $subMenu.classList.remove("none");
          $subMenu.style.setProperty("animation","opacity-open-bw-ab 1s ease-in-out");
      });
      $offSubmenu.addEventListener("click", ()=>{
        $offSubmenu.classList.add("none");
        $onSubmenu.classList.remove("none");
        setTimeout(() => {
          $subMenu.classList.add("none");
        }, 500);
        $subMenu.style.setProperty("animation","opacity-off-bw-ar .5s ease-in-out");
      })
  };
  