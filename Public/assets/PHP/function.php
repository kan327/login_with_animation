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
}

// REGISTER
function register(){
  global $conn;
  $id = rand(10000, 99999);
  $fullname = $_POST["fullReg"];
  $username = $_POST["userReg"];
  $password = $_POST["pass"];
  $date = date("Y-m-d");

  if(empty($fullname) || empty($username) || empty($password)){
    echo "Empty Form register";
    exit;
  }

  $user = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username'");
  if(mysqli_num_rows($user) > 0){
    echo "Username Has Already Taken";
    exit;
  }

  $query = "INSERT INTO user VALUES('$id', '$fullname', '$username', '$password', '$date', 'up')";
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
