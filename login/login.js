const submitButton =document.getElementById('submitButton');

submitButton.addEventListener('click', submitUser);
var users=[{
    login:"admin",
    password:"admin"
}];
export {users};
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

