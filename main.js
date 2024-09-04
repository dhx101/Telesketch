const container = document.querySelector("#contenedor");

// Funcion para el grid
function createGrid(size) {
	for (let i = 1; i <= size; i++) {
		const divColumna = document.createElement("div");
		divColumna.classList.add("grid", "columna");
		container.appendChild(divColumna);
		for (let j = 1; j <= size; j++) {
			const divFila = document.createElement("div");
			divFila.classList.add("grid", "fila");
			divColumna.appendChild(divFila);
		}
	}
}

// Funcion para elimiar el grid
function deleteCube() {
	const grids = document.querySelectorAll(".columna");
	console.log(grids.length);
	for (let i = grids.length; i > 0; i--) {
		container.removeChild(container.lastChild);
	}
}

// Funcion para cambiar el color del grid
function changeGrid(element, colorElegido) {
	element.classList.remove("grey", "black", "red", "blue", "green", "yellow");
	element.classList.add(colorElegido);
}

let color = "grey";

const ColorGrey = document.querySelector(".grey");
ColorGrey.addEventListener("click", () => (color = "grey"));

const ColorBlack = document.querySelector(".black");
ColorBlack.addEventListener("click", () => (color = "black"));

const ColorRed = document.querySelector(".red");
ColorRed.addEventListener("click", () => (color = "red"));

const ColorBlue = document.querySelector(".blue");
ColorBlue.addEventListener("click", () => (color = "blue"));

const ColorGreen = document.querySelector(".green");
ColorGreen.addEventListener("click", () => (color = "green"));

const ColorYellow = document.querySelector(".yellow");
ColorYellow.addEventListener("click", () => (color = "yellow"));

function setGridEventListeners() {
	const grid = document.querySelectorAll(".fila");

	grid.forEach((fila) => {
		let isMouseDown = false;

		window.addEventListener("mousedown", () => {
			isMouseDown = true;
		});
		window.addEventListener("mouseup", () => {
			isMouseDown = false;
		});

		fila.addEventListener("mouseover", () => {
			if (isMouseDown) {
				changeGrid(fila, color);
			}
		});
	});
}

// Crear grid inicial
createGrid(8);
setGridEventListeners();

const inputBtn = document.querySelector(".sendBtn");
const inputSize = document.querySelector("#size");
inputBtn.addEventListener("click", () => {
	deleteCube();
	createGrid(inputSize.value);
	setGridEventListeners();
});
