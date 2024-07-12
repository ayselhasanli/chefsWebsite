const openNavBtn = document.getElementById("openNav");
const closeNavBtn = document.getElementById("closeNav");
const navMenu = document.getElementById("navMobileMenu");
const header = document.getElementById("header")
const pageNavBtn = document.getElementById("pageNavigation");

let swiper = new Swiper(".servicesSwiper.mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    536: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

let teamSwiper = new Swiper(".teamSwiper.mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    }, 
    600: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1157: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

openNavBtn.onclick = () => {
  navMenu.style.right = "0";
};

closeNavBtn.onclick = () => {
  navMenu.style.right = "-35rem";
};


window.addEventListener("scroll", () => {
  window.scrollY > 500 ? header.classList.add("sticky") : header.classList.remove("sticky");
});


function scrollTopofPage () {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

pageNavBtn.onclick = scrollTopofPage