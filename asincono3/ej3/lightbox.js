const imgList = document.querySelectorAll(`.img`)
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector(`.grande`)
let closeBtn = document.querySelector(`.close`)

// Funciones
const closeBtnHandler = ()=> lightbox.classList.remove(`isActive`)
const imgListHandler = (index) => {

        lightbox.classList.add(`isActive`)
        grande.src = imgList[index].src
    }


imgList.forEach((eachImg, index) =>{
    imgList[index].addEventListener(`click`,()=>{
        imgListHandler(index)
    })
})

closeBtn.addEventListener(`pointerdown`, closeBtnHandler)
