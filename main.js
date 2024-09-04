const container = document.querySelector("#contenedor");

// Function to create a grid
function createGrid(size) {
	for (let i = 1; i <= size; i++) {
		const divColumna = document.createElement("div");
		divColumna.classList.add("grid", "columna");
		container.appendChild(divColumna);
		for (let j = 1; j <= size; j++) {
			// Changed inner loop variable to 'j' to avoid conflict
			const divFila = document.createElement("div");
			divFila.classList.add("grid", "fila");
			divColumna.appendChild(divFila);
		}
	}
}

// Function to delete the existing grid
function deleteCube() {
	const grids = document.querySelectorAll(".columna");
	console.log(grids.length);
	for (let i = grids.length; i > 0; i--) {
		container.removeChild(container.lastChild);
	}
}

// Function to change the color of a grid element
function changeGrid(element, colorElegido) {
	element.classList.remove("grey", "black", "red", "blue", "green", "yellow");
	element.classList.add(colorElegido);
}

// Variables for managing the current color
let color = "grey";

// Event listeners for color buttons
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

// Function to set event listeners on grid cells
function setGridEventListeners() {
	const grid = document.querySelectorAll(".fila");

	grid.forEach((fila) => {
		let isMouseDown = false;

		// Set mousedown and mouseup listeners on the window to handle drag painting
		window.addEventListener("mousedown", () => {
			isMouseDown = true;
		});
		window.addEventListener("mouseup", () => {
			isMouseDown = false;
		});

		// Add mouseover event to change grid color while dragging
		fila.addEventListener("mouseover", () => {
			if (isMouseDown) {
				changeGrid(fila, color);
			}
		});
	});
}

// Create the initial grid
createGrid(8);
setGridEventListeners();

// Input button event listener to create a new grid
const inputBtn = document.querySelector(".sendBtn");
const inputSize = document.querySelector("#size");
inputBtn.addEventListener("click", () => {
	// Delete the old grid and create a new one with the specified size
	deleteCube();
	createGrid(inputSize.value);
	// Set event listeners on the new grid
	setGridEventListeners();
});
