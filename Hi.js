import axios from 'axios'
import React, { Component } from 'react'

export class Hi extends React.Component {
    state={person:[]}
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/usersa')
        .then(res=>{ 
            const person=res.data;
           this.setState({person})
    })
}
  render() {
    return (
      <ol type="A">
        {this.state.person.map(res=><li key={res.id}>{res.name}</li>)}
      </ol>
    )
  }
}

export default Hi