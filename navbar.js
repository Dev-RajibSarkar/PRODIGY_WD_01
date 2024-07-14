const header = document.querySelector("header");
      const hamburgerBtn = document.querySelector("#hamburger-btn");
      const closeMenuBtn = document.querySelector("#close-menu-btn");

      // Toggle mobile menu on hamburger button click
      hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

      // Close mobile menu on close button click
      closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

      window.addEventListener('scroll',() => {
      const navbar = document.querySelector('.navbar');
        if(window.scrollY > 0){
           navbar.style.backgroundColor = '#e6b21d';
        }
       else{
           navbar.style.backgroundColor = '#d0909f';
      }
})