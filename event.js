const gBtnNext = document.querySelector('.gallery_next')
const gBtnPrev = document.querySelector('.gallery_prev')
const body = document.querySelector('body')
const items = document.querySelector('.gallery_carousel_content_inner_item')
const item = document.querySelectorAll('.gallery_carousel_content_inner_items')
const moveX = document.querySelector('.moveX')
const g_show = document.querySelector('.show')
const g_back = document.querySelector('.gallery_carousel_close')
var len = 0,
    count = 1;

gBtnNext.addEventListener('click', event => {
    if (!body.classList.contains('event')) {
        body.classList.add('event')
    } else {
        len -= (100 / item.length)
        count++
        document.querySelector('.gallery_carousel_count_active').innerHTML = `${count}`
        console.log(len)
        items.style.transform = 'translate(' + (len) + '%)'
    }
});
gBtnPrev.addEventListener('click', event => {
    len += (100 / item.length)
    count--
    document.querySelector('.gallery_carousel_count_active').innerHTML = `${count}`
    items.style.transform = 'translate(' + (len) + '%)'

})
items.addEventListener('scroll', event => {
    console.log('asdf')
    if (pageXOffset > 0) {
        len -= (100 / item.length)
        count++
        document.querySelector('.gallery_carousel_count_active').innerHTML = `${count}`
        console.log(len)
        items.style.transform = 'translate(' + (len) + '%)'
    } else if (pageXOffset < 0) {
        len += (100 / item.length)
        count--
        document.querySelector('.gallery_carousel_count_active').innerHTML = `${count}`
        items.style.transform = 'translate(' + (len) + '%)'
    }
})
g_back.addEventListener('click', event => {

    body.classList.remove('event')
})