var usergame = "STRING"
console.log(localStorage.getItem(usergame))

function hajimemasu(){
    document.getElementById("dashboard").classList.toggle("down")
    document.getElementById("btn").style.display = "none"
    setTimeout(startGame, 2000)
  }
  function res(){
    myGameArea.stop()
    myGameArea.clear()
    startGame()
    document.getElementById("btn").style.display = "none"
    document.getElementById("response").style.display = "none"
    }
document.getElementById("canvas").style.display = "none"
document.getElementById("btn").style.display = "none"
document.getElementById("response").style.display = "none"
// game Time! 
  var myGamePiece ;
  var myObstacles=[];
  var myScore;
  var mySound;
  var myMusic;

function startGame() {
    myMusic = new sound("theme.mp3");
    myMusic.play();
    var color = document.getElementById("color").value
    document.getElementById("hehe").style.color = color
    document.getElementById("dashboard").style.display = "none"
    document.getElementById("canvas").style.display = "block"
    document.getElementById("conso").classList.add("opa")
    myGamePiece = new component(70, 70, color, 65, 475);
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
      scores(myGameArea.frameNo)
  }
  // --

}
// --

// score to database
function scores(sc){
    $(document).ready(function() {
        var data = {
          user: localStorage.getItem(usergame),
          newscore: sc,
          action: "score",
        };
        $.ajax({
          url: 'assets/PHP/function.php',
          /* url: 'function.php', use this at same directory*/ 
          type: 'post',
          data: data,
          success: function(response) {
              console.log(response)
              if(response == "new score"){
                  document.getElementById("response").innerHTML = "New Score"
                }else{
                  document.getElementById("response").innerHTML = "Game Over"
              }
          }
        })
    })
}
// --

// display gameover
function gameover(){
    document.getElementById("response").style.display = "flex"
    document.getElementById("btn").style.display = "flex"
}
// --

// add component
function component(width, height, color, x, y, type) {
  this.gamearea = myGameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;    
  this.x = x;
  this.y = y;  
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.bounce = 0.6; 
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
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
}
// --
// hit btm
this.hitBottom = function() {
    var rockbottom = myGameArea.canvas.height - this.height;
    if (this.y > rockbottom) {
        this.y = rockbottom;
        this.gravitySpeed = -(this.gravitySpeed * this.bounce);
    }
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

// for sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    // this.sound.setAttribute("controls", "none"); use this when static music
    this.sound.setAttribute("controls", "loop");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
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
          myMusic.stop();
          myGameArea.stop(); return;
      }
  }
  // --
      myGameArea.clear();
      // check what key was pressed
      if (myGameArea.keys && myGameArea.keys[38]) {accelerate(-0.2)}else{accelerate(0.1)}
      // --

      // for looping obstacle 
      myGameArea.frameNo += 1;
      if (myGameArea.frameNo == 1 || everyinterval(80)) {
          x = myGameArea.canvas.width;
          minHeight = 20;
          maxHeight = 200;
          height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
          minGap = 150;
          maxGap = 200;
          gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
          console.log(gap)
          myObstacles.push(new component(30, height, "grey", x, 0));
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
// control
function accelerate(n) {
    if (!myGameArea.interval) {myGameArea.interval = setInterval(updateGameArea, 20);}

    myGamePiece.gravity = n;
}
// --
// any?(dont know :3)
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}