<?php
session_start();
include "conn.php";
// IF
if(isset($_POST["action"])){
  if($_POST["action"] == "register"){
    register();
  }
  else if($_POST["action"] == "login"){
    login();
  }
  else if($_POST["action"] == "score"){
    score();
  }
}
// SCORE
function score(){
  global $conn;
  $usergame = $_POST["user"];
  $newscore = $_POST["newscore"];
  $user =  mysqli_fetch_array(mysqli_query($conn, "SELECT * FROM user WHERE username='$usergame'"));
  $lastscore = $user['score'];
  if($lastscore < $newscore){
    $user = mysqli_query($conn, "UPDATE user SET score='$newscore' WHERE username = '$usergame'");
    echo "new score";
  }
}

// REGISTER
function register(){
  global $conn;
  $id = rand(1000, 9999);
  $username = $_POST["userReg"];
  $password = $_POST["pass"];
  $date = date("Y-m-d");

  if(empty($username) || empty($password)){
    echo "Empty Form register";
    exit;
  }

  $user = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username'");
  if(mysqli_num_rows($user) > 0){
    echo "Username Has Already Taken";
    exit;
  }

  $query = "INSERT INTO user VALUES('$id', '$username', '$password', '$date', '0', 'up')";
  mysqli_query($conn, $query);
  echo "Registration Successful";
}

// LOGIN
function login(){
  global $conn;

  $username = $_POST["userLog"];
  $password = $_POST["passLog"];

  if(empty($password) || empty($username)){
    echo "Empty Form login";
    exit;
  }
  $user = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username'");

  if(mysqli_num_rows($user) > 0){

    $row = mysqli_fetch_assoc($user);

    if($password == $row['pass']){
      echo "Login Successful";
      $_SESSION["login"] = true;
      $_SESSION["id"] = $row["id"];
    }
    else{
      echo "Wrong Password";
      exit;
    }
  }
  else{
    echo "User Not Registered";
    exit;
  }
}
