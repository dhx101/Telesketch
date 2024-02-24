const container = document.querySelector("#contenedor");

function createGrid(size) {
	for (let i = 1; i <= size; i++) {
		const divColumna = document.createElement("div");
		divColumna.classList.add("grid", "columna");
		container.appendChild(divColumna);
		for (let i = 1; i <= size; i++) {
			const divFila = document.createElement("div");
			divFila.classList.add("grid", "fila");
			divColumna.appendChild(divFila);
		}
	}
}

createGrid(8);

function deleteCube() {
	const grids = document.querySelectorAll(".columna");
	console.log(grids.length);
	for (let i = grids.length; i > 0; i--) {
		container.removeChild(container.lastChild);
	}
}

function changeGrid(element, colorElegido) {
	element.classList.remove("grey");
	element.classList.remove("black");
	element.classList.remove("red");
	element.classList.remove("blue");
	element.classList.remove("green");
	element.classList.remove("yellow");
	element.classList.add(colorElegido);
}

let color = "grey";

const ColorGrey = document.querySelector(".grey");
ColorGrey.addEventListener("click", () => {
	console.log("grey");
	color = "grey";
});
const ColorBlack = document.querySelector(".black");
ColorBlack.addEventListener("click", () => {
	console.log("black");
	color = "black";
});
const ColorRed = document.querySelector(".red");
ColorRed.addEventListener("click", () => {
	console.log("red");
	color = "red";
});
const ColorBlue = document.querySelector(".blue");
ColorBlue.addEventListener("click", () => {
	console.log("blue");
	color = "blue";
});
const ColorGreen = document.querySelector(".green");
ColorGreen.addEventListener("click", () => {
	console.log("green");
	color = "green";
});
const ColorYellow = document.querySelector(".yellow");
ColorYellow.addEventListener("click", () => {
	console.log("yellow");
	color = "yellow";
});

const inputBtn = document.querySelector(".sendBtn");
const inputSize = document.querySelector("#size");
inputBtn.addEventListener("click", () => {
	deleteCube();
	createGrid(inputSize.value);
	const grid = document.querySelectorAll(".fila");
	console.log(grid);
	grid.forEach((fila) => {
		console.log(fila);
		fila.addEventListener("mouseover", () => {
			changeGrid(fila, color);
		});
	});
});

const grid = document.querySelectorAll(".fila");
console.log(grid);
grid.forEach((fila) => {
	console.log(fila);
	fila.addEventListener("mouseover", () => {
		changeGrid(fila, color);
	});
});
