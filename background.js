var canvas = new fabric.Canvas('mainBg')
var rect
    // "add" rectangle onto canvas
const colorArrays = [
    'green',
    'red',
    'indigo',
    'orange',
    'hotpink',
    'blue',
    'darkblue',
    'aliceblue',
    'violet',
    'aqua',
]
const mainItem = document.getElementById('mainItem')
const navStyle = document.querySelector('.bgStyle')
window.addEventListener('load', () => {
    navStyle.classList.add('styleNav')
    imagePre.innerHTML = colorArrays
        .map((color) => {
            return `
  <div id="colorId" style="background-color:${color};"  class=${color}>
  </div>
     `
        })
        .join('')

    let colorId = document.querySelectorAll('#colorId')
    for (let i = 0; i < colorId.length; i++) {
        colorId[i].addEventListener('click', (e) => {
            var canvasColor = e.target.className
            changeCanva(canvasColor)
        })
    }
})

function changeCanva(canvasColor) {
    canvas.remove(rect)
    rect = new fabric.Rect({
        left: 0,
        top: 0,
        fill: canvasColor,
        width: 900,
        height: 900,
    })
    canvas.add(rect)
}

document.getElementById('download').addEventListener('click', function(e) {
    let canvasUrl = canvas.toDataURL()
    const createEl = document.createElement('a')
    createEl.href = canvasUrl

    // This is the name of our downloaded file
    createEl.download = 'download-this-canvas'

    createEl.click()
    createEl.remove()
})

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