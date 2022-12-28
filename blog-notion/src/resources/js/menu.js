const navInject = document.querySelector('#menuItems')
console.log(navInject)
navInject.innerHTML = ` <!-- <div id="logo">LOGO</div> -->
<a href="/"> 
<svg class="headerLogo" width="100" height="100" viewBox="0 0 100 100" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path class="logo" fill-rule="evenodd" clip-rule="evenodd"
        d="M94.9153 5.08475H5.08475V94.9153H94.9153V5.08475ZM0 0V100H100V0H0Z" fill="white" />
    <path class="logo"
        d="M89.8305 10.3814H10.3814V89.6186L40.1483 89.7246V74.6822H25.2119V25.2119H75.1059V40.2542H89.8305V10.3814Z"
        fill="white" />
    <path class="logo"
        d="M45.2331 89.7246V64.9364H60.2754V74.6822H74.8941V59.9576H65.2542V45.339H89.8305V89.7246H45.2331Z"
        fill="white" />
</svg>
</a>
<ul id="navItems">
    <div id="closeMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

    </div>

    <li class="menu"><a class="btn btn-pry" href="/">Home</a></li>
    <li class="menu"><a class="btn btn-pry" href="/portfolio/">Portfolio</a></li>
    <li class="menu"><a class="btn btn-pry" href="/about/">About</a></li>
    <li class="menu"><a class="btn btn-pry" href="/blog/">Blog</a></li>
    <button class="btn btn-sec">Get in touch</button>
</ul>
<div id="hamburger">
    <div class="ham"></div>
    <div class="ham"></div>
    <div class="ham"></div>
</div>
`




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