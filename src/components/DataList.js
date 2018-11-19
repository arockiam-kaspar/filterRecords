import React, { Component } from 'react'

export default class DataList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data,
        }
    }
    rederRecords = () =>{
        const { data } = this.state;
        const { seachText  } = this.props;
        const filteredRecords = data.filter( val => val.title.indexOf(seachText)!== -1);

        if(filteredRecords){
            return filteredRecords.map((val, idx) => {
                return (
                    <React.Fragment>
                    <tr>
                        <th>{idx+1}</th>
                        <th>{val.userId}</th>
                        <th>{val.title}</th>
                        <th>{val.body}</th>
                    </tr>    
                    </React.Fragment>
                )
            })
        }
        return null;
    }
  render() {
    return (
      <div>
        <div className='table-wrapper'>
            <table className='table-wrapper'>
                <tbody>
                <tr>
                    <th>NO</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                    {this.rederRecords()}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
