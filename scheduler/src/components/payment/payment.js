import React, { Component } from 'react';
import swal from 'sweetalert2';

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

    async componentDidMount() {
        const res = await axios.get(`/api/classRoster?id=${this.props.classInfo.id}`)
        await this.setState({ attending: res.data })


    }

    render() {
        return (
            <div>
                payment page
            </div>
        )
    }
}

export default Payment;