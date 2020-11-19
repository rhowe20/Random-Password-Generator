// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0,1,2,3,4,5,6,7,8,9]
var lowerLetters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
var upperLetters = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
var characters = [',','.','!','@','#','$','%','^','&','*','/','<','>','?']


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

function generatepassword()

for (var i = 0; i < numbers; i++) {
  var num = Math.floor(Math.random() * Math.floor(10))
  console.log(num);
}
for (var i = 0; i <lowerLetters; i++){
  var num = Math.floor(Math.random() * Math.floor(10))
  console.log(num);
}

for (var i = 0; i < upperLetters; i++){
  var num = Math.floor(Math.random() * Math.floor(10))
  console.log(num);
}

for (var i = 0; i < characters; i++){
  var num = Math.floor(Math.random() * Math.floor(10))
  console.log(num);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
