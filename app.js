const express = require('express');
const animals = require('./animals.json'); //Copia il file people.json dentro la variabile people
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/api/album-animali', (req, res) => {
    res.render('index', {
        
        animals: animals.animal
        
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});