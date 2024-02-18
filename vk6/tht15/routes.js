const express = require('express');
const app = express();

app.get('/elama', 
    function(req, res) {
        res.send('Elämä on laiffii');
    }
);

app.get('/kaiku/:k',
    function(req, res) {
        res.send(req.params.k);
    }
);

app.get('/nimmari/:etu/:suku',
    function(req, res) {
        res.send('<i>' +req.params.etu +' ' +req.params.suku +'</i>');
    }
);

app.post('/postaa',
    function(req, res) {
        res.send("Postaus vastaanotettiin");
    }
);

app.use(
    function(req, res, next) {
        // Yleinen skripti tähän
        console.log("Yleistä funktiota kutsuttiin.");
    }
);

app.listen(3000);