var canvas = document.getElementById("myCanvas");
var ctx = this.canvas.getContext("2d");
var player1 = {
  x:50,
  y:250,
  img: 'img/player1.jpg'
}
var player2 = {
  x:650,
  y:250,
  img: 'img/player2.jpg'
}
var ball = {
  x:350,
  y:250,
  img: 'img/ball.jpg'
}
var img = $('#ball')
console.log(img)
board.ctx.drawImage(board.ball.img, board.ball.x, board.ball.y, 50,50);
