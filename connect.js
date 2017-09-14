const board = {
    xAxis: 7,
    yAxis: 6,
    piecesToConnectForWin: 4
};
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
function changeColor() {
    $('#A1').css("backgroundColor", "red");
    console.log("test");
};

$('A1').click(function(){
    $(this).css('backgroundColor', 'red');
});
$('#A1').on("click",changeColor)