require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.SK);

const app = express();
app.use(bodyParser.json());
app.use(cors());

let {
    PORT,
    SK
} = process.env;

app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    // const amountArray = req.body.amount.toString().split('');
    // const pennies = [];
    // for (var i = 0; i < amountArray.length; i++) {
    //   if(amountArray[i] === ".") {
    //     if (typeof amountArray[i + 1] === "string") {
    //       pennies.push(amountArray[i + 1]);
    //     } else {
    //       pennies.push("0");
    //     }
    //     if (typeof amountArray[i + 2] === "string") {
    //       pennies.push(amountArray[i + 2]);
    //     } else {
    //       pennies.push("0");
    //     }
    //       break;
    //   } else {
    //       pennies.push(amountArray[i])
    //   }
    // }
    // const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
    amount: req.body.amount, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function(err, charge) {
      if (err) return res.sendStatus(500)
      return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  });

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})