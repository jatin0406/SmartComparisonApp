import React from 'react'
import page from '../../Containers/Pages/page'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


export default class Search extends React.Component {
    constructor(props) {
      super(props);
    //   this.state = {
    //     value: null,
    //   };
    }
  
    render() {
      return (
      <button className="square" onClick = {() => this.props.history.push(`/page/?${this.props.value}`)} >
          {this.props.value}
        </button>
      );
    }
  }