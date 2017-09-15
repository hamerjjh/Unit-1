let board = [
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]

];
var currentCol;
var currentRow;
var currentPlayer;

const playerOne = {
    color: "red",
};
const playerTwo = {
    color: "black",
};
const disc = {
    none: 0,
    playerOne: 1,
    playerTwo: 2,
};
function addDisc1(playerOne){
    this.player = playerOne;
    this.color = 'red';
}
function addDisc2(playerTwo){
    this.player = playerTwo;
    this.color = 'black';
}
function changeColor() {
    $('#A1').css("backgroundColor", "red");
    console.log("test");
};

$('A1').click(function(){
    $(this).css('backgroundColor', 'red');
});
$('#A1').on("click",changeColor)

//function DropDisc () {
    //Math.floor().on("click")
//}

function SwitchPlayer () {
    if (player === 1){
        player = red;
    } else {
        player = 2;
    }
    }