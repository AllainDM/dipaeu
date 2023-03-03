console.log("Скрипт странички с таблицами успешно загружен")

const img = document.getElementById("img");
const buildings = document.getElementById("buildings");
const fpvp = document.getElementById("fpVp");
const size = document.getElementById("size");
const hRE = document.getElementById("hRE");

buildings.addEventListener("click",() => {
    img.src="tables/buildings.png"
    img.style.width = "100%"
    img.style.height = "100%"
});

fpvp.addEventListener("click",() => {
    img.src="tables/FP.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

size.addEventListener("click",() => {
    img.src="tables/size.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});

hRE.addEventListener("click",() => {
    img.src="tables/СРИ.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});