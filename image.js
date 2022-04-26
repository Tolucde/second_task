const imagesPre = document.getElementById('imagePre')
const mainItem = document.getElementById('mainItem')
const deleteIcon = document.getElementById('delete')
const download = document.getElementById('download')
const navStyle = document.querySelector('.imageStyle')
var alt
window.addEventListener('load', loadImages)

function loadImages() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        const images = JSON.parse(this.responseText).slice(0, 8)
        mapImages(images)
    }
    xhttp.open('GET', 'https://picsum.photos/v2/list')
        // xhttp.getResponseHeader('Content-type', 'application/json')
    xhttp.send()
    navStyle.classList.add('styleNav')
}

function mapImages(image) {
    imagesPre.innerHTML = image
        .map((pic) => {
            return `
     <div  id="imageId"  class="items">
     <img  src=${pic.download_url} id="image" alt=${pic.author}/>
     </div>
     `
        })
        .join('')
    let imageId = document.querySelectorAll('#image')
    for (let i = 0; i < imageId.length; i++) {
        imageId[i].addEventListener('click', (e) => {
            var selectedImage = e.target.currentSrc
            alt = e.target.alt
            mainItem.innerHTML = `
            <img src=${selectedImage} alt="" />
            `
        })
    }
}

//delete image

deleteIcon.addEventListener('click', () => {
    mainItem.innerHTML = `
    <p>Image Deleted
    `
    alt = ''
})

//download images

download.addEventListener('click', () => {
    var imageSrc = mainItem.firstElementChild.currentSrc

    downloadImage(imageSrc)
})
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = `${alt}'s image is being downloaded`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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