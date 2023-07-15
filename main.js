const container = document.querySelector('#contenedor');

let size = 16

function createCube(size) {
    for (let i = 1 ; i <= size ; i++ ) {
        const divColumna = document.createElement('div');
        divColumna.classList.add('grid', 'columna');
        container.appendChild(divColumna);
            for (let i = 1; i <= 16 ; i++){
                const divFila = document.createElement('div');
                divFila.classList.add('grid', 'fila');
                divColumna.appendChild(divFila)
            }  
}}
   

createCube(16)



const boton = document.querySelector('#crear');

boton.addEventListener('click', crear())
