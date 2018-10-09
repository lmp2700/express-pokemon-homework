const express = require("express");
const app = express();
port = 3000;
const Pokemon = require('./pokemon')
app.use(express.static('public'))
// Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
// create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser

app.get('/', (req, res) => {
    res.send('hi')
});

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {pokemon: Pokemon});
});

// Add some style to your list with a style tag, or, for an added challenge, look up how to serve static files in an 
// express app and use a separate css file instead.

// Stretch step, not required : Choose a google font and add it to your html and inside your <style> tag




app.listen(3000, () => {
    console.log("listening on port 3000")
})