const menuIcon = document.querySelector('#hamburger'),
    menus = document.querySelector('#navItems');

    menuIcon.addEventListener('click', revealMenu = ()=>{
      
      if (menus.classList.contains('hidden')) { 
        menus.classList.toggle('hidden');
        menus.style.left='100%';
        menus.style.animation='fadeOut ease 0.5s'
    } else{
        menus.style.left='0'
        menus.classList.toggle('hidden')
        menus.style.animation='fadeIn ease 0.5s'
    }
        console.log(menus.classList);

    });