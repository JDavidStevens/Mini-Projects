import React, { Component } from 'react';
import axios from 'axios';
import './classes.css';

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
<h2>{element.title}</h2>
<div className='row'>
<div>
<p>{element.date}</p>
<p>{element.time}</p>
<p>{element.location}</p>
</div>
</div>
<div>
<img className="project-image" src={element.image} alt="project image"/>
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