var typed = new Typed(".type", {
    Strings:["Developer","Programmer","Fullstack"],
    typeSpeed: 70,
    backSpeed: 100,
    loop: true    
});


var typed = new Typed(".type-2",{
    Strings:["Developer"],
    typeSpeed: 70,
    backSpeed: 100,
    loop: true,    
});




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spacebeetween: 40,
  Grabecusor: true,
  loop: true,
  
 

  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    navigation: true,
    
    

  },
});



const header = document.querySelector('.header-container');
const scrollBtn = document.querySelector(".scroll-top");
// const menuBar = document.querySelector("#bar");
// // const closeBtn = document.querySelector("#closebtn")
// // const menu = document.querySelectorAll("#menu");

// // menuBar.addEventListener("click" , () => {
// //  menu.classList.add("show");
// //   console.log('clicked');
// // })


window.addEventListener('scroll' , () => {
  console.log('scrolling');
  scrollY > 20 ? header.classList.add('sticky') : header.classList.remove('sticky');
//   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     scrollBtn.style.opacity = 1;
//     scrollBtn.style.transform = 'translateY(-20px)'
//   }else{
//      scrollBtn.style.opacity = 0;
//      scrollBtn.style.transform = "translateY(0)";
//   }
// })

//  scrollBtn.addEventListeneTop('click', () =>  {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
})

 