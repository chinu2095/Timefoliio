const gallery = document.getElementById("gallery");

window.addEventListener('mousemove',(e) => {
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
})
const dot = document.querySelector('.dot');

window.addEventListener('mousemove',(e) => {
  dot.style.display = 'block';
  dot.style.boxShadow = "5px 5px 45px rgba(1, 0, 0, 0)";
  const dream = document.querySelector('.dream-section');
  dream.addEventListener('mouseenter',()=>{
    dot.style.backgroundColor = 'orange';
  })
  dream.addEventListener('mouseleave',()=>{
    dot.style.backgroundColor = 'black';
 
  })
  const mouseX = e.clientX,
        mouseY = e.clientY;

dot.animate({
transform: `translate(${mouseX-10}px, ${mouseY-10}px)`

}, {
duration: 500,
fill: "forwards",
easing: "ease"
})
});
dot.style.boxShadow = "0px 0px 0px ";

document.addEventListener("DOMContentLoaded", ()=>{

  const name = document.querySelector(".name-section");
  const innerHeight = (window.innerHeight / 100) * 25;
  console.log(innerHeight);

  setTimeout(() => {
    name.animate({transform:`translate(${0}px, ${innerHeight}px)`},{duration: 1500, fill:"forwards",  easing:"ease"});

  }, 4000);

});


document.addEventListener("DOMContentLoaded", ()=>{

      const button = document.querySelector(".close-button");

      if(button){
            button.addEventListener("click",()=>{
                  button.closest(".notification").style.display = "none";
            }
            )
      } else{
            console.log("something went wrong");
      }
});

/// Dream section 
document.addEventListener('DOMContentLoaded',()=>{
    const dream = document.querySelector('.dreamzz');


  dream.addEventListener('click',()=>{
    console.log("clicked");
    dreamSection.classList.toggle('running');
  })

})



/// pixle gradient /////////////
document.addEventListener("DOMContentLoaded", ()=>{
  const pixle = document.querySelector('.pixle-gradient');
  console.log(pixle);
  const pix = 0;
  
  pixle.innerHTML = '<div class="h-[10px] w-[10px] bg-blue-500 border-[1px] "></div>';

})


function displayError(message){
  const errordisplay = document.createElement("p");
  errordisplay.textContent = message;
  errordisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errordisplay);

}

