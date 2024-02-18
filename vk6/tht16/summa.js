const prompt = require('prompt-sync')();

function summaaLuvut() {
    var luku1 = parseFloat(prompt("Anna ensimmäinen luku: "));
    var luku2 = parseFloat(prompt("Anna toinen luku: "));

    return luku1 + luku2;
}

console.log(summaaLuvut());