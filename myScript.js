const container = document.querySelector('.container');
const liteBrite = document.querySelector('.slider');
const title = document.querySelector('.title');
const intro = document.querySelector('.intro');
let score = 0;

//Creates the drawing grid
function createGrid (size) {
    let div = '';
    let userColor;
    let updateSize = size * size;
    
        if (getComputedStyle(liteBrite).getPropertyValue('background-color') == 'rgb(167, 167, 167)') {
            for (let i = 0; i < updateSize; i++) {
                div += `<div class="square"></div>`;
            }
        } else {
            for (let i = 0; i < updateSize; i++) {
                div += `<div class="square" style="background-color: rgb(53, 51, 51);"></div>`
            }
        }
    
    container.innerHTML = div;
    container.className = `container-${size}`;
    const squares = document.querySelectorAll('.square');
    //generates user color
    function setColor() {
        const colorButtons = document.querySelectorAll('.btn-color');
        colorButtons.forEach((button) => {
            button.addEventListener('click', function () {
                let compStyle = getComputedStyle(button);
                userColor = compStyle.getPropertyValue('background-color');
                hovering();
            })
        })
    };
    
    setColor();

    //Creates the hovering effect on the squares
    function hovering() {
        squares.forEach((square) => {
            square.addEventListener('mouseenter', function mouseOver() {
            console.log(getComputedStyle(square).getPropertyValue('background-color'))
            if (getComputedStyle(square).getPropertyValue('background-color') == userColor) {
                score = score;
            } else {
                score = score + 1;
            }
            square.style.backgroundColor = `${userColor}`;
            intro.classList.toggle('intro-yes');
            intro.innerHTML = `Nombre de tuiles dessinées: ${score}`;
            
            if (score == 1001) {
                alert("T'es game de te rendre a 2000!");
            } else if (score == 2001) {
                alert("Tu es une personne persistante. Bravo!");
            } else if (score == 2501) {
                alert("Je peux peut-être changer d'avis..");
            } else if (score == 3001) {
                alert("ok arrête.");
            }
            });
        })
    }    
}

//Creates custom grid for the user
const gridButton = document.querySelectorAll('.btn-grid');

gridButton.forEach((button) => {
    button.addEventListener('click', function () {
        createGrid(button.getAttribute("alt"));
    })
})

    





