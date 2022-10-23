<?php
require 'assets/PHP/function.php';
if (isset($_SESSION["id"])) {
  $id = $_SESSION["id"];
  $user = mysqli_fetch_array(mysqli_query($conn, "SELECT * FROM user WHERE id = $id"));
} else {
  header("Location: pre_index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- css -->
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/suport.css" rel="stylesheet">
    <!-- font material -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body class="bg-dark">
    <div class="bg-dark shadow-bounce text-white rounded-3xl p-36 w-[70%] absolute top-1/4" id="dashboard">
        <div>
            <h1 class="text-4xl font-bold">PLAYER</h1>
            <h2 class="ml-20 material-symbols-outlined" id="transfer"><?= $user["username"]?>#<?= $user["id"]?></h2> 
        </div>
        <div>
            <div class="mt-5">
                <a href="assets/PHP/logout.php" class="bg-dark shadow-smallb px-3 rounded-xl py-2 m-4 hover:bg-soft hover:shadow-smallh">LOGOUT</a>
                <button onclick="hajimemasu()" class="bg-dark shadow-smallb px-3 rounded-xl py-2 hover:bg-soft hover:shadow-smallh">START</button>
            </div>
        </div>
    </div>
    <div class="border-b-white border-r-0 border-t-0 border-l-0 border-b-solid border-2 z-50 top-[65%] w-full absolute right-0" id="conso">
        <input type="color" class="bg-dark w-20 h-20 m-4" id="color" name="color">
    </div>
    <main id="canvas" class="text-white">
        <p class="absolute top-[15px] left-[50px] text-[30px] font-[consolas]" id="hehe">Username :<?= $user["username"]?>#<?= $user["id"]?></p>
        <div id="btn">
             <button id="reset" onclick="window.location.reload()" class="bg-dark shadow-smallb px-3 rounded-xl py-2 hover:bg-soft hover:shadow-smallh">Exit</button>
        <button id="try" onclick="res()" class="bg-dark shadow-smallb px-3 rounded-xl py-2 hover:bg-soft hover:shadow-smallh">Try Again</button>
        </div>
    </main>
    <div class="">
        <span class="material-symbols-outlined text-[#828282] absolute bottom-5 left-[40%]">Designed By K-</span>
    </div>
<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Sweet! -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<!-- All JS Main -->
<script src="assets/JS/home.js"></script>
</body>
</html>