const container = document.querySelector('#contenedor');

const divColumna = document.createElement('div');
divColumna.classList.add('grid', 'columna');
    for (let i = 0 ; i < 5 ; i++ ) {
        container.appendChild(divColumna);
}

const divFila = document.createElement('div');
divFila.classList.add('grid', 'fila')
divFila.textContent = 'Algo2'

divColumna.appendChild(divFila)

const boton = document.querySelector('#crear');

boton.addEventListener('click', crear())
