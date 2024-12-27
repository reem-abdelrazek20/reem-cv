let serch=document.querySelectorAll(".header li")
let cards =document.querySelectorAll(".page section ")



serch.forEach((el)=>{
    el.addEventListener("click",function () { 
        serch.forEach((el)=>{
           el.classList.remove("active")
           this.classList.add("active")
        })
let key=el.getAttribute('data-serch');
       cards.forEach((card)=>{
        card.classList.remove("d-none")
        if (card.classList.contains(key)&& el.classList.contains("active")) 
        {card.classList.add("d-block")
            
        } else {card.classList.add("d-none")
            
        }
          let position = -300
        let opacity=0
        const fadeIn = setInterval(() => {
            if (opacity < 1) {
              opacity += 0.05; // زيادة الشفافية تدريجيًا
              card.style.opacity = opacity;
              position += 15; // تحريك النص باتجاه اليمين
            card.style.left = `${position}px`;
            } else {
              clearInterval(fadeIn); // إنهاء التحريك
            }
          }, 30);
       })
  
    })
})
window.addEventListener("DOMContentLoaded",()=>{
    let home=document.querySelector(" .header .fs")
    if (home) {home.click()
        
    }
   
}) 
let show=document.querySelector(".show")
let header=document.querySelector(".headera")
let hide=document.querySelector(".hdie")
show.addEventListener("click",function () {
     header.classList.remove("d-none");
    header.classList.add("d-block")
    
});
hide.addEventListener("click",function () {
    header.classList.remove("d-block");
    header.classList.add("d-none")
})


