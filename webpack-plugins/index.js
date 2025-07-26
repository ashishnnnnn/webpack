import mountainImg from "./asset/mountain.webp";
import bridgeImg from "./asset/bridge.png";
import styles from "./styles/style.css"
import styles1 from "./styles/dummy.css"
import styles2 from "./styles/dummy1.css"



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

export function unused_fun() {
    console.log("unused_fun")
}

export function unused_fun1() {
    console.log("unused_fun1")
}

unused_fun()