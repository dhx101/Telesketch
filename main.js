const container = document.querySelector('#contenedor');

function changeGrid() {
    this.classList.add('hover')
}

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
            const grid = document.querySelectorAll('.fila')
            grid.forEach(item => item.addEventListener('mouseover', changeGrid))
}}

createCube(16)

const btn = document.querySelector('#crear');
function cambiarGrid() {
    let size = prompt('Size of the new grid', 16)
    createCube(size)
}

btn.addEventListener('click', cambiarGrid)







