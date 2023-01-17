const tela = document.querySelector('.tela')
const btn = document.querySelector('.btn-menu')
const navbar = document.querySelector('.navbar')

btn.addEventListener('click', handleMenuClick)

function handleMenuClick(event) {
    event.stopPropagation()

    function showMenu() {
        if (!navbar.classList.contains('active')) {
            navbar.classList.add('active')
            btn.firstChild.src = "./images/icon-menu-close.svg"
            tela.classList.add('active')
        } else {
            navbar.classList.remove('active')
            btn.firstChild.src = "./images/icon-menu.svg"
            tela.classList.remove('active')

        }
    }
    showMenu()

    handleClickOutside(navbar, showMenu)
}

function handleClickOutside(targetElement, callback) {
    const html = document.documentElement

    function handleHTMLClick(event) {
        if (!targetElement.contains(event.target)) {
            html.removeEventListener('click', handleHTMLClick)
            targetElement.removeAttribute("data-target")
            callback()
        }
    }

    if (!targetElement.hasAttribute('data-target')) {
        html.addEventListener('click', handleHTMLClick)
        targetElement.setAttribute('data-target', "")
    }
}
