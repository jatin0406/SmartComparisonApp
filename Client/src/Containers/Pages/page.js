import { Checkbox, FormControlLabel, FormGroup, Slider } from '@material-ui/core'
import React from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard';
import "./page.css"
import axios from 'axios';
import amazon from "../../File/amazon.json"
import flipkart from "../../File/flipkart.json"
import { useHistory ,useLocation } from 'react-router-dom';
import Categories from '../../components/Categories'

class page extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      persons: []
    }
  }
  componentDidMount(){
    
    axios.get(`http://localhost:5000/api/products/product?keyword=${this.props.location.search}`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
  componentDidUpdate(){
    axios.get(`http://localhost:5000/api/products/product?keyword=${this.props.location.search}`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
  render(){
    var minimum = (pa,pf,pe) => {
      return Math.min(pa,pf,pe);
    }
    let i='1';
  //   const history = useHistory()
  //  console.log(history.location.pathname)
  // console.log(window.location.href)
    return (
        <>
        <Header/>
        <div className="page">
            <div className="filter">
              <form action="">
              <div className="brand">
              <h5>Brand</h5>
              <input type="checkbox" name="filter1" id=""/>
              <label for="brand1"> Brand1</label><br></br>
              <input type="checkbox" name="filter1" id=""/>
              <label for="brand2"> Brand2</label><br></br>
              <input type="checkbox" name="filter1" id=""/>
              <label for="brand3"> Brand3</label><br></br>
              <input type="checkbox" name="filter1" id=""/>
              <label for="brand4"> Brand4</label><br></br>
              </div>
              <div className="pricerange">
                <h5>Price</h5>
              <Slider style={{width:250}}
              track={false}
              aria-labelledby="track-false-slider"
              // getAriaValueText={valuetext}
              defaultValue={30}
              // marks={marks}
            />
              </div>
              <div className="rating">
              <h5>Customer Ratings</h5>
              <input type="checkbox" name="filter1" id=""/>
              <label for="brand1"> 4⭐ & above</label><br></br>
              <input type="checkbox" name="filter1" id=""/>
              <label for="brand2"> 3⭐ & above</label><br></br>
              <input type="checkbox" name="filter1" id=""/>
              <label for="brand3"> 2⭐ & above</label><br></br>
              <input type="checkbox" name="filter1" id=""/>
              <label for="brand4"> 1⭐ & above</label><br></br>
              </div>
              </form>
            </div>
            {/* <h1>{this.state.persons.map(person => <li>{person.price}</li>)}</h1> */}
            <div className="product">
            <div className="product-container">
            <div className="prod-img">
            {/* <img src={require('../../Images/' + props.character.Image)} alt="Image" /> */}
            </div>
            {console.log(this.state.persons)}
            {
              this.state.persons.map((ele,ind)=> {
                
                let str = 'price';
                let pe = parseInt(ele.currentPrice,10)*75,pa = amazon["mi10"][str.concat(i)],pf = flipkart["mi10"][str.concat(i)];
                i = parseInt(i,10);
                i++;
                return (
                  <div className="prod-details">
                    <h2 
                    onClick = {() => this.props.history.push(
                    {pathname:`/productCard?${ele.itemId}`,
                    state: ele,
                    })} 
                    >{ele.title}</h2> 
                    <h4>Rating: ⭐⭐⭐⭐</h4>
                    <h3>minimum Price : Rs{minimum(pa,pe,pf)}</h3>
                    {console.log(ele)}
                    <h3>ebay Price : Rs{pe}</h3> 
                    <h3>Amazon Price : Rs{pa}</h3>
                    <h3>Flipkart Price : Rs{pf}</h3>
                    <img src={ele.pictureURLLarge}/>
                   <p></p>
                  </div>
                )
                
              })
            }
    
          </div>
            </div>
        </div>
        </>
    );
  }
}

export default page;
