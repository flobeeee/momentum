const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")
console.log(bgImage) // <img>

bgImage.src = `img/${chosenImage}`
console.log(bgImage) // <img src="img/2.jpg">

document.body.appendChild(bgImage)