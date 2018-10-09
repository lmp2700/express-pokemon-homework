const express = require("express");
const app = express();
port = 3000;
const Pokemon = require('./pokemon')
app.use(express.static('public'))
// Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
// create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser

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

// This route should serve a template called show.ejs which displays the information of a specific pokemon according 
// to their index in the pokemon array. For example, /pokemon/0 should display the 0 indexed pokemon.
// You may want to look up how to access route parameters in express.


// Stretch step, not required : Choose a google font and add it to your html and inside your <style> tag




app.listen(3000, () => {
    console.log("listening on port 3000")
})