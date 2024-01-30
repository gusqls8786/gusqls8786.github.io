const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//--------------------------------------

let backColor = document.querySelectorAll("[data-bgcolor]");
console.log(backColor);

backColor.forEach((colorSection, i) => {
  let prevBg = i === 0 ? "" : backColor[i - 1].dataset.backColor;

  ScrollTrigger.create({
    trigger: colorSection,
    start: "top 50%",
    end: "bottom 5%",

    onEnter: () =>
      gsap.to("#contents", {
        backgroundColor: colorSection.dataset.bgcolor,
      }),
    onLeaveBack: () =>
      gsap.to("#contents", {
        backgroundColor: prevBg,
      }),
  });
});

const horSection = gsap.utils.toArray(".port_desc .port");

const horiz = gsap.to(horSection, {
  xPercent: -45 * (horSection.length - 1),
  scrollTrigger: {
    trigger: "#section4",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin: true,
  },
});

let executed = false;

function animateSkills() {
  document.querySelectorAll(".skill-per").forEach((perElement) => {
    gsap.to(perElement, {
      duration: 5,
      width: perElement.getAttribute("per") + "%",
      onUpdate: function () {
        console.log(perElement.style.width);
        perElement.setAttribute(
          "per",
          Math.ceil(this.progress() * parseInt(perElement.style.width)) + "%"
        );
      },
    });
  });
}

ScrollTrigger.create({
  trigger: "#section4_5",
  start: "top top",
  onEnter: () => {
    if (!executed) {
      animateSkills();
      executed = true;
    }
  },
});

//--------------------------------------------my motto

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".about_intro .text div").forEach(createSpan);

  var tl = gsap.timeline();

  document
    .querySelectorAll(".about_intro .text div span")
    .forEach((span, i) => {
      tl.to(span, { autoAlpha: 1, duration: 0.1 }, i * 0.1);
    });
});

function createSpan(element) {
  let textContent = element.textContent.split("");
  let spanWrappedText = textContent
    .map((char) => {
      return `<span style="opacity: 0;">${char}</span>`;
    })
    .join("");

  element.innerHTML = spanWrappedText;
}

//--------------------------------------------

// --------------------------------- scroll to section3

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".about_intro .text div").forEach(createSpan);

  var tl = gsap.timeline({
    onComplete: function () {
      scrollToSection2();
    },
  });

  document
    .querySelectorAll(".about_intro .text div span")
    .forEach((span, i) => {
      tl.to(span, { autoAlpha: 1, duration: 0.1 }, i * 0.1);
    });
});

function createSpan(element) {
  let textContent = element.textContent.split("");
  let spanWrappedText = textContent
    .map((char) => {
      return `<span style="opacity: 0;">${char}</span>`;
    })
    .join("");

  element.innerHTML = spanWrappedText;
}

function scrollToSection2() {
  var section2 = document.querySelector("#section3");
  var section2Top = section2.offsetTop;

  window.scrollTo({ top: section2Top, behavior: "smooth" });
}

// ----------------------------------- scroll to section3 end

// ----------------------------------------- dark_mode start

document.addEventListener("DOMContentLoaded", function () {
  var switchInput = document.querySelector(".switch .input");
  var body = document.body;

  
  body.classList.add("dark-theme");

  switchInput.addEventListener("change", function () {
    if (this.checked) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    }
  });
});

// --------------------------------------------- dark_mode end

document.getElementById("like-button").addEventListener("change", function () {
  if (this.checked) {
    Swal.fire({
      title: "감사합니다!",
      text: "Thank you for press this button!",
      icon: "success",
      confirmButtonText: "닫기",
    });
  }
});

// ------------------------------------------------ change images start

let currentIndex = 0;
const images = document.querySelectorAll(".slider-image");
const totalImages = images.length;

images[0].classList.add("active"); 

function changeImage() {
  images[currentIndex].classList.remove("active"); 
  currentIndex = (currentIndex + 1) % totalImages; 
  images[currentIndex].classList.add("active"); 
}


setInterval(changeImage, 3000);

// ----------------------------------------------------- change image end

// ----------------------------------------- project preview start
let tl = gsap.timeline({
  scrollTrigger: {
    duration: 0.1,
    trigger: "#s4preview",
    start: "top top",
    end: "+=3000",
    scrub: true,
  },
});



gsap.to("#s4preview", {
  scrollTrigger: {
    duration: 0.1,
    trigger: "#s4preview",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
  },
});

tl.to("#s4preview ul", {
  duration: 0.1,
  rotate: 30,
  duration: 0.1 
});


tl.to("#s4preview ul", {
  duration: 0.1,
  rotate: -360,
  width: "50vw",
  height: "50vw",
  duration: 0.1, 
  immediateRender: false 
}); 

tl.to(
  "#s4preview ul li", {
    duration: 0.1,
    borderRadius: 60,
  },
  "<"
);

tl.to("#s4preview ul li", {
  duration: 0.1,
  width: "39%",
  height: "39%",
  margin: "1%",
});


tl.to("#s4preview ul", {
  duration: 0.1,
  width: "70vw",
  height: "39.725vw",
});

tl.to("#s4preview ul li .cont", {
  opacity: 1
},"<");

tl.to("#s4preview ul li .s4text", {
  opacity: 1
},"<");

// ----------------------------------------- project preview end

