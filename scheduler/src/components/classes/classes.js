import React, { Component } from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import './classes.css';
import Signup from './signup/signup';
import swal from 'sweetalert2';

class Classes extends Component {
  constructor(){
    super()
    this.state={
      event:[]
    }
  }

  componentDidMount(){
    axios.get('/api/events').then(res=>{
      this.setState({event:res.data})
    })
  }


  render() {
    console.log('event',this.state.event)
    const list = this.state.event.map((element,index)=>{
      return(
      <div className="card-container" key={index}>
<h2 className='project-title'>{element.title}</h2>
<div className='row'>
<div className='class-info'>
<p>{element.date}</p>
<p>{element.time}</p>
<p>{element.location}</p>
      <Popup trigger={ 
      <button className='sign-up-button'>Sign Up!</button>}
       modal>
      <Signup let classInfo={element}/>
      </Popup> 
</div>
</div>
<div>
<img className="project-image" src={element.image} alt=""/>
{/* <p>{element.description}</p> */}
</div>
      </div>)
    })

    return (
      <div className="classes">
        {list}
      </div>
    );
  }
}

export default Classes;