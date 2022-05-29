document.addEventListener('DOMContentLoaded', () => {

    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    const cardArray = [
        {
            name: 'allosaurus',
            img: 'image/allosaurus.jpg'
        },
        {
            name: 'allosaurus',
            img: 'image/allosaurus.jpg'
        },

        {
            name: 'austroraptor',
            img: 'image/austroraptor.jpg'
        },
        {
            name: 'austroraptor',
            img: 'image/austroraptor.jpg'
        },

        {
            name: 'raptor',
            img: 'image/raptor.jpg'
        },
        {
            name: 'raptor',
            img: 'image/raptor.jpg'
        },

        {
            name: 'rex',
            img: 'image/rex.jpg'
        },
        {
            name: 'rex',
            img: 'image/rex.jpg'
        },

        {
            name: 'spino',
            img: 'image/spino.jpg'
        },
        {
            name: 'spino',
            img: 'image/spino.jpg'
        },

        {
            name: 'triceratops',
            img: 'image/triceratops.jpg'
        },
        {
            name: 'triceratops',
            img: 'image/triceratops.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'image/background.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('paar gefunden')
            cards[optionOneId].setAttribute('src', 'image/white.jpg')
            cards[optionTwoId].setAttribute('src', 'image/white.jpg')
            cardsWon.push(cardsChosen)
        }else {
            cards[optionOneId].setAttribute('src', 'image/background.jpg')
            cards[optionTwoId].setAttribute('src', 'image/background.jpg')
            alert('Kein Treffer')
            
        }
        cardsChosen = []
        cardsChosenId = []
    
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Glückwunsch geschafft!!'
        }
    }

    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2 ) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})
