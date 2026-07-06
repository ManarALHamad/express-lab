const express = require('express')
const morgan = require ('morgan')

const app = express()

app.use (morgan ('dev'))

//1.username
app.get ('/greetings/:username', function(req, res){

res.send(`What a delight it is to see you once more ${req.params.username}`)


})

//2. rolling the dice 

app.get('/roll/:number', function(req, res){

    const number = Number(req.params.number)

    const max = number;

    const random =  Math.floor(Math.random(number) * max)
   

    console.log(typeof(number))

    if (typeof(number)){

        res.send(`You rolled ${random}`)
    }

    else {

        res.send('you must specify a number')
    }
    
})


//3. I want that one

app.get('/collectibles/:index', function (req, res) {

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const index = Number(req.params.index);
  const item = collectibles[index];

  if (item) {

    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);

  } else {
    
    res.send('This item is not yet in stock. Check back soon!');
  }

});

//4. shoes route query

  const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', function (req, res) {

  let filtered = shoes;

  if (req.query["min-price"]) {
    filtered = filtered.filter(function (shoe) {
      return shoe.price >= Number(req.query["min-price"]);
    });
  }

  if (req.query["max-price"]) {
    filtered = filtered.filter(function (shoe) {
      return shoe.price <= Number(req.query["max-price"]);
    });
  }

  if (req.query.type) {
    filtered = filtered.filter(function (shoe) {
      return shoe.type === req.query.type;
    });
  }

res.send(filtered)

});




app.listen(3000, function(){

    console.log('listening on port 3000💕')
})
