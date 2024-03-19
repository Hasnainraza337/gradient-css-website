let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let copy = document.querySelector(".copyCode")


let rgb1 = "#021B79"
let rgb2 = "#0575E6"


const hexavalue = () => {
    let myHexaValues = "0123456789abcdef"
    let colors = "#"
    for (let i = 0; i < 6; i++) {
        colors = colors + myHexaValues[Math.floor(Math.random() * 16)]
    }
    return colors
}

const handlebtn1 = () => {

    rgb1 = hexavalue()
    btn1.innerText = rgb1
    copy.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    btn1.style.backgroundColor = rgb1
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`

}



const handlebtn2 = () => {
    rgb2 = hexavalue()
    btn2.innerText = rgb2
    btn2.style.backgroundColor = rgb2
    copy.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
}


copy.addEventListener("click", () => {
    navigator.clipboard.writeText(copy.innerText)
    alert("Copied")
})



btn1.addEventListener("click", handlebtn1)
btn2.addEventListener("click", handlebtn2)