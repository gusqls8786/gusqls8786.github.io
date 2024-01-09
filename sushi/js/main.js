
let scrollHeader = () => {
  let header = document.querySelector("#header");

  scrollY >= 50 ?
      header.classList.add("bg-header") :
      header.classList.remove("bg-header");

};


window.addEventListener("scroll", scrollHeader);

let themeButton = document.getElementById("theme-button");
let iconTheme = "ri-sun-foggy-line";
let darkTheme = "dark-theme";

let getCurrentTheme = () => {
  let result = document.body.classList.contains(darkTheme) ?
      "dark" :
      "light";
  return result;
};
let getCurrentIcon = () => {
  let result = themeButton.classList.contains(iconTheme) ?
      "ri-moon-clear-fill" :
      "ri-sun-foggy-line"

  return result;
}


themeButton.addEventListener('click', () => {

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());

})




let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
console.log(selectedTheme)

if (selectedTheme) {
  if (selectedTheme == "dark") {
      document.body.classList.add(darkTheme)
  } else {
      document.body.classList.remove(darkTheme)
  }

  if (selectedIcon == "ri-moon-clear-fill") {
      themeButton.classList.add(iconTheme)
  } else {
      themeButton.classList.remove(iconTheme)
  }
}

let navToggle = document.getElementById("nav_toggle");
let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("nav_close")

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu")
})
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu")
})

ScrollReveal().reveal('.home_data, .home_img, .about_data, .about_img, .popular_card, .recently_data, .recently_img, .home_leaf-1, .recently_leaf-1, .home_leaf-2, .about_leaf, .recently_leaf-2,.footer_description,.footer_content,.footer_info',{
  delay: 400,
  duration: 2500,
  origin: 'top',
  distance: '60px',
  reset: true, //false
});

ScrollReveal().reveal('.home_data', {
  origin: 'bottom',
});

ScrollReveal().reveal('.about_data, .recently_data, .home_leaf-1, .recently_leaf-1', {
  origin: 'left',
});

ScrollReveal().reveal('.about_img, .recently_img, .home_leaf-2, .about_leaf, .recently_leaf-2', {
  origin: 'right',
});
ScrollReveal().reveal('.popular_card', {
  origin: 'top',
  interval: 400,
});



/* scrollup */
let scrollup=()=>{
  let scrollup=document.getElementById('scroll-up')
  pageYOffset>=350?
  scrollup.classList.add('show-scroll')
  :scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollup)


//menu
let scrollActive=()=>{
  let scrollY=pageYOffset;

  let sections=document.querySelectorAll('section[id]');
  //console.log(sections)
  sections.forEach((current)=>{
      let sectionHeight=current.offsetHeight;
      let sectionTop=current.offsetTop - 60;

      let sectionId=current.getAttribute('id');
      console.log(sectionId)

      let sectionClass=document.querySelector(`.nav_menu a[href*="${sectionId}"]`)
      console.log(sectionClass)

     if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
     }else{
      sectionClass.classList.remove('active-link')
     }



  })

}

window.addEventListener("scroll",scrollActive)