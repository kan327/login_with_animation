function hajimemasu(){
    document.getElementById("dashboard").classList.toggle("down")
    setTimeout(startGame, 2000)
  }
  function res(){
    myGameArea.stop()
    myGameArea.clear()
    startGame()
    }
document.getElementById("btn").style.display = "none"
document.getElementById("canvas").style.display = "none"
// game Time! 
  var myGamePiece ;
  var myObstacles=[];
  var myScore;
  
function startGame() {
    var color = document.getElementById("color").value
    document.getElementById("hehe").style.color = color
    document.getElementById("dashboard").style.display = "none"
    document.getElementById("canvas").style.display = "block"
    document.getElementById("conso").classList.add("opa")
    myGamePiece = new component(80, 80, color, 15, 470);
    myScore = new component("30px", "Consolas", "white", 1000, 40, "text");
    myGameArea.start();
    myObstacles=[];
}

// create canvas
var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 1366;
      this.canvas.height = 565;
      this.context = this.canvas.getContext("2d");
      document.getElementById("canvas").insertBefore(this.canvas, document.getElementById("canvas").childNodes[0]);
      this.frameNo = 0;
      this.interval = setInterval(updateGameArea, 20);
      // keydown for movement
      window.addEventListener('keydown', function (e) {
          myGameArea.keys = (myGameArea.keys || []);
          myGameArea.keys[e.keyCode] = (e.type == "keydown");
      })
      // --

      // for any(dont know?)
      window.addEventListener('keyup', function (e) {
          myGameArea.keys[e.keyCode] = (e.type == "keydown");            
      })
      // --
  }, 
  // for clear
  clear : function(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  // --
  // for game over
  stop : function() {
      clearInterval(this.interval);
      gameover()
  }
  // --

}
// --
function gameover(){
    document.getElementById("btn").style.display = "flex"
}
// add component
function component(width, height, color, x, y, type) {
  this.gamearea = myGameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;    
  this.x = x;
  this.y = y;    
  this.type = type;    
  // updating component
  this.update = function() {
    ctx = myGameArea.context;
    if (this.type == "text") {
        ctx.font = this.width + " " + this.height;
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
    } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
  // --

  // update movement
  this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;        
  }    
  // --

  // crash with other obj
  this.crashWith = function(otherobj) {
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width);
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height);
      var crash = true;
      if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
          crash = false;
      }
      return crash;
  }
  // --
}
// --
// running frame
function updateGameArea() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  // for die
  var x, y;
  for (i = 0; i < myObstacles.length; i += 1) {
      if (myGamePiece.crashWith(myObstacles[i])) {
          myGameArea.stop(); return;
      }
  }
  // --
      myGameArea.clear();
      // check what key was pressed
      if (myGameArea.keys && myGameArea.keys[65]) {myGamePiece.speedX = -2; }
      if (myGameArea.keys && myGameArea.keys[68]) {myGamePiece.speedX = 2; }
      if (myGameArea.keys && myGameArea.keys[87]) {myGamePiece.speedY = -2; }
      if (myGameArea.keys && myGameArea.keys[83]) {myGamePiece.speedY = 2; }
      // --

      // for looping obstacle 
      myGameArea.frameNo += 1;
      if (myGameArea.frameNo == 1 || everyinterval(300)) {
          x = myGameArea.canvas.width;
          minHeight = 20;
          maxHeight = 200;
          height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
          minGap = 180;
          maxGap = 300;
          gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
          console.log(gap)
          myObstacles.push(new component(30, height, "white", x, 0));
          myObstacles.push(new component(30, x - height - gap, "white", x, height + gap));
      }
      for (i = 0; i < myObstacles.length; i += 1) {
          myObstacles[i].x += -10;
          myObstacles[i].update();
      }
  // --
  myGamePiece.newPos();
  myGamePiece.update();
  myScore.text="SCORE: " + myGameArea.frameNo;
  myScore.update();
  var nama = document.getElementById("transfer").value
      // myObstacle.newPos(); use this when u want to staic
  }
// --

// any?(dont know :3)
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}