let randomCardArr = [];
let index1;
let index2;



class Card  {
    constructor(name, attack){ 
        this._name = name;
        this._attack = attack;
    }
    get name(){
        return this._name
    }
    get attack(){
        return this._attack
    }
    
}
const deck1 = [
    new Card("Saberleomon", 550),
    new Card("Wargreymon", 540),
    new Card("Magnadramon", 520),
    new Card("Devimon", 450),
    new Card("Lilymon", 510),
    new Card("Angemon", 560),
    new Card("Angewomon", 470),
    new Card("Rosemon", 570),
    new Card("Seraphimon", 540),
    new Card("Ofanimon", 540),
    new Card("Gatomon", 450),
    new Card("Nefertimon", 470),
    new Card("Pagasusmon", 420),
    new Card("Kyubimon", 450),
    new Card("Sakuyamon", 600)
]
const deck2 = [
    new Card("Myotismon", 510),
    new Card("Piedmon", 530),
    new Card("Puppetmon", 500),
    new Card("Ladydevimon", 520),
    new Card("Weregarurumon", 530),
    new Card("Lynxmon", 480),
    new Card("Quetzalmon", 470),
    new Card("Phoenixmon", 530),
    new Card("Exveemon", 460),
    new Card("Ofanimon", 540),
    new Card("Gatomon", 400),
    new Card("Nefertimon", 470),
    new Card("Pagasusmon", 420),
    new Card("Kyubimon", 450),
    new Card("Sakuyamon", 600)
]
const randomDeck1Loop = ()=>{
    for (let i = 0; i < deck1.length; i ++){
        index1 = (Math.floor(Math.random()* deck1.length));
        console.log(deck1[index1])
        // randomCardArr.push(card.name[randomCard])
    }
}
const randomDeck2Loop = ()=>{
    for (let i = 0; i < deck2.length; i ++){
        index2 = (Math.floor(Math.random()* deck2.length));
        console.log(deck2[index2])
        // randomCardArr.push(card.name[randomCard])
    }
}

randomDeck1Loop()

randomDeck2Loop()


const winOrLose = ()=>{
    if(deck1 < deck2){
        console.log(deck2)
    }

}
winOrLose()





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


