const swiper = new Swiper('.swiper', {
  // Optional parameters
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});


