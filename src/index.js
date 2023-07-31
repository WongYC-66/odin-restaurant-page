import { home }  from "./home"
import { menu } from "./menu"
import { contact } from "./contact"

const body = document.querySelector('body')
const container = document.createElement('div')
container.id = 'content'
const btnArea = document.createElement('div')
btnArea.classList.add('button-area')
// create nav button
const mainBtn = document.createElement('div')
mainBtn.textContent = 'Home'
mainBtn.id = 'mainBtn'

const menuBtn = document.createElement('div')
menuBtn.textContent = 'Menu'
menuBtn.id = 'menuBtn'

const contactBtn = document.createElement('div')
contactBtn.textContent = 'Contact'
contactBtn.id = 'contactBtn'

// append
body.appendChild(container)
btnArea.append(mainBtn, menuBtn, contactBtn)
document.querySelector('body').insertBefore(btnArea, container)


// click to switch component
window.addEventListener('DOMContentLoaded', () => {
    mainBtn.addEventListener('click', () => {
        container.innerHTML = '' ;
        console.log('loading main page ...')
        home()
    })
    menuBtn.addEventListener('click', () => {
        container.innerHTML = '' ;
        console.log('loading menu page...')
        menu()
    })
    contactBtn.addEventListener('click', () => {
        container.innerHTML = '' ;
        console.log('loading contact page ...')
        contact()
    })

})


//
contact()