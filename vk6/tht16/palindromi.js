const prompt = require('prompt-sync')();

function tarkistaPalindromi() {
    var sana = prompt("Syötä sana: ");

    var len = sana.length;

    for (i = 0; i < len; i++) {
        if (sana[i] != sana[len-i-1]) {
            console.log("Sana ei ole palindromi.");
            break;
        } else if (i == len - 1) {
            console.log("Sana on palindromi.");
        }
    }
}

tarkistaPalindromi();