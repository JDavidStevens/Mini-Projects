import React, { Component } from 'react';
import swal from 'sweetalert2';
import axios from 'axios';

class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attending: [],
            first: '',
            last: '',
            email: '',
            phone: ''
        }
    }

    // async componentDidMount() {
    //     const res = await axios.get(`/api/classRoster?id=${this.props.classInfo.id}`)
    //     await this.setState({ attending: res.data })


    // }

    render() {
        console.log('ci',this.props.customer)
        return (
            <div>
                {this.props.customer.first}
                payment page
            </div>
        )
    }
}

export default Payment;