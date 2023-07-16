const container = document.querySelector('#contenedor');

function changeGrid() {
    this.classList.add('hover')
}

function createGrid(size) {
    for (let i = 1 ; i <= size ; i++ ) {
        const divColumna = document.createElement('div');
        divColumna.classList.add('grid', 'columna');
        container.appendChild(divColumna);
            for (let i = 1; i <= size ; i++){
                const divFila = document.createElement('div');
                divFila.classList.add('grid', 'fila');
                divColumna.appendChild(divFila)
            }  
            const grid = document.querySelectorAll('.fila')
            grid.forEach(item => item.addEventListener('mouseover', changeGrid))
}}

createGrid(16)

function deleteCube() {
    const grids = document.querySelectorAll('.columna');
    console.log(grids.length)
    for (let i = grids.length; i > 0 ; i--) {
        container.removeChild(container.lastChild)
    }
}

function cambiarGrid() {
    let size = prompt('Size of the new grid', 16)
    if (size <= 100) {
        createGrid(size)
    } else {alert("Thats too big!")}
    
}

const btn = document.querySelector('#crear');
btn.addEventListener('click', () => {
    deleteCube()
    cambiarGrid();
})







