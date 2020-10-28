import React from "react";
import "./style.css";

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
    type: "Sports & Fitness",
    about: "Sports euipment for your fitness"
  },

];

const CardListItem = props => {
  return (
    <li>
      <div
        className="card-cont">
        <p>
          <img src={require('../../Images/' + props.character.Image)} alt="Image" />
          
        </p>
        <p><strong>{props.character.type}</strong></p>
        
        <p>{props.character.about}</p>

      </div>
    </li>
  );
};

const CardList = () => {
  return (
    <ul className="category" style={{ listStyleType: "none" }}>
      {characters.map(character => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </ul>
  );
};

export default function Categories() {
  return (
    <div className="category-type">
        <h1 className="primary center">Categories</h1>
      <div>
      <CardList />
      </div>
    </div>
  );
}