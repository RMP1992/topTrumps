const duelButton = document.getElementById('button');
let randomCardArr = [];
let player1 = [];
let player2 = [];
let drawDeck = [];
let holdingDeck;
class Card {
    constructor(name, attack, defence, health, evil, rank) {
        this._name = name;
        this._attack = attack;
        this._defence = defence;
        this._health = health;
        this._evil = evil;
        this._rank = rank;
    }
    get name() {
        return this._name;
    }
    get attack() {
        return this._attack;
    }
    get defence() {
        return this._defence;
    }
    get health() {
        return this._health;
    }
    get evil() {
        return this._evil;
    }
    get rank() {
        return this._rank;
    }
}
const deck = [
    new Card("Saberleomon", 550, 310, 2000, 3, 2),
    new Card("Wargreymon", 540, 350, 3000, 5, 1),
    new Card("Magnadramon", 520, 350, 3000, 1, 1),
    new Card("Devimon", 350, 260, 1000, 7, 3),
    new Card("Lilymon", 510, 380, 2000, 2, 2),
    new Card("Angemon", 560, 200, 1000, 2, 3),
    new Card("Angewomon", 470, 340, 2000, 2, 2),
    new Card("Rosemon", 570, 380, 3000, 4, 1),
    new Card("Seraphimon", 540, 340, 3000, 1, 1),
    new Card("Ofanimon", 540, 420, 3000, 2, 1),
    new Card("Gatomon", 360, 210, 1000, 4, 3),
    new Card("Nefertimon", 470, 270, 1000, 1, 3),
    new Card("Pagasusmon", 420, 230, 1000, 1, 3),
    new Card("Kyubimon", 450, 210, 1000, 4, 3),
    new Card("Sakuyamon", 560, 570, 3000, 3, 1),
    new Card("Myotismon", 510, 280, 2000, 10, 2),
    new Card("Piedmon", 530, 340, 3000, 9, 1),
    new Card("Puppetmon", 500, 340, 3000, 8, 1),
    new Card("Ladydevimon", 520, 300, 2000, 10, 2),
    new Card("Weregarurumon", 530, 240, 2000, 5, 2),
    new Card("Lynxmon", 480, 240, 2000, 5, 3),
    new Card("Quetzalmon", 470, 230, 2000, 6, 2),
    new Card("Phoenixmon", 530, 350, 3000, 4, 1),
    new Card("Exveemon", 460, 230, 1000, 5, 3),
    new Card("Togemon", 360, 200, 1000, 2, 3),
    new Card("Leomon", 400, 200, 1000, 1, 3),
    new Card("Birdramon", 410, 200, 1000, 5, 3),
    new Card("Garudamon", 460, 260, 2000, 4, 2),
    new Card("Piximon", 470, 220, 2000, 5, 2),
    new Card("Liamon", 560, 300, 3000, 5, 1),
];
const randomDeck1Loop = () => {
    for (let i = 0; i < deck.length; i++) {
        let index = (Math.floor(Math.random() * deck.length));
        randomCardArr.push(deck[index]);
    }
};
const drawCardPlayer1 = () => {
    player1 = randomCardArr.splice(0, 15);
};
const drawCardPlayer2 = () => {
    player2 = randomCardArr.splice(0, 15);
};
const winOrLose = () => {
    if (player1[0].attack > player2[0].attack) {
        console.log('Player 1 wins');
    }
    else if (player1[0].attack < player2[0].attack) {
        console.log('Player 2 wins');
    }
    else {
        console.log('draw');
    }
};
const wonCards = () => {
    if (player1[0].attack > player2[0].attack) {
        holdingDeck = player2[0];
        player2.shift();
        player1.push(holdingDeck);
        let winningCard = player1.shift();
        player1.push(winningCard);
        player1.push(...drawDeck);
    }
    else if (player2[0].attack > player1[0].attack) {
        holdingDeck = player1[0];
        player1.shift();
        player2.push(holdingDeck);
        let winningCard = player2.shift();
        player2.push(winningCard);
        player2.push(...drawDeck);
    }
    else {
        let player1Card = player1.shift();
        drawDeck.push(player1Card);
        let player2Card = player2.shift();
        drawDeck.push(player2Card);
    }
    console.log('p1');
    console.log(player1);
    console.log('-----------------');
    console.log('p2');
    console.log(player2);
};
drawDeck = [];
randomDeck1Loop();
drawCardPlayer1();
drawCardPlayer2();
duelButton.addEventListener('click', () => {
    winOrLose();
    wonCards();
});
