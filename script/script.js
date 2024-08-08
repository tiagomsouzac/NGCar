const MENUCONTENT = document.querySelectorAll(".menu-content")

const HOME = document.querySelector(".home")
const SERVICE = document.querySelector(".service")
const ABOUT = document.querySelector(".about")
const CONTACT = document.querySelector(".contact")

//  functions
contents = (content) => {
    switch(content){
        case 'Página inicial':
            HOME.style.display= 'block'
            
            SERVICE.style.display= 'none'
            ABOUT.style.display= 'none'
            CONTACT.style.display= 'none'
            break

        case 'Serviços':
            SERVICE.style.display= 'block'

            ABOUT.style.display= 'none'
            CONTACT.style.display= 'none'
            HOME.style.display= 'none'
            break

        case 'Quem somos':
            ABOUT.style.display= 'block'

            HOME.style.display= 'none'
            CONTACT.style.display= 'none'
            SERVICE.style.display= 'none'
            break

        case 'Contato':
            CONTACT.style.display= 'block'
            
            HOME.style.display= 'none'
            ABOUT.style.display= 'none'
            SERVICE.style.display= 'none'
            break
    }
}

//  events

MENUCONTENT.forEach((key) => {
    key.addEventListener("click", (e) => {
        contents(key.textContent)
    })
})