require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.SK);

const app = express();
app.use(bodyParser.json());
app.use(cors());

let {
  SERVER_PORT,
  SK
} = process.env;

app.post('/api/payment', function (req, res, next) {
  const charge = stripe.charges.create({
    amount: req.body.amount, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function (err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`)
})