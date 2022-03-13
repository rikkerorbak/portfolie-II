$(() => {
   // mobile menu
   const burgerIcon = document.querySelector('#burger');
   const navbarMenu = document.querySelector('#nav-links')


   burgerIcon.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-active')

   })
})



//    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

