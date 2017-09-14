const board = {
    xAxis: 7,
    yAxis: 6,
    piecesToConnectForWin: 4
};
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
function addDisc(playerOne){
    this.player = playerOne;
    this.color = 'red';
    this.id = id.toString();
    id++;
    function addDisc(playerTwo){
        this.player = playerTwo;
        this.color = 'black';
        this.id = id.toString();
        id++;
    }
}
function changeColor() {
    $('#A1').css("backgroundColor", "red");
    console.log("test");
};

$('A1').click(function(){
    $(this).css('backgroundColor', 'red');
});
$('#A1').on("click",changeColor)