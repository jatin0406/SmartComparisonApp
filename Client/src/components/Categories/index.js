import React from "react";
import "./style.css";
import axios from 'axios';
import amazon from "../../File/amazon.json"
import flipkart from "../../File/flipkart.json"
import ProductCard from "../ProductCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory ,useLocation } from 'react-router-dom';
import { withRouter } from 'react-router'

const characters = [
  {
    id: 1,
    Image : "kitchen.jpg",
    type: "Kitchen",
    about: "Everything about cooking:kitchen machines"
  },
  {
    id: 2,
    Image : "clothing.jpg",
    type: "Clothing",
    about: "Find your Favorite pullover"
  },
  {
    id: 3,
    Image : "tools.jpg",
    type: "Tools",
    about: "Articles for do-it yourself"
  },
  {
    id: 4,
    Image : "garden.jpg",
    type: "Garden",
    about: "Flower seeds for your own paradise"
  },
  {
    id: 5,
    Image : "health.jpg",
    type: "Health",
    about: "A selection of health item"
  },
  {
    id: 6,
    Image : "fitness.jpg",
    type: "Sports",
    about: "Sports euipment for your fitness"
  },

];


class Categories extends React.Component {
  constructor(props) {
    super(props);
  }
  handleCustomerClick(character) {
    this.props.history.push(`/page?${character.type}`);
  }
  render(){
  return (
    <div className="category-type">
        <h1 className="primary center">Categories</h1>
      <div>
        <ul className="category" style={{ listStyleType: "none" }}>
          {characters.map(character => {
            return(<li>
            <div className="card-cont" onClick = {() => this.handleCustomerClick(character)}>
            <p>
              <img src={require('../../Images/' + character.Image)} alt="Image" />
              
            </p>
            <p><strong>{character.type}</strong></p>
            
            <p>{character.about}</p>
    
            </div>
           </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
  }
}

export default withRouter(Categories)