const express = require('express');
const animals = require('./animals.json'); //Copia il file people.json dentro la variabile people
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/api/album-animali', (req, res) => {
    const animaleSelezionato = animals.animal.find(
        (p) => String(p.id_figurina) === req.query.id
    );
    res.render('animale', {
       
        animal: animaleSelezionato
        
    });
});
app.get('/', (req, res) => {
    res.render('index', {
        titolo:"pagina home",
        animal: animals.animal
        
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});