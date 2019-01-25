import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Popup from "reactjs-popup";
import Payment from '../../payment/payment';
import './signup.css';


class Signup extends Component {
constructor(props){
    super(props)
    this.state={
        first: '',
        last: '',
        email: '',
        phone: ''
    }
}



handleFirstName(value){
    this.setState({first:value})
}

handleLastName(value){
    this.setState({last:value})
}

handleEmail(value){
    this.setState({email:value})
}

handlePhone(value){
    this.setState({phone:value})
}

// handleSignUp(){
//     console.log('state',this.state.attending)
// this.state.attending.map(element=>{
//     if(element.phone===this.state.phone){
//         alert(`Based on the phone number you provided, it looks like you have already registered for the ${this.props.classInfo.title} class`)
//     }
// })
// }
    render() {
        // console.log('attending',this.state.attending)
        // console.log('phone',this.state.phone)
        return (
            <div>
                <h1>{this.props.classInfo.title}</h1>
                <form>
                    first name:<br/>
                    <input type="text" onChange={e=>{this.handleFirstName(e.target.value)}} required/><br/>
                    last name:<br/>
                    <input type="text" onChange={e=>{this.handleLastName(e.target.value)}} required/><br/>
                    email: <br/>
                    <input type="email" onChange={e=>{this.handleEmail(e.target.value)}} required/><br/>
                    phone (w/o dashes):<br/>
                    <input type="tel" size='12' maxLength='10' onChange={e=>{this.handlePhone(e.target.value)}}
                    required/><br/>
                    <Popup trigger={<input type="submit" value="continue" />} modal><Payment workshop={this.props.classInfo} customer={this.state}/></Popup>
                    {/* <Link to='/payment' ><button>continue</button></Link> */}
                </form>
            </div>
        )
    }
}

export default Signup;