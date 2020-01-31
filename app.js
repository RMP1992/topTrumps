let randomCardArr = [];
let player1;   
let player2;


class Card  {
    constructor(name, attack, defence, health, evil, rank){ 
        this._name = name;
        this._attack = attack;
        this._defence = defence;
        this._health = health;
        this._evil = evil;
        this._rank = rank;
        
    }
    get name(){
        return this._name
    }
    get attack(){
        return this._attack
    }
    get defence(){
        return this._defence
    }
    get health(){
        return this._health
    }
    get evil(){
        return this._evil
    }
    get rank(){
        return this._rank
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
]

// const deck2 = [
//     new Card("Myotismon", 510),
//     new Card("Piedmon", 530),
//     new Card("Puppetmon", 500),
//     new Card("Ladydevimon", 520),
//     new Card("Weregarurumon", 530),
//     new Card("Lynxmon", 480),
//     new Card("Quetzalmon", 470),
//     new Card("Phoenixmon", 530),
//     new Card("Exveemon", 460),
//     new Card("Ofanimon", 540),
//     new Card("Gatomon", 400),
//     new Card("Nefertimon", 470),
//     new Card("Pagasusmon", 420),
//     new Card("Kyubimon", 450),
//     new Card("Sakuyamon", 600)
// ]
const randomDeck1Loop = ()=>{
    for (let i = 0; i < deck.length; i ++){
        let index = (Math.floor(Math.random()* deck.length));
        // console.log(deck[index])
        randomCardArr.push(deck[index])
    }
}
randomDeck1Loop()

const drawCardPlayer1 = ()=>{
    player1 = randomCardArr.splice(0,15);
    // console.log(player1);

    console.log(`this is player 1 deck ${player1[0].name}`);
    console.log(`this is player 1 deck ${player1[0].attack}`);
    console.log('--------------');
}
drawCardPlayer1()

const drawCardPlayer2 = () =>{
    player2 = randomCardArr.splice(0,15);
    // console.log(player2);

    console.log(`this is player 2 deck ${player2[0].name}`);
    console.log(`this is player 2 deck ${player2[0].attack}`)
}
drawCardPlayer2()

const winOrLose = () =>{
    if(player1[0].attack > player2[0].attack){
        console.log('player 1 wins')
    }
    else{
        console.log('player 2 wins')
    }
}
winOrLose()


// const randomDeck2Loop = ()=>{
//     for (let i = 0; i < deck2.length; i ++){
//         index2 = (Math.floor(Math.random()* deck2.length));
//         console.log(deck2[index2])
//         // randomCardArr.push(card.name[randomCard])
//     }
// }



// randomDeck2Loop()


// const winOrLose = ()=>{
//     if(deck1 < deck2){
//         console.log(deck2)
//     }

// }
// winOrLose()





// console.log(randomDeck1Loop())
// const deck2 = [
//     Myotismon = new Card("Myotismon", 510),
//     Piedmon = new Card("Piedmon", 530),
//     Puppetmon = new Card("Puppetmon", 500),
//     Ladydevimon = new Card("Ladydevimon", 520),
//     Weregarurumon = new Card("Weregarurumon", 530),
//     Lynxmon = new Card("Lynxmon", 480),
//     Quetzalmon = new Card("Quetzalmon", 470),
//     Phoenixmon = new Card("Phoenixmon", 530),
//     Exveemon = new Card("Exveemon", 460),
//     Ofanimon = new Card("Ofanimon", 540),
//     Gatomon = new Card("Gatomon", 400),
//     Nefertimon = new Card("Nefertimon", 470),
//     Pegasusmon = new Card("Pagasusmon", 420),
//     Kyubimon = new Card("Kyubimon", 450),
//     Sakuyamon = new Card("Sakuyamon", 600)
// ]
// // randomDeck1Loop()

// // console.log(deck1[i].randomDeck1Loop())
// // randomDeck1Loop()


