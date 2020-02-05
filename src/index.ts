const duelButton  =document.getElementById('button');

// const img2 = document.getElementsByClassName('digipic2')
let randomCardArr: Card[] = [];
let player1: Card[] =[];   
let player2: Card[] =[];
let drawDeck: Card[] = [];
let holdingDeck: Card ;
let img1 = document.getElementById('digipic1') as HTMLImageElement;
let img2 = document.getElementById('digipic2') as HTMLImageElement;
// let img1 = (<HTMLImageElement>document.getElementById('digipic1')).src
// let img2 = (<HTMLImageElement>document.getElementById('digipic2')).src
class Card  {
    public _name: string;
    public _attack: number;
    public _defence: number;
    public _health: number;
    public _evil: number;
    public _rank: number;
    public _image: string;
    constructor(name: string, attack: number, defence: number, health: number, evil: number, rank: number, img: string){ 
        this._name = name;
        this._attack = attack;
        this._defence = defence;
        this._health = health;
        this._evil = evil;
        this._rank = rank;
        this._image = img;
        
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
    get image(){
        return this._image
    }
    
}
const deck = [
    new Card("Saberleomon", 550, 310, 2000, 3, 2, "Saberleomon.jpeg"),
    new Card("Wargreymon", 540, 350, 3000, 5, 1, "Wargreymon.jpeg"),
    new Card("Magnadramon", 520, 350, 3000, 1, 1, "Magnadramon.jpeg"),
    new Card("Devimon", 350, 260, 1000, 7, 3, "Devimon.jpeg"),
    new Card("Lilymon", 510, 380, 2000, 2, 2, "Lilymon.jpeg"),
    new Card("Angemon", 560, 200, 1000, 2, 3, "Angemon.jpeg"),
    new Card("Angewomon", 470, 340, 2000, 2, 2, "Angewomon.jpeg"),
    new Card("Rosemon", 570, 380, 3000, 4, 1, "Rosemon.jpeg"),
    new Card("Seraphimon", 540, 340, 3000, 1, 1, "Seraphimon.jpeg"),
    new Card("Ofanimon", 540, 420, 3000, 2, 1, "Ofanimon.jpeg"),
    new Card("Gatomon", 360, 210, 1000, 4, 3, "Gatomon.jpeg"),
    new Card("Nefertimon", 470, 270, 1000, 1, 3, "Nefertimon.jpeg"),
    new Card("Pagasusmon", 420, 230, 1000, 1, 3, "Pegasusmon.jpeg"),
    new Card("Kyubimon", 450, 210, 1000, 4, 3, "Kyubimon.jpeg"),
    new Card("Sakuyamon", 560, 570, 3000, 3, 1, "Sakuyamon.jpeg"),
    new Card("Myotismon", 510, 280, 2000, 10, 2, "Myotismon.jpeg"),
    new Card("Piedmon", 530, 340, 3000, 9, 1, "Piedmon.jpeg"),
    new Card("Puppetmon", 500, 340, 3000, 8, 1, "Puppetmon.jpeg"),
    new Card("Ladydevimon", 520, 300, 2000, 10, 2, "Ladydevimon.jpeg"),
    new Card("Weregarurumon", 530, 240, 2000, 5, 2, "Weregarurumon.jpeg"),
    new Card("Lynxmon", 480, 240, 2000, 5, 3, "Lynxmon.jpeg"),
    new Card("Quetzalmon", 470, 230, 2000, 6, 2, "Quetzalmon.jpeg"),
    new Card("Phoenixmon", 530, 350, 3000, 4, 1, "Phoenixmon.jpeg"),
    new Card("Exveemon", 460, 230, 1000, 5, 3, "Exveemon.jpeg"),
    new Card("Togemon", 360, 200, 1000, 2, 3, "Togemon.jpeg"),
    new Card("Leomon", 400, 200, 1000, 1, 3, "Leomon.jpeg"),
    new Card("Birdramon", 410, 200, 1000, 5, 3, "Birdramon.jpeg"),
    new Card("Garudamon", 460, 260, 2000, 4, 2, "Garudamon.jpeg"),
    new Card("Piximon", 470, 220, 2000, 5, 2, "Piximon.jpeg"),
    new Card("Liamon", 560, 300, 3000, 5, 1, "Liamon.jpeg"),
]

const randomDeck1Loop = ()=>{
    for (let i = 0; i < deck.length; i ++){
        let index = (Math.floor(Math.random()* deck.length));

        randomCardArr.push(deck[index])
    }
}

const drawCardPlayer1 = ()=>{
    player1 = randomCardArr.splice(0,15);
    
}
const drawCardPlayer2 = () =>{
    player2 = randomCardArr.splice(0,15);
    
}
const winOrLose = (attribute: string) =>{
    if((<any>player1[0])[attribute] > (<any>player2[0])[attribute]){
        console.log('Player 1 wins')
    }else if((<any>player1[0])[attribute] < (<any>player2[0])[attribute]){
        console.log('Player 2 wins')
    }else{
        console.log('draw')
        
    }
}
const wonCards = (attribute: string) =>{
    
    if((<any>player1[0])[attribute] > (<any>player2[0])[attribute]){
        holdingDeck = player2[0]
        player2.shift()
        player1.push(holdingDeck)
        let winningCard = player1.shift()
        player1.push(winningCard)
        player1.push(...drawDeck)
    }else if((<any>player2[0])[attribute] > (<any>player1[0])[attribute]){
        holdingDeck = player1[0]
        player1.shift()
        player2.push(holdingDeck)
        let winningCard = player2.shift()
        player2.push(winningCard)
        player2.push(...drawDeck)
    }else{
        let player1Card = player1.shift()
        drawDeck.push(player1Card)
        let player2Card = player2.shift()
        drawDeck.push(player2Card)
            
    }
        

    console.log('p1');
    console.log(player1);
    console.log('-----------------');
    console.log('p2');
    console.log(player2);
       
}
drawDeck = [];

randomDeck1Loop()
drawCardPlayer1()
drawCardPlayer2()

duelButton.addEventListener('click', () =>{
   
winOrLose("health")
wonCards("health")
})