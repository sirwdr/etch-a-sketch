
const header = document.getElementById('header');
const contenedor = document.getElementById('contenedor');

const inputGrid = document.createElement('input');

const cuadricula = 600;
let lados = 16;

function generarCuadricula(lados) {
    
    contenedor.innerHTML = '';

    for(let i = 0; i < (lados * lados); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        newDiv.style.border = '1px solid black';
        newDiv.style.backgroundColor = '#fff';
        newDiv.style.width = `${cuadricula / lados}px`;
        newDiv.style.height = `${cuadricula / lados}px`;
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = '#9b9b9b';
        });
        contenedor.appendChild(newDiv);
    }
}

generarCuadricula(lados);

function cambiarCuadricula() {
    const grid = parseInt(prompt('Enter grid size'));

    if (isNaN(grid) || grid <= 0 || grid > 50) {
        alert('Please enter a valid grid size.');
        return;
    }

    generarCuadricula(grid);
}

function reset(){
    generarCuadricula(lados);
}
