console.log("iyey !, Success connect")
var item = document.getElementById("item")
function trans(){
    var login = document.getElementById("login")
    var register = document.getElementById("register")
    var box = document.getElementById("box")
    var sub = document.getElementById("sub")
    if(login.classList.contains("timeTologinDown")){
        console.log("tekan1")
        register.classList.add("timeToRegistDown")
        register.classList.remove("timeToRegistUp")
        login.classList.add("timeToLoginUp")
        login.classList.remove("timeTologinDown")
        box.classList.toggle("boxLeft")
        box.classList.toggle("boxRight")
        item.innerHTML="SIGN <br> UP?"
        sub.innerHTML="Dont Have any acount?"
        setTimeout(reg, 1000)
        function reg(){
          // document.querySelector("#user").value = ""
          // document.querySelector("#pass").value = ""
            register.style.display = "none"
            login.style.display = "flex"
        }
    } else if(register.classList.contains("timeToRegistDown")){
        console.log("tekan2")
        register.classList.add("timeToRegistUp")
        register.classList.remove("timeToRegistDown")
        login.classList.add("timeTologinDown")
        login.classList.remove("timeToLoginUp")
        box.classList.toggle("boxLeft")
        box.classList.toggle("boxRight")
        item.innerHTML="SIGN <br> IN?"
        sub.innerHTML="Already Have acount?"
        setTimeout(log, 1000)
        function log(){
          // document.querySelector("#user").value = ""
          // document.querySelector("#pass").value = ""
            login.style.display = "none"
            register.style.display = "flex"
        }
    }
}

// regist and log
document.querySelector("#M-userE").style.display = "none"
document.querySelector("#M-passE").style.display = "none"
document.querySelector("#M-userE2").style.display = "none"
document.querySelector("#M-passE2").style.display = "none"

function submitdata(type) {
    if(type == "register"){
      var userReg = document.querySelector("#user").value
      var pass = document.querySelector("#pass").value
      var userlog = document.querySelector("#userlog").value
      var passlog = document.querySelector("#passlog").value
      // --
      var erruser = document.querySelector("#M-userE")
      var errpass = document.querySelector("#M-passE")
      var erruser2 = document.querySelector("#M-userE2")
      var errpass2 = document.querySelector("#M-passE2")
      var erruserE2 = document.querySelector("#subuserE2")
      var errpassE2 = document.querySelector("#subpassE2")
      var erruserE = document.querySelector("#subuserE")
      var errpassE = document.querySelector("#subpassE")
        if(type == "register"){
          if(userReg == ""|| userReg == undefined){
            erruser.style.display = "block"
            erruserE.innerHTML = "Cannot Empty"
          }else{
            erruser.style.display = "none"
          }
          if(pass == "" || pass == undefined){
            errpass.style.display = "block"
            errpassE.innerHTML = "Cannot Empty"
          }else{
            errpass.style.display = "none"
          }
        }
      }else if(type == "login"){
        var userlog = document.querySelector("#userlog").value
        var passlog = document.querySelector("#passlog").value
        if(userlog == "" || userlog == undefined){
          var erruser2 = document.querySelector("#M-userE2")
          var erruserE2 = document.querySelector("#subuserE2")
          erruser2.style.display = "block"
          erruserE2.innerHTML = "Cannot Empty"
        }else{
          var erruser2 = document.querySelector("#M-userE2")
          erruser2.style.display = "none"
        }
        if(passlog == ""||passlog == undefined){
          var errpass2 = document.querySelector("#M-passE2")
          var errpassE2 = document.querySelector("#subpassE2")
          errpass2.style.display = "block"
          errpassE2.innerHTML = "Cannot Empty"
        }else{
          var errpass2 = document.querySelector("#M-passE2")
          errpass2.style.display = "none"
        }
    }
    $(document).ready(function() {
      var data = {
        userReg: $("#user").val(),
        pass: $("#pass").val(),
        // ---
        userLog: $("#userlog").val(),
        passLog: $("#passlog").val(),
        action: type,
      };
      $.ajax({
        url: 'assets/PHP/function.php',
        /* url: 'function.php', use this at same directory*/ 
        type: 'post',
        data: data,
        success: function(response) {
            // "hi"+data["user"]
            
          if (response == "Login Successful") {
            console.log("hehei")
            Swal.fire({
              icon: 'success',
              title: 'Login Success',
              showConfirmButton: false,
              timer: 4000,
            })
            var userlog = document.querySelector("#userlog").value
            var usergame = "STRING"
              localStorage.setItem(usergame, userlog);
              if (typeof (Storage) !== 'undefined') {
                // pengecekkan apakah data localStorage dengan key NUMBER tersedia atau belum
                if (localStorage.getItem(usergame) === 'undefined') {
                  // Jika belum maka akan atur dengan nilai awal yakni 0
                }
            }   
            setTimeout(yosh, 5000)
            function yosh(){
              document.querySelector("body").classList.toggle("dropUp")
              item.innerHTML="WEL<BR>COME"
              sub.innerHTML=" "
            }
            setTimeout(daisekai, 7500)
            function daisekai(){
              window.location.reload()
            }
          }else if(response == "Wrong Password") {
            var errpass2 = document.querySelector("#M-passE2")
            var errpassE2 = document.querySelector("#subpassE2")
            errpass2.style.display = "block"
            errpassE2.innerHTML = "Wrong Password"

          }else if(response == "User Not Registered") {
            var erruserE2 = document.querySelector("#subuserE2")
            erruser2.style.display = "block"
            erruserE2.innerHTML = "User Not Registered"

          }else if(response == "Username Has Already Taken") {
            erruser.style.display = "block"
            erruserE.innerHTML = "Username Has Already Taken"

          }else if(response == "Registration Successful") {
            Swal.fire({
              icon: 'success',
              title: 'Registration Success',
              showConfirmButton: false,
              timer: 4000,
              })
              setTimeout(rere, 4000)
              console.log("berhasil")
              function rere(){
                console.log("clearallboy")
                document.querySelector("#user").value = ""
                document.querySelector("#pass").value = ""
              }
          }
        }
      });/* ini komentar */
    });
  }