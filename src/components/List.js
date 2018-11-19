import React, { Component } from 'react';
import axios from 'axios';
import DataList from './DataList';

export default class List extends Component {
  state = {
      seachText : '',
      data: [],
  }
  componentDidMount = () => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then( res => {
        this.setState({
            ...this.state,
            data: res.data,
        });
        console.log("data", res);
    })
  }
  
  onChange = (e) =>{
      this.setState({
          seachText: e.target.value,
      })
  }
  render() {
      const { seachText, data  } = this.state;
      const output = {
        data,
        seachText,
      };
    return (
      <div>
            <header className='header-container'>
                List of Posts
            </header>
            <div className='search-wrapper'>
                <p>Filter data as per Title</p>
                <input type="text" value={seachText} onChange={this.onChange}/>
            </div>
            {data.length > 0 ? <DataList {...output}/> : 'No Records Found'}
      </div>
    )
  }
}
