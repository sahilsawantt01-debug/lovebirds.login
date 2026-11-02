

document.getElementById("loginForm").addEventListener("submit", function (e) {

  e.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Please enter username and password");
  }
  else {
    alert("Welcome to Lovebirds!");
  }

});
