function Encrypt1(theText) {
    output = new String;
    Temp = new Array();
    Temp2 = new Array();
    TextSize = theText.length;
    for (i = 0; i < TextSize; i++) {
    	rnd = Math.round(Math.random() * 122) + 68;
    	Temp[i] = theText.charCodeAt(i) + rnd;
    	Temp2[i] = rnd;
    }
    for (i = 0; i < TextSize; i++) {
    	output += String.fromCharCode(Temp[i], Temp2[i]);
    }
return output;
}

function unEncrypt1(theText) {
output = new String;
Temp = new Array();
Temp2 = new Array();
TextSize = theText.length;
for (i = 0; i < TextSize; i++) {
	Temp[i] = theText.charCodeAt(i);
	Temp2[i] = theText.charCodeAt(i + 1);
}
for (i = 0; i < TextSize; i = i+2) {
	output += String.fromCharCode(Temp[i] - Temp2[i]);
}
return output;
}

function Encrypt2(theText) {
    var alfavit = ['e', 'y', 'u', 'i', 'o', 'a', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю']
    return 0;
}

function cipherRot(str) {
  str = str.toUpperCase();
  if (str[0] >= 'А' && str[0] <= 'Я') return str.replace(/[А-Я]/g, rot);
  return str.replace(/[A-Z]/g, rot);

  function rot(correspondance) {
    const charCode = correspondance.charCodeAt();
    if (String.fromCharCode(charCode) >= 'А' && String.fromCharCode(charCode) <= 'Я') return String.fromCharCode(
            ((charCode + 5) <= 1071) ? charCode + 5
                                    : (charCode + 5) % 1071 + 1039
           );
    //A = 65, Z = 90
    return String.fromCharCode(
            ((charCode + 5) <= 90) ? charCode + 5
                                    : (charCode + 5) % 90 + 64
           );

  }
}

function uncipherRot(str) {
  str = str.toUpperCase();
  if (str[0] >= 'А' && str[0] <= 'Я') return str.replace(/[А-Я]/g, unrot);
  return str.replace(/[A-Z]/g, unrot);

  function unrot(correspondance) {
    const charCode = correspondance.charCodeAt();
    if (String.fromCharCode(charCode) >= 'А' && String.fromCharCode(charCode) <= 'Я') return String.fromCharCode(
            ((charCode - 5) >= 1040) ? charCode - 5
                                    :  1072 -  1040 % (charCode - 5)
           );
    //A = 65, Z = 90
    return String.fromCharCode(
            ((charCode - 5) >= 65) ? charCode - 5
                                    : 91 - 65 % (charCode - 5)
           );

  }
}

function dngnshifr(){
var myString = document.getElementById("text-input1").value;
document.getElementById("text-output1").innerHTML=Encrypt1(myString);
 };

function dedngnshifr(){
var myString = document.getElementById("text-input2").value;
document.getElementById("text-output2").innerHTML=unEncrypt1(myString);
 };

function dedirshifr(){
var myString = document.getElementById("text-input3").value;
document.getElementById("text-output3").innerHTML=Encrypt(myString);
 };

function dededirshifr(){
var myString = document.getElementById("text-input4").value;
document.getElementById("text-output4").innerHTML=unEncrypt(myString);
 };

 function prikshifr(){
var myString = document.getElementById("text-input5").value;
document.getElementById("text-output5").innerHTML=cipherRot(myString);
 };

function deprikshifr(){
var myString = document.getElementById("text-input6").value;
document.getElementById("text-output6").innerHTML=uncipherRot(myString);
 };