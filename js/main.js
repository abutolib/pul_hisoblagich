// var number = prompt('Sonni kiriting');

// if (number % 2 == 0) {
//   console.log(number + " " + "juft son");

// }
// else {
//   console.log(number + " " + "toq son");
// }

// var userGender = prompt('Jinsingizni kiriting');
// var userName = prompt('Ismingizni kiriting');
// var eluserGender = document.querySelector(".gender");
// var eluserName = document.querySelector(".name");


// eluserName.textContent = userName;
// if(userGender == "male")
// {
//   eluserGender.textContent = "Janob";

// }
// else{
//   eluserGender.textContent = "Xonim";
// }

var userName = prompt('Ismingizni kiriting :'); 
var userMoney = prompt('Mablag\'ingizni kiriting :');

var eluserAnswer = document.querySelector(".answer");

var totalMoney =  (500+250) * 11225 + 120 * 11686;

if(userMoney >= totalMoney){
  eluserAnswer.textContent = `Oq yo'l ${userName}`;
}
else{
  eluserAnswer.textContent =`Puldan muammo Bor ${userName}`;
}