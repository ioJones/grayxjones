
const root = document.documentElement
    console.log(root.style.setProperty)


	let initialTheme = true

    function switchDark(){
        if(initialTheme){
			root.style.setProperty('--clr-pry', 'rgb(220, 220, 220)')
			root.style.setProperty('--clr-sec', 'rgb(33, 33, 33)')
			root.style.setProperty('--clr-accent-light', 'rgb(192, 114, 25)')
			root.style.setProperty('--clr-accent-dark', 'rgb(240, 172, 94)')
			root.style.setProperty('--clr-btn-hover', 'rgb(05, 05, 05)')
			root.style.setProperty('--clr-bg-light', 'rgb(44, 49, 55)')
            themeBtn.textContent='let there be light'
			console.log('dark',root)
			initialTheme = false
   		} else {
			root.style.setProperty('--clr-pry', 'rgb(33, 33, 33)')
			root.style.setProperty('--clr-sec', 'rgb(220, 220, 220)')
			root.style.setProperty('--clr-accent-light', 'rgb(240, 172, 94)')
			root.style.setProperty('--clr-accent-dark', 'rgb(192, 114, 25)')
			root.style.setProperty('--clr-btn-hover', 'rgb(05, 05, 05)')
			root.style.setProperty('--clr-bg-light', 'aliceblue')
            themeBtn.textContent='return to darkness'
			console.log('light',root)
			initialTheme = true

		}
	}

   const body = document.querySelector('body')
	const themeBtn = document.createElement('div')
    themeBtn.textContent='return to darkness'
    themeBtn.classList.add('themeSwitchBtn')
console.log('yes')
    body.appendChild(themeBtn)

    themeBtn.addEventListener('click',switchDark)


