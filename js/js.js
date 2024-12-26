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


