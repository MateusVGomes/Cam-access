var users=[{
    login:"admin",
    password:"admin"
}];
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
return isValidUser;
}

console.log(validateLogin("admin","admin"));