import mountainImg from "./asset/mountain.webp";
import bridgeImg from "./asset/bridge.png";
import styles from "./styles/style.css"

const mountain = document.getElementById("mountiain")
const bridge = document.getElementById("bridge")

mountain.style.visibility = 'hidden'
bridge.style.visibility = 'hidden'

console.log("i am running")

document.getElementById("button").addEventListener("click", () => {
    mountain.style.visibility = 'visible'
    bridge.style.visibility = 'visible'
    mountain.src = mountainImg
    bridge.src = bridgeImg
})