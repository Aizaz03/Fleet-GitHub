document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = tab.getAttribute("data-tab");

      // Remove active classes
      tabs.forEach((t) => t.classList.remove("tab-active"));
      contents.forEach((content) => content.classList.remove("content-active"));

      // Add active classes to the clicked tab and corresponding content
      tab.classList.add("tab-active");
      document.getElementById(target).classList.add("content-active");
    });
  });

  // Set the first tab as active by default
  tabs[0].classList.add("tab-active");
  contents[0].classList.add("content-active");
});

$(document).ready(function () {
  // Swiper: Slider
  new Swiper(".second-swiper-container", {
    loop: true,
    nextButton: ".swiper-button-nex",
    prevButton: ".swiper-button-pre",
    paginationClickable: true,
    spaceBetween: 20,
    slidesPerView: 4,
    slidesToScroll: 1,
    breakpoints: {
      1440: {
        slidesPerView: 4,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1.2,
        slidesToScroll: 1,
        spaceBetween: 10,
      },
    },
  });
});
$(document).ready(function () {
  // Swiper: Slider
  new Swiper(".swiper-container", {
    loop: true,
    nextButton: ".swiper-button-nex",
    prevButton: ".swiper-button-pre",
    paginationClickable: true,
    spaceBetween: 20,
    slidesPerView: 3,
    slidesToScroll: 1,
    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1.2,
        slidesToScroll: 1,
        spaceBetween: 10,
      },
    },
  });
});
$(document).ready(function () {
  // Swiper: Slider
  new Swiper(".third-swiper-container", {
    loop: true,
    nextButton: ".swiper-button-nex",
    prevButton: ".swiper-button-pre",
    paginationClickable: true,
    spaceBetween: 20,
    slidesPerView: 4,
    slidesToScroll: 1,
    breakpoints: {
      1440: {
        slidesPerView: 4.7,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.6,
        slidesToScroll: 1,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 1.2,
        slidesToScroll: 1,
        spaceBetween: 10,
      },
    },
  });
});
