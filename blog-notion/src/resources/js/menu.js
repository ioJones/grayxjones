const menuIcon = document.querySelector('#hamburger'),
    menus = document.querySelector('#navItems'),
    closeMenu = document.querySelector('#closeMenu');
    console.log(menuIcon)

    menuIcon.addEventListener('click', revealMenu) 
    function revealMenu(){
      
      if (menus.classList.contains('hidden')) { 
        menus.classList.toggle('hidden');
        menus.style.left='120vw';
        menus.style.animation='fadeOut ease 0.5s'
    } else{
        menus.style.left='0'
        menus.classList.toggle('hidden')
        menus.style.animation='fadeIn ease 0.5s'
    }
        console.log(menus.classList);

    };

    closeMenu.addEventListener('click', revealMenu)