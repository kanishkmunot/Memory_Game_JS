const cardArray = [
    {
        name: 'cake',
        img: 'cake.jpg'
    },
    {
        name: 'burger',
        img: 'burger.jpg'
    },
    {
        name: 'hotdog',
        img: 'hotdog.jpg'
    },
    {
        name: 'milkshake',
        img: 'milkshake.jpg'
    },
    {
        name: 'pizza',
        img: 'pizza.jpg'
    },
    {
        name: 'fries',
        img: 'fries.jpg'
    },
    {
        name: 'cake',
        img: 'cake.jpg'
    },
    {
        name: 'burger',
        img: 'burger.jpg'
    },
    {
        name: 'hotdog',
        img: 'hotdog.jpg'
    },
    {
        name: 'milkshake',
        img: 'milkshake.jpg'
    },
    {
        name: 'pizza',
        img: 'pizza.jpg'
    },
    {
        name: 'fries',
        img: 'fries.jpg'
    },
]

/* `cardArray.sort(() => 0.5 - Math.random())` is shuffling the elements in the `cardArray` randomly.
It uses the `sort()` method with a compare function that generates a random number between -0.5 and
0.5 for each pair of elements in the array. This random number determines the order in which the
elements are sorted, effectively shuffling the array. */

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

/**
 * The function creates a grid of cards with images and event listeners.
 */
function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.src = 'logo2.gif';
        card.setAttribute('data-id', i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
    }

}
createBoard()

/**
 * The function `checkMatch()` checks if two selected cards match and updates the game accordingly.
 */
function checkMatch() {

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'logo2.gif')
        cards[optionTwoId].setAttribute('src', 'logo2.gif')
        alert('You have clicked the same image!!')

    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'white.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'white.jpg')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'logo2.gif')
        cards[optionTwoId].setAttribute('src', 'logo2.gif')
        alert("Sorry try again!!")
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){

        resultDisplay.textContent = "Congratulations!!, YOU HAVE WON"
    }
    }

/**
 * The flipCard function flips a card and checks if two cards have been chosen.
 */

function flipCard(){

    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
    
}