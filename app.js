let side = 8
const container = document.querySelector('.container');
const squares = document.getElementsByClassName('square');
const btn = document.querySelector('button');

function askSide() {
    side = prompt("Combien tu veux ? (Moins de 100)")
    if (side >= 100) {
        askSide();
    };    
};

function deleteGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

function createGrid(side) {
    for (i = 0; i < side; i++) {
        let divCol = document.createElement('div');
        divCol.className = 'col';
        container.appendChild(divCol);
        for (y = 0; y < side; y++) {
            let divSq = document.createElement('div');
            divSq.className = 'square';
            divCol.appendChild(divSq);
            divSq.addEventListener("pointerover", event => {
                console.log(event);
            // event.target.classList.add('colored');
            event.target.setAttribute('style', `background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()});`);
            });
        };
    };
};

btn.addEventListener("click", event => {
    askSide();
    deleteGrid();
    createGrid(side);  
});

function randomColor() {
    return Math.floor(Math.random()*256);               
};

// On crée la grille de carrés et on écoute si un pointer passe pour changer la couleur

for (i = 0; i < side; i++) {
    let divCol = document.createElement('div');
    divCol.className = 'col';
    container.appendChild(divCol);
    for (y = 0; y < side; y++) {
        let divSq = document.createElement('div');
        divSq.className = 'square';
        divCol.appendChild(divSq);
        divSq.addEventListener('pointerover', event => {
            console.log(event);
            // event.target.classList.add('colored');
            event.target.setAttribute('style', `background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()});`);
        });
    };
};