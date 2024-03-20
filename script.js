//Toggle Menu
  function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      setTimeout(function() {
        menu.style.display = "none";
        overlay.style.display = "none";
      }, 300);
    } else {
      menu.style.display = "block";
      overlay.style.display = "block";
      setTimeout(function() {
        menu.classList.add("active");
      }, 10);
    }
  }

  function closeMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    menu.classList.remove("active");
    setTimeout(function() {
      menu.style.display = "none";
      overlay.style.display = "none";
    }, 300);
  }

  function closeMenuAndFocus() {
    closeMenu();
    document.getElementById("toggleMenuBtn").focus();
  }


// Slider
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  showSlide(slideIndex);
  
  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }
  
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function showSlide(n) {
    for (const slide of slides) {
      slide.style.display = "none";
    }
    slides[n].style.display = "flex";
  }

// Scroll Top
  function scrollToTop() {
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, Math.floor(document.documentElement.scrollTop * .93));
    }
}



// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionBody = header.nextElementSibling;
    header.classList.toggle('active');
    accordionBody.classList.toggle('active');
  });
});