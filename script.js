const gallery = document.getElementById("gallery");

window.onmousemove = (e) => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth +300,
        maxY = gallery.offsetHeight - window.innerHeight+300 ;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}

document.addEventListener("DOMContentLoaded", ()=>{

      const button = document.querySelector(".close-button");

      if(button){
            button.addEventListener("click",()=>{
                  console.log("clicked");
                  button.closest(".notification").style.display = "none";
            }
            )
      } else{
            console.log("something went wrong");
      }
});
