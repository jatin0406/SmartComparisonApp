import { Checkbox, FormControlLabel, FormGroup, Slider } from '@material-ui/core'
import React from 'react'
import Header from '../../components/Header'
// import Product from '../../components/ProductCard';
import "./details.css"

const characters = [
    {
      id: 1,
      Image : "redminote10.jpg",
      name: "Nature Green, 4GB Ram, 64GB Storage",
      price: "₹ 10,000",
      price1: "₹ 12,000"
  
    }
  ];
  
  const CardListItem = props => {
    return (
      <li>
        <div className="pro-container">
          <div className="prod-image">
          <img src={require('../../Images/' + props.character.Image)} alt="Image" />
          </div>
          <div className="details">
            <h2>{props.character.name}</h2>
            <h4>Rating: ⭐⭐⭐⭐</h4>
            <h3>Ebay Price : {props.character.price1}</h3>
            <h3>Flipkart Price : {props.character.price}</h3>
            <h3>Best Price : {props.character.price}</h3>
           
            <span>Delivery by: Thursday, Dec 17</span>
          
          
          </div>
        </div>
      </li>
    );
  };
  
  const CardList = () => {
    return (
      <ul  style={{ listStyleType: "none" }}>
        {characters.map(character => {
          return <CardListItem character={character} key={character.id} />;
        })}
      </ul>
    );
  };

export default function details() {
 
    return (
        <>
        <Header/>
        <CardList/>
        
        </>
    )
}
