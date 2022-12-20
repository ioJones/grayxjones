const menuIcon = document.querySelector('#hamburger'),
    menus = document.querySelector('#navItems');

    menuIcon.addEventListener('click', revealMenu = ()=>{
        menus.classList.toggle('hidden');
        console.log(menus.classList);

    })