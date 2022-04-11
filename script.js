// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
 function writePassword() {

  var password = generatePassword();
 
  

  passwordText.value = password;
  
  

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 



  

generateBtn.onclick = function(){

  var generatePass=window.prompt("How many characters would you like your password contan?");
 
  var characters=("1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM!@#$%^&*_");
  
 
  var charsCount=10;

  var randomSerial="";
  
  


 for(var i=0 ; i< charsCount;i++){


    if(generatePass > 8 && generatePass < 128){
      
      
      randomSerial += characters[ Math.floor(Math.random() *characters.length)];


    }
    else if(generatePass<8){

      alert("Password lingth must be at least 8 characters")
      break;
    }
    else{
      alert("Password lingth must be less than 128 characters")
      break;
    }
  
    
  }
  
    passwordText.innerHTML=randomSerial;
  };

var getRandomLower= function (){
  return String.fromCharCode(Math.floor(Math.random()*26) +97);
}
function getRandomLUper(){
  return String.fromCharCode(Math.floor(Math.random()*26) +65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10) +48);
}
function getRandomSymbol(){
  var Symbols = "!@#$%^&*_)({}[]<>?/"
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}