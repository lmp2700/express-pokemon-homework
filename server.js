const express = require("express");
const app = express();
port = 3000;
const Pokemon = require('./pokemon')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(Pokemon)
});

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon: Pokemon});
});

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
    pokemon: Pokemon[req.params.id]
    });
});



app.listen(3000, () => {
    console.log("listening on port 3000")
})