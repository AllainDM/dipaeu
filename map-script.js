console.log("Скрипт странички с картами успешно загружен")

const img = document.getElementById("map1");
const igroki = document.getElementById("igroki");
const polit = document.getElementById("polit");
const resources = document.getElementById("resources");
const ethic = document.getElementById("ethic");
const religion = document.getElementById("religion");

igroki.addEventListener("click",() => {
    img.src="maps/igroki.png"
})

polit.addEventListener("click",() => {
    img.src="maps/polit.png"
})

resources.addEventListener("click",() => {
    img.src="maps/resources.png"
})

ethic.addEventListener("click",() => {
    img.src="maps/ethic.png"
})

religion.addEventListener("click",() => {
    img.src="maps/religion.png"
})