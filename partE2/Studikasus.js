function buat_login() {
  var elem = document.getElementById("x");
  elem.parentElement.removeChild(elem)

  var p =document.createElement ("p");
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p)
  p.className = "tulisan_login"
  p.innerHTML = "Silahkan Login";

  var form =document.createElement("form");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className= "form_login";
  input_username.value = "Ahmad"
  form.appendChild(input_username)

  var label2 = document.createElement("label2");
  label2.innerHTML = "Password";
  form.appendChild(label2);

  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className= "form_login";
  input_password.value = "xxx";
  form.appendChild(input_password)

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className= "tombol_login";
  form.appendChild(tombol)
}
