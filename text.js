var canvas = new fabric.Canvas('canvas')
const deleteBtn = document.getElementById('deleteText')
var textSize = 60
var defaultText
var text
    // "add" rectangle onto canvas
    // const mainItem = document.getElementById('mainItem')
const navStyle = document.querySelector('.textStyle')
window.addEventListener('load', () => {
    navStyle.classList.add('styleNav')
})

const heading = document.getElementById('heading')
const subheading = document.getElementById('subheading')
const bodyText = document.getElementById('bodyText')
const fontId = document.getElementById('fontSelect')
console.log(fontId.value)
const addText = document.querySelectorAll('.addText')

for (let i = 0; i < addText.length; i++) {
    // var defaultText = addText[i].textContent
    addText[i].addEventListener('click', (e) => {
        defaultText = addText[i].textContent
        addCanvas(defaultText, textSize)
    })
}

function addCanvas(defaultText, textSize) {
    canvas.remove(text)

    text = new fabric.Textbox(defaultText, {
        width: 450,
        fontSize: textSize,
    })

    canvas.add(text)
}

addCanvas('defaultText', textSize)

//delete text

deleteBtn.addEventListener('click', () => {
    addCanvas('')
})

function changeFontSize() {
    textSize = fontId.value
    addCanvas(defaultText, textSize)
}

//sidebar
const menuBtn = document.getElementById('menu')
const closeBtn = document.getElementById('close')
const main = document.getElementById('main')
const sidebar = document.getElementById('sidebar')

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('openSide')
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('openSide')
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'block'
})