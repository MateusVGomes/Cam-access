
const specialCharacterRegex = /[\W]/g;
const upperCaseCharacterRegex = /[A-Z]/g;
const formInput = document.getElementById("formRegister");
const inputPassword = document.getElementById("inputPassword");
inputPassword.addEventListener("change", function () {
  if (specialCharacterRegex.test(inputPassword.value) == true) {
    console.log('Caracter especial presente');
  }
else{
    console.log('Caracter especial não presente');
}
if(upperCaseCharacterRegex.test(inputPassword.value) == true){
    console.log('Letra maiscula presente');
}
else{
    console.log('letra maiscula não presente');
}

});

function verifyPassword() {}
