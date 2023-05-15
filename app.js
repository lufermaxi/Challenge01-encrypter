/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

var phrase = [];
var encryptedPhrase= [];
var index = 0;

function encryption(phrase) {

    for (let index = 0; index < phrase.length; index++) {
        
        if(phrase[index] == "a"){
            encryptedPhrase.push("ai")
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
    
    console.log(encryptedPhrase.join(""));
}

encryption("Osito del amor 🐻❤")


function decryption(phrase) {

    while (index < phrase.length) {
        
        phrase = phrase.replace ('ai', 'a');
        phrase = phrase.replace ('enter', 'e');
        phrase = phrase.replace ('imes', 'i');
        phrase = phrase.replace ('ober', 'o');
        phrase = phrase.replace ('ufat', 'u');
            
        index++
        
    }
    
    console.log(phrase);
    
}

// decryption("fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!")