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
    <!-- <link href="assets/css/style.css" rel="stylesheet"> -->
    <style>
        <?php include "assets/css/style.css"?>
        <?php include "assets/css/suport.css"?>
    </style>
    <!-- <link href="assets/css/suport.css" rel="stylesheet"> -->
    <!-- font material -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body class="bg-dark">
    <div class="bg-dark shadow-bounce text-white rounded-3xl p-[20px] h-96 w-[60%] absolute top-1/4" id="dashboard">
        <div class="float-right w-fit">
            <h1 class="text-4xl font-bold mt-2 mb-5">LEADERBOARD</h1>
            <table class="table-fixed mr-10 shadow-bounce">
                <tr>
                    <td class="border-white border-2 border-solid p-1">Ranking</td>
                    <td class="border-white border-2 border-solid p-1">Player</td>
                    <td class="border-white border-2 border-solid p-1">Score</td>
                </tr>
                <?php 
                $no = 1;

                $query = mysqli_query($conn, "SELECT * FROM user WHERE stats = 'up' ORDER BY score DESC LIMIT 5");
                while($data = mysqli_fetch_array($query)) :?>
                <?php if($data['username'] == $user['username']):?>
                    <tr>
                        <td class="text-center border-white bg-white text-dark border-2 border-solid p-1"><?= $no?></td>
                        <td class="break-words w-32 border-white bg-white text-dark border-2 border-solid p-1"><?= $data['username'] ?></td>
                        <td class="border-white bg-white text-dark border-2 border-solid p-1"><?= $data['score'] ?></td>
                    </tr>
                    <?php else:?>
                        <tr>
                            <td class="text-center border-white border-2 border-solid p-1"><?= $no?></td>
                            <td class="break-words w-32 border-white border-2 border-solid p-1"><?= $data['username'] ?></td>
                            <td class="border-white border-2 border-solid p-1"><?= $data['score'] ?></td>
                        </tr>
                <?php endif;?>
                <?php $no++; endwhile ?>  
            </table>
        </div>
        <div class="w-fit">
            <h1 class="text-4xl font-bold">PLAYER</h1>
            <h2 class="ml-20 material-symbols-outlined" id="transfer"><?= $user["username"]?>#<?= $user["id"]?></h2> 
        </div>
        <div class="w-fit">
            <div class="mt-5">
                <a href="assets/PHP/logout.php" class="bg-dark shadow-smallb px-3 rounded-xl py-2 m-4 hover:bg-soft hover:shadow-smallh">LOGOUT</a>
                <button onclick="hajimemasu()" class="bg-dark shadow-smallb px-3 rounded-xl py-2 hover:bg-soft hover:shadow-smallh">START</button>
            </div>
        </div>
        <div class="w-fit mt-20">
            <p class="font-bold">CHOOSE YOUR COLOR</p>
            <span class="material-symbols-outlined w-fit ml-[40%]">arrow_drop_down</span>
        </div>
    </div>
    <div class="border-b-white border-r-0 border-t-0 border-l-0 border-b-solid border-2 z-50 top-[65%] w-full absolute right-0" id="conso">
        <input type="color" class="bg-dark bg-transparent border-none outline-none w-20 h-20 my-4 mx-[60px]" id="color" name="color">
    </div>
    <main id="canvas" class="text-white">
        <h1 class="font-bold text-5xl text-white absolute top-[40%] left-[40%] text-[30px]" id="response"></h1>
        <p class="absolute top-[15px] left-[50px] text-[30px] font-[consolas]" id="hehe">Player :<?= $user["username"]?>#<?= $user["id"]?></p>
        <div id="btn">
             <button id="reset" onclick="window.location.reload()" class="bg-dark shadow-smallb px-3 rounded-xl py-2 border-white border-2 border-solid hover:bg-soft hover:shadow-smallh">Exit</button>
        <button id="try" onclick="res()" class="bg-dark shadow-smallb px-3 rounded-xl py-2 border-white border-2 border-solid hover:bg-soft hover:shadow-smallh">Try Again</button>
        </div>
    </main>
    <div class="">
        <span class="material-symbols-outlined text-[#828282] absolute bottom-5 left-[35%]">developed by kanny</span>
    </div>
<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Sweet! -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<!-- All JS Main -->
<script>
    <?php include 'assets/JS/home.js'?>
</script>
</body>
</html>