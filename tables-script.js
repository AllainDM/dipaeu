console.log("Скрипт странички с таблицами успешно загружен")

const img = document.getElementById("img");
const buildings = document.getElementById("buildings");

buildings.addEventListener("click",() => {
    img.src="tables/buildings.png"
})
