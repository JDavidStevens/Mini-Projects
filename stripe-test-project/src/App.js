import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class App extends Component {
constructor(){
  super()
  this.state={
    amount: ''
  }
}
onToken = (token) =>{
  token.card = void 0;
  console.log('token', token)
  axios.post('http://localhost:4000/api/payment',{token, amount:100}).then(response=>{
    alert('we are in business')
  })
}

  render() {
    return (
      <div className="App">
      <input onChange={e=>this.setState({amount:e.target.value * 100})}/>
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
