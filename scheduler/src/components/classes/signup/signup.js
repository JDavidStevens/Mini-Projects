import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './signup.css';

class Signup extends Component {
constructor(){
    super()
    this.state={
        first: '',
        last: '',
        email: '',
        phone: ''
    }
}
    render() {
        return (
            <div>
                <h1>{this.props.classInfo.title}</h1>
                <form>
                    first name:<br/>
                    <input type="text" required/><br/>
                    last name:<br/>
                    <input type="text" required/><br/>
                    email: <br/>
                    <input type="email" required/><br/>
                    phone:<br/>
                    {/* <PhoneInput
                    country='US'
                    // value= {this.state.phone}
                    onChange={ phone => this.setState({ phone }) }
                    maxLength={14}
                    /> */}
                    <input type="tel" size='12' maxLength='12' placeholder='000-000-0000'
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required/><br/>
                    <span>required format: 123-456-7890</span>
                </form>
            </div>
        )
    }
}

export default Signup;