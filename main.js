const container = document.querySelector('#contenedor');

function createCube(size) {
    for (let i = 1 ; i <= size ; i++ ) {
        const divColumna = document.createElement('div');
        divColumna.classList.add('grid', 'columna');
        container.appendChild(divColumna);
            for (let i = 1; i <= size ; i++){
                const divFila = document.createElement('div');
                divFila.classList.add('grid', 'fila');
                divColumna.appendChild(divFila)
            }  
}}


createCube(5)

const grid = document.querySelectorAll('.fila')

function changeGrid() {
    this.classList.add('hover')
}

grid.forEach(item => item.addEventListener('mouseover', changeGrid))
