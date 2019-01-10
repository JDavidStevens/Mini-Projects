import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import axios from 'axios';
import './App.css'

class App extends Component {
constructor(){
  super()
  this.state={
    amount: 0
  }
}

onToken=(token)=>{
  token.card = void 0;
  axios.post('http://localhost:4000/api/payment',{token, amount:this.state.amount}).then(response=>{
    Swal('payment successfully received by Stripe')
    
  })
}
    

handleAmount(value){
  const amountArray = value.split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));
this.setState({amount: convertedAmt})
}

render() {
  console.log('state',this.state.amount)
    return (
      <div className="App">
      <input placeholder="enter a test amount" onChange={e=>this.handleAmount(e.target.value)}/>
      <br/>
        <StripeCheckout 
        token={this.onToken}
        stripeKey={process.env.REACT_APP_PK}
        amount={this.state.amount}
        />
      </div>
    );
  }
}

export default App;
