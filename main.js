const menuIcon = document.querySelector('#hamburger'),
    menus = document.querySelector('nav');

    menuIcon.addEventListener('click', revealMenu = ()=>{
        menus.classList.toggle('hidden');
        console.log(menus.classList);

    })