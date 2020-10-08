import React from "react";
import "./style.css";

const characters = [
  {
    id: 1,
    // img : "require('../../Images/a2.jfif')",
    // img : {<img src={require('../../Images/a2.jfif')} alt="SmartComparison" srcset=""/>} ,
    Image : "gagan.jpg",
    name: "Gagan Chaudhary",
    alignment: "CEO",
    fb: "https://www.facebook.com/gagan.chaudhary.1293/",
    mail : "mailto:201852009@iiitvadodara.ac.in",
    linkedin : "www.linkedin.com/in/thegaganchaudhary",
    insta : "https://www.instagram.com/da__hunk/"
  },
  {
    id: 2,
    Image : "Jatin.jpeg",
    name: "Jatin Singh Chauhan",
    alignment: "CEO",
    fb: "#",
    mail : "mailto:201851054@iiitvadodara.ac.in",
    linkedin : "#",
    insta : "#"
  },
  {
    id: 3,
    Image : "narayan2.jpg",
    name: "Narayan Kalani",
    alignment: "CEO",
    fb: "https://www.facebook.com/narayan.kalani.7",
    mail : "mailto:201852021@iiitvadodara.ac.in",
    linkedin : "https://www.linkedin.com/in/narayan-kalani-14a022179/",
    insta : "https://www.instagram.com/kalani.nk"
  }
];

const CardListItem = props => {
  return (
    <li>
      <div
        className="card-container">
        <p>
          <img src={require('../../Images/' + props.character.Image)} alt="Image" />
          
        </p>
        <p><strong>{props.character.name}</strong></p>
        
        <p>{props.character.alignment}</p>
        <div>
        <a href={props.character.fb} class="fa fa-facebook" target="_blank"></a>
                <a href={props.character.mail} class="fa fa-google" target="_blank"></a>
                <a href={props.character.insta} class="fa fa-instagram" target="_blank"></a>
                <a href={props.character.linkedin} class="fa fa-linkedin" target="_blank"></a>
        </div>
      </div>
    </li>
  );
};

const CardList = () => {
  return (
    <ul className="gaga" style={{ listStyleType: "none" }}>
      {characters.map(character => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </ul>
  );
};

export default function Cards() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}