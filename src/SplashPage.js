import React from 'react'; 
import { Link } from 'react-router-dom';
import AlienButton from './AlienButton.js';
import APIClient from './APIClient.js';
import axios from 'axios';
import './styles.css';

//this used to be function not a component
//export default function SplashPage() { 

  const divStyle = {
    position: 'absolute',
    bottom: '55%',
    left: '5%',
  };
  const divStyle1 = {
    position: 'fixed',
    bottom: '22%',
    left: '5%',
    color: 'white'
  };
  const divStyle2 = {
    position: 'fixed',
    bottom: '17%',
    left: '5%',
    color: 'white'
  };
  const imgStyle = {
  width: '100%',
  // height: '100%',
  // position: 'top',
  top: '0%',
  position: 'fixed',
  transform: 'scaleX(-1)'
    // backgroundImage: 'url("Halo_menu1.png")',
    // backgroundPosition: 'left top',
    // backgroundAttachment: 'fixed',
    // backgroundRepeat: 'no-repeat'
  }

export default class SplashPage extends React.Component {

render(){
  
//for some reason when you make it fixed, it doesn't go to the top
  return (
<div className = "wrapper">
<img src="Halo_menu1.jpg" style={imgStyle}></img>
<h1>Humanity's 
<br></br>alien 
<br></br>database</h1>

<nav>
<ul>
<Link to="/HomePage">
  <AlienButton title="Go to home page" style={divStyle}>
  </AlienButton>
  </Link>
</ul>
</nav>

<b style={divStyle1}>By Nicholas Falardeau</b>
<b style={divStyle2}>All graphic rights to Microsoft</b>
        </div>

)
}
}