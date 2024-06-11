let playerName = document.querySelectorAll('.playerName');
let okButtons = document.querySelectorAll('.ok');
let dice = document.querySelectorAll('.faces');
let number_on_dice;
let previousInput = null;
let previousDice = null;
let a = 0;

playerName.forEach(player => {
    player.addEventListener('dblclick', function() {
        if (previousInput != null) {
            previousInput.lastElementChild.style.transform = "scale(0, 0)";
            previousInput.parentElement.firstElementChild.lastElementChild.style.transform = 'scale(0, 0)';
        }
        this.lastElementChild.value = this.firstElementChild.innerHTML;
        this.lastElementChild.style.transform = "scale(1, 1)";
        player.parentElement.firstElementChild.lastElementChild.style.transform = 'scale(1, 1)';
        previousInput = this;
    })
})

okButtons.forEach(okButton => {
    okButton.addEventListener('click', ()=> {
        okButton.parentElement.parentElement.children[1].children[1].style.transform = 'scale(0, 0)';
        okButton.parentElement.parentElement.children[1].children[0].innerHTML = okButton.parentElement.parentElement.children[1].children[1].value;
        okButton.style.transform = 'scale(0, 0)';
    })
})

dice.forEach(d => {
    d.addEventListener('click', function() {
        number_on_dice = parseInt(Math.random() * 6);
        if (number_on_dice == 4) {
            d.children[4].innerHTML = `<svg class="diceNumber">
                                        <circle cx="5" cy="5" r="3" fill="black"></circle>
                                        <circle cx="19" cy="5" r="3" fill="black"></circle>
                                        <circle cx="12" cy="12" r="3" fill="black"></circle>
                                        <circle cx="5" cy="19" r="3" fill="black"></circle>
                                        <circle cx="19" cy="19" r="3" fill="black"></circle>
                                    </svg>`
        }
        else {
            d.children[4].innerHTML = d.children[number_on_dice].innerHTML;
        }
        console.log(number_on_dice);
        if (this.style.transform == 'translateZ(-20px) rotateX(360deg) rotateY(360deg) rotateZ(360deg)') {
            this.style.transform = 'translateZ(-20px) rotateX(0) rotateY(0) rotateZ(0)';
        }
        else {
            this.style.transform ='translateZ(-20px) scale(1, 1) rotateX(360deg) rotateY(360deg) rotateZ(360deg)';
        }
        setTimeout(() => {
            a++;
            if (a == 4) {
                a = 0;
            }
            this.style.transform = 'translateZ(-20px) rotateX(0) rotateY(0) rotateZ(0) scale(0, 0)';
            dice[a].style.transform = 'translateZ(-20px) scale(1, 1)';
        }, 500);
    })
})