var inText = document.querySelector("#in-text");
var outText = document.querySelector("#out-text");
var btnEncrypt = document.querySelector("#encrypt");
var btnDecrypt = document.querySelector("#decrypt");
var btnCopy = document.querySelector("#copy");
var message = document.querySelector("#hide-message");

///--------------------------------------------FUNCTIONS---------------------------------------///
///*******************************************************************************************///

function encryption(phrase) { 
    
    var phrase = phrase.value
    var encryptedPhrase = [];

    for (let index = 0; index < phrase.length; index++) {
        
        if(phrase[index] == "a"){
                encryptedPhrase.push("ai");
            }
            
            else if (phrase[index] == "e"){
                encryptedPhrase.push("enter")
            }
            else if (phrase[index] == "i"){
                encryptedPhrase.push("imes")
            }
            else if (phrase[index] == "o"){
                encryptedPhrase.push("ober")
            }
            else if (phrase[index] == "u"){
                encryptedPhrase.push("ufat")
            }
            else{
                encryptedPhrase.push(phrase[index])
        }
    }

    var final = encryptedPhrase.join("");

    return final
}

function decryption(phrase) {

    var phrase = phrase.value
    var index = 0;

    while (index < phrase.length) {
        
        phrase = phrase.replace('ai', 'a');
        phrase = phrase.replace('enter', 'e');
        phrase = phrase.replace('imes', 'i');
        phrase = phrase.replace('ober', 'o');
        phrase = phrase.replace('ufat', 'u');
            
        index++
    }
    
    return phrase;
}


///---------------------------------------------BUTTONS---------------------------------------///
///*******************************************************************************************///

btnEncrypt.onclick = function () {
    message.style.opacity = "0";
    document.querySelector("#out-text").innerHTML = encryption(inText);
 }

btnDecrypt.onclick = function () {
    message.style.opacity = "0";
    document.querySelector("#out-text").innerHTML = decryption(inText);
}

btnCopy.onclick = function () {

    navigator.clipboard.writeText(outText.value);
    message.style.opacity = "1";
    message.style.transition = "700ms";
 }

 // fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!