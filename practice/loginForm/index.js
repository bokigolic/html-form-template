const uName = document.myForm.u_name;
const uPass = document.myForm.u_pass;

const userName = 'boki';
const userPass = '123';


const loginMe = (() => {

  if (uName.value == userName && uPass.value == userPass){
    console.log('Login Success ' + 'userName: ' + userName + " password: " + userPass)
  }else{
    console.log('Login Error' )
  }
}) 