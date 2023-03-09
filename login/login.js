const submitButton =document.getElementById('submitButton');

var users=[{
    login:"admin",
    password:"admin"
}];
function submitUser(){
  const loginInput =document.getElementById('loginInput').value;
  const passwordInput =document.getElementById('passwordInput').value;
  console.log(loginInput,passwordInput);
validateLogin(loginInput,passwordInput);

}



function validateLogin(login,password){
    let isValidUser=false;  
    
    let obj={
        login:login,
        password:password
      }
for (let i=0;i<users.length;i++){
          if(JSON.stringify(users[i])===JSON.stringify(obj)){
            isValidUser=true;
          }    
}
return console.log(isValidUser);
}

