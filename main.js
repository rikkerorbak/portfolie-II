$(() => {
   // mobile menu
   const burgerIcon = document.querySelector('#burger');
   const navbarMenu = document.querySelector('#nav-links')

   burgerIcon.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-active')
   })

   let brandImg = document.querySelector('#brand-img');

   let normalSrc = "./assets/rro.png"
   let hoverSrc = "./assets/rro-pink.png"

   brandImg.addEventListener('mouseenter', () => {
      brandImg.setAttribute('src', hoverSrc);
   })

   brandImg.addEventListener('mouseleave', () => {
      brandImg.setAttribute('src', normalSrc);
   })


})


