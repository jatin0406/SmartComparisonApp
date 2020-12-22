import React, { Component } from 'react'
import Header from '../../components/Header'

export default class ProductCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ele : this.props.state
    };
  }
  render() {
    let persons = this.props.location.state;
    return (
      <>
      <Header/>
      <div>
        <div className="left">

        </div>
        <div className="right">
          <h2>{this.props.ele.itemId}</h2> 
          <h4>Rating: ⭐⭐⭐⭐</h4>
          {/* <h3>minimum Price : Rs{}</h3> */}
          {/* {console.log(ele)} */}
          {/* <h3>ebay Price : Rs{}</h3>  */}
          {/* <h3>Amazon Price : Rs{}</h3> */}
          {/* <h3>Flipkart Price : Rs{}</h3> */}
          {/* <img src={ele.pictureURLLarge}/> */}
        </div>
      </div>
      </>
    )
  }
}
