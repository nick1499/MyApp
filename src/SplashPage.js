import React from 'react'; 
import { Link } from 'react-router-dom';
import AlienButton from './AlienButton.js';
import APIClient from './APIClient.js';
import axios from 'axios';

//this used to be function not a component
//export default function SplashPage() { 
export default class SplashPage extends React.Component {

render(){
  const divStyle = {
    position: 'absolute',
    bottom: '62%',
    left: '5%',
  };
return (
<div>

<h1>Humanity's 
<br></br>alien 
<br></br>database</h1>

<h2>This is the SplashPage page</h2>

<nav>
<ul>
<Link to="/HomePage">
  <AlienButton title="Go to home page" style={divStyle}>
  </AlienButton>
  </Link>
</ul>
</nav>
       
        </div>

)
}
}