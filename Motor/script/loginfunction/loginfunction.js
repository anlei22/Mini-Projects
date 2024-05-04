var attempt = 5;

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "123") {
    if (password === "Admin") {
      window.open("/App/Home/Home.html");
      return false;
    } else {
      attempt--;
      alert("Incorrect Password");
      clearFields();
    }
  } else {
    attempt--;
    alert(
      "Invalid Username or Password. You have left " + attempt + " attempts."
    );
    if (attempt === 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

function clearFields() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
