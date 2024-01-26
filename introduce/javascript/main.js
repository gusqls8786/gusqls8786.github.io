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
  xPercent: -30 * (horSection.length - 1),
  scrollTrigger: {
    trigger: ".port_desc",
    start: "top 20%",
    end: "+=1500",
    scrub: 1,
    pin: true,
  },
});

let executed = false;

function animateSkills() {
  document.querySelectorAll(".skill-per").forEach((perElement) => {
    gsap.to(perElement, {
      duration: 2,
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
  trigger: ".main",
  start: "top 30%",
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

  switchInput.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
    } else {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
    }
  });
});

// --------------------------------------------- dark_mode end

document.getElementById('like-button').addEventListener('change', function() {
  if (this.checked) {
    Swal.fire({
      title: '감사합니다!',
      text: 'Thank you for press this button!',
      icon: 'success',
      confirmButtonText: '닫기'
    });
  }
});

// ------------------------------------------------ change images start 

let currentIndex = 0;
const images = document.querySelectorAll(".slider-image");
const totalImages = images.length;

images[0].classList.add("active"); // 첫 번째 이미지 활성화

function changeImage() {
    images[currentIndex].classList.remove("active"); // 현재 이미지 비활성화
    currentIndex = (currentIndex + 1) % totalImages; // 다음 이미지 인덱스로 이동
    images[currentIndex].classList.add("active"); // 다음 이미지 활성화
}

// 3초마다 이미지 변경
setInterval(changeImage, 3000);

// ----------------------------------------------------- change image end

