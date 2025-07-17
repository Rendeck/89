AOS.init();
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      autoplay: { delay: 5000 },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    })

    function toggleInfo(infoId) {
      const infoSection = document.getElementById(infoId);
      if (infoSection.style.display === "none") {
          infoSection.style.display = "block";
      } else {
          infoSection.style.display = "none";
      }
  }