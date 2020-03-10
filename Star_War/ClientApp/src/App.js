import React from 'react';
import './App.css';
import QnA from './components/qna.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/style.css'
import logo from './Assets/logo/Star_Wars_Logo.svg'
class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state={isLoggedIn:false,data:[]};
    this.fetchQnA=this.fetchQnA.bind(this);
  }
  fetchQnA() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' ,'Authorization' :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNhbXBsZSBBcHAiLCJhcHBUb2tlbiI6IjkwYmNmZDAxMWZjZDQ2NmVhNWJkNmE0Y2I5MTY3NDU3IiwibmJmIjoxNTgzMzQ5MjQyLCJleHAiOjE1ODU5NDEyNDIsImlhdCI6MTU4MzM0OTI0MiwiaXNzIjoiZXhwbG9yZS1jYWxpLWlzc3VlciIsImF1ZCI6ImV4cGxvcmUtY2FsaS1hdWRpZW5jZSJ9.2CFeL0vFQTWM0vZ1lzfK8a3R5vzGG4HdnlymN6GhHi0'}
  };
  fetch(`http://localhost:52201/api/Stars`, requestOptions).then(data=>data.json()).then(data=>{
   
      this.setState({data:data});
      this.setState({isLoggedIn:true});
    }).catch(err=>{
      console.log(err);
    })
  }
  render() {
    let qnA=null;
    if(this.state.isLoggedIn){
      qnA= <QnA testData={this.state.data}/>;
    }
    return (
      <div className="mainBody">
        <img src={logo} height="300" width="300" alt="Kiwi standing on oval" />
        <br/>
           <button type="button" className="btn-yellow button btn-sm"  onClick={this.fetchQnA}>
            <span className="glyphicon glyphicon-star"></span> Do. Or do not. There is no try. <span className="glyphicon glyphicon-star"></span>
          </button>
          <br/>
          <br/>
       {qnA}
      </div>
    );
  }

}


export default App;
