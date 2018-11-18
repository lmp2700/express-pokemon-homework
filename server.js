const express = require("express");
const app = express();
port = 3000;
const Pokemon = require('./pokemon');
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send(Pokemon)
});

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: Pokemon
    });
});

// Users should be able to insert a new pokemon into the array using a form on a new.ejs page. Creation 
// should be handled via a POST route to the /pokemon route.
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {
        pokemon: Pokemon[req.params.id]   
    });
    res.redirect('/pokemon')
});

// pokemon.push(req.body)

app.post('/pokemon', (req, res) => {
    Pokemon.push ({
        name: req.body.name,
        img: req.body.img
    })
    res.render('index.ejs', {
        pokemon: Pokemon
    })
})

app.put("/pokemon/:id", (req, res) => {
    Pokemon[req.params.id] = req.body;
    res.redirect("/pokemon")
})

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
    pokemon: Pokemon[req.params.id]
    });
});
 

// The updating should be handled via a POST request to the /pokemon/:id route.
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: Pokemon[req.params.id], 
                 id: req.params.id
    });
    // res.redirect('/pokemon/:id');
});
  

// Users should be able to delete a pokemon using a button provided on the show and index pages.
// The final app should have what are known as the 7 RESTful routes.
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon')
})





app.listen(3000, () => {
    console.log("listening on port 3000")
});

module.exports = app