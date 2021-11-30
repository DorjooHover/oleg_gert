const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav ul li')
const page_nav = document.querySelectorAll('.page_nav ul li')
const page_nav_num = document.querySelectorAll('.page_nav_text')

let current = ''
window.addEventListener('scroll', () => {

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id')
        }
    })


    navLi.forEach(li => {
        li.classList.remove('active')
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })

    page_nav.forEach(li => {
        li.classList.remove('active')
        if (li.classList.contains(current)) {
            let page_num = document.querySelector(`.${current} div`)
            page_nav_num.forEach(nav => {
                nav.innerHTML = ''
            })
            page_num.innerHTML = ''
            document.querySelector('.arrow_up').style.opacity = '0'
            li.classList.add('active')
            if (current == 'home1') {
                page_num.innerHTML = '01'
                document.querySelector('.arrow_up').style.opacity = '0'
                document.querySelector('.arrow_down').style.opacity = '1'

            } else
            if (current == 'gallery1') {
                document.querySelector('.arrow_up').style.opacity = '1'

                document.querySelector('.arrow_down').style.opacity = '1'
                page_num.innerHTML = '02'
            } else if (current == 'blog1') {
                document.querySelector('.arrow_up').style.opacity = '1'
                document.querySelector('.arrow_down').style.opacity = '1'
                page_num.innerHTML = '03'
            } else {
                document.querySelector('.arrow_up').style.opacity = '1'
                document.querySelector('.arrow_down').style.opacity = '0'
                page_num.innerHTML = '04'
            }

        }
    })
})

function move_up() {
    if (current == 'gallery1') {
        document.querySelector('.move_up').href = '#home1'
    }
    if (current == 'blog1') {
        document.querySelector('.move_up').href = '#gallery1'
    }
    if (current == 'contacts1') {
        document.querySelector('.move_up').href = '#blog1'
    }
}

function move_down() {
    if (current == 'home1') {
        document.querySelector('.move_down').href = '#gallery1'
    }
    if (current == 'gallery1') {
        document.querySelector('.move_down').href = '#blog1'
    }
    if (current == 'blog1') {
        document.querySelector('.move_down').href = '#contacts1'
    }
}