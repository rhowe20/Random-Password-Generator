// Assignment Code
var generateBtn = document.querySelector("#generate");{
}

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['!','@','#','$','%','^','&','*','?','(',')','<','>','=','+','-'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){

  var charChoices = [];
  console.log(charChoices)
  var passwordArr = [];
  console.log(passwordArr)
  

  var length = parseInt(prompt('How long do you want your password? (Choose between 8 and 128)'));
  if(length >= 8 && length <= 128){
    console.log(length)

  var numbers = confirm('Would you like numbers?');
  if(numbers === true){
    charChoices.push('numbers')
  }
  console.log(numbers)

  var lettersUpper = confirm('Would you like Uppercase letters?');
  if(lettersUpper === true){
    charChoices.push('lettersUpper')
  }
  console.log(lettersUpper)

  var lettersLower = confirm('Would you like Lowercase letters?');
  if(lettersLower === true){
    charChoices.push('lettersLower')
  }
  console.log(lettersLower)

  var chars = confirm('Would you like Special Characters?');
  if(chars === true){
    charChoices.push('chars')
  }
  console.log(chars)
  }else{
    alert('Please choose amount between 8 and 128!')
  }
  console.log(charChoices)

    for(var i = 0; i < length; i++){
      var randomCharChoice = charChoices[Math.floor(Math.random() * charChoices.length)-1];

      if(randomCharChoice === 'numbers'){
      }else{
        var randomNum = Math.floor(Math.random() * Math.floor(9))
        passwordArr.push(randomNum)
      }
      if(randomCharChoice === 'lettersUpper'){
      }else{
        var randomUpper = upperCase[Math.floor(Math.random() * upperCase.length)-1]
        passwordArr.push(randomUpper)
      }
      if(randomCharChoice === 'lettersLower'){
      }else{
        var randomLower = lowerCase[Math.floor(Math.random() * lowerCase.length)-1]
        passwordArr.push(randomLower)
      }
      if(randomCharChoice === 'chars'){
      }else{
        var randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)-1]
        passwordArr.push(randomSpecialChar)
        console.log(specialChar)
      }
    }
    var passwordString = passwordArr.join('');
    return passwordString
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
