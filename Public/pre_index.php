<?php
require 'assets/PHP/function.php';
if (isset($_SESSION["id"])) {
  header("Location: homepage.php");
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
    <div class="bg-soft h-[100vh] relative z-10 p-16 w-1/2 timeToRegistUp" id="register">
        <div class="m-auto w-[85%]">
            <h1 class="text-4xl text-white p-1 font-bold">
                Create New Account.
            </h1>
            <div class="mt-10 w-full">
                <div class="relative"> 
                    <input autocomplete="off" autocomplete="off" type="text" name="user" id="user" placeholder="Username" class="bg-dark w-full shadow-bounce focus:shadow-hit focus:outline-none h-12 text-white placeholder:text-white placeholder:text-opacity-75 rounded-xl p-4">
                    <div id="M-userE">
                        <span class="material-symbols-outlined material" id="userE">error</span>
                        <div class="absolute font-[quicksands] sub" style="color: white;" id="subuserE"></div>
                    </div>
                </div>
            </div>
            <div class="mt-10 w-full">
                <div class="relative">
                    <input autocomplete="off" type="password" name="pass" id="pass" placeholder="Password" class=" bg-dark w-full shadow-bounce focus:shadow-hit focus:outline-none h-12 text-white placeholder:text-white placeholder:text-opacity-75 rounded-xl p-4">
                    <div id="M-passE">
                        <span class="material-symbols-outlined material" id="passE">error</span>
                        <div class="absolute font-[quicksands] sub" style="color: white;" id="subpassE"></div>
                    </div>
                </div>
            </div>
            <button onclick="submitdata('register')" class=" bg-white focus:shadow-whitehit w-full mt-10 h-14 text-dark shadow-whitebounce rounded-xl p-4">Create Account</button>
        </div>
    </div>
    <aside class="w-[100%] h-48 absolute bottom-[35%] border-b-white border-r-0 border-t-0 border-l-0 border-b-solid border-2">
        <div class="relative boxRight w-fit" id="box">
            <h3 id="sub" class="text-white cursor-pointer">
                Already Have acount?
            </h3>
            <div onclick="trans()" id="item" class="bg-white cursor-pointer font-bold text-2xl p-8 w-fit m-3 hover:bg-dark hover:border-2 hover:border-white hover:border-solid hover:text-white hover:p-[30px]">SIGN <br> IN?</div>
        </div>
    </aside>
    <div class="bg-soft h-[100vh] relative z-10 p-16 w-1/2 timeTologinDown" id="login">
        <div class="m-auto w-[85%]">
            <h1 class="text-4xl text-white font-bold p-1">Sign In</h1>
            <div class="relative">
                <div class="relative">
                    <input autocomplete="off" type="text" name="userlog" id="userlog" placeholder="Username" class="mt-10 w-full bg-dark shadow-bounce text-white focus:shadow-hit focus:outline-none mr-3 placeholder:text-white placeholder:text-opacity-75 rounded-xl p-4">
                    <div id="M-userE2">
                        <span class="material-symbols-outlined material" id="userE2">error</span>
                        <div class="absolute font-[quicksands] sub2" style="color: white;" id="subuserE2"></div>
                    </div>
                </div>
                <div class="relative">
                    <input autocomplete="off" type="password" name="passlog" id="passlog" placeholder="Password" class="bg-dark mt-10 shadow-bounce focus:shadow-hit focus:outline-none w-full h-12 text-white placeholder:text-white placeholder:text-opacity-75 rounded-xl p-4">
                    <div id="M-passE2">
                        <span class="material-symbols-outlined material" id="passE2">error</span>
                        <div class="absolute font-[quicksands] sub2" style="color: white;" id="subpassE2"></div>
                    </div>
                </div>
            </div>
            <button onclick="submitdata('login')" class=" bg-white focus:shadow-whitehit w-full mt-10 h-14 text-dark shadow-whitebounce rounded-xl p-4">Sign In</button>
        </div>
    </div>
</body>
<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Sweet! -->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<!-- All JS Main -->
<script>
    <?php include 'assets/JS/main.js'?>
</script>
</html>
<!-- npx tailwindcss -i ./src/input.css -o ./public/assets/css/style.css --watch -->