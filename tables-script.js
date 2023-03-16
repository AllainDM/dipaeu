console.log("Скрипт странички с таблицами успешно загружен")

const img = document.getElementById("img");
const buildings = document.getElementById("buildings");
const fpvp = document.getElementById("fpVp");
const size = document.getElementById("size");
const hRE = document.getElementById("hRE");
const fp2 = document.getElementById("fp2");
const tech = document.getElementById("tech");
const etnosy = document.getElementById("etnosy");
const religion = document.getElementById("religion");
const cult_tradition = document.getElementById("cult_tradition");


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

tech.addEventListener("click",() => {
    img.src="tables/tech.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

fp2.addEventListener("click",() => {
    img.src="tables/FP2.jpg"
    img.style.width = "80%"
    img.style.height = "80%"
});

etnosy.addEventListener("click",() => {
    img.src="tables/etns.png"
    img.style.width = "60%"
    img.style.height = "60%"
});

religion.addEventListener("click",() => {
    img.src="tables/religion.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

cult_tradition.addEventListener("click",() => {
    img.src="tables/cult_tradition.png"
    img.style.width = "75%"
    img.style.height = "75%"
});