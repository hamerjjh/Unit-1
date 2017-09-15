let board = [
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]

];
var currentCol;
var currentRow;
var currentPlayer;

let player= "red";

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
    $('.testclass').css("background-color", player);
    console.log("test");
};

//$('testclass').click(function(){
//    $(this).css('backgroundColor', 'red');
//});
$('.testclass').on("click",SwitchPlayer)

//function DropDisc () {
    //Math.floor().on("click")
//}



function checkForWin(disc, currentCol, currentRow) {
    console.log('Checking for win')
    return (checkHorizontalWin(disc, currentCol, currentRow) || 
            checkVerticalWin(disc, currentCol, currentRow) || 
            checkDiagonalWin(disc, currentCol, currentRow))
  }

function SwitchPlayer () {
    if (player === "red"){ 
        player = "black";
        console.log("Red Test");
        checkForWin(black, )
    } else {
        player = "red";
        console.log("Black Test");
        checkForWin(red,)
    }
    }
function DropDisc(target, yAxis) {
    $(target.children()[5-yAxis]).addClass('playerOne', 'playerTwo');
}


