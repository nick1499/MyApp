import React from "react";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import AlienPicture from './AlienPicture.js';
import { View, Image, StyleSheet } from 'react';

export default class App extends React.Component {


  // step 1 constructor is called first when going through the render() function
  //initializes this.state with the current time


  // step 2 React goes down to the render method to decide what gets placed on the screen (JSX)

  // step 3 React calls the componentdidmount "lifecycle method". This will ask the browser to setup a timer. 
  //this will call the tick method every second

  // step 4 the browser calls the tick method with the new state, UI is updated through the setState 
  // React calls render again since the state has changed
  // note that there is a different format for setState that accepts functions instead of objects. Uses =>

  // step 5, if the clock is removed from the DOM (Document Object Model). The Document Object Model is the document that represents the page the user is looking at, but is constructed in nodes and objects. It is an object-oriented representation of the web page.
 
  constructor(props) {
    super(props);
    this.state = {counter: 0,
    show : true};
   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      counter: this.state.counter + 1
    }));
  }


//nbsp stands for no-break space
  render() {
    return (
      <div>
       
       <h1>Alien database</h1>

   <form action="http://134.122.34.37"  >
   <input type="submit" value="Homepage" class="dropbtn" />
   </form>
   <form action="http://134.122.34.37/search.html"  >
        <input type="submit" value="Search" class="dropbtn" />
   </form>

<DropdownButton id="dropdown-basic-button" title="Categories" variant="outline-dark">
<Dropdown.Item href="http://134.122.34.37/planets.html">Planets</Dropdown.Item>
<Dropdown.Item href="#/action-2">Aliens</Dropdown.Item>
</DropdownButton>


          

        <AlienPicture height="100" width="100" >
        </AlienPicture>  

        <AlienPicture height="200" width="200" >
        </AlienPicture>  
          

        

<br></br>
        <button onClick={this.handleClick}>
        The counter is at &nbsp;  
        { this.state.counter }
      
        </button>


      </div>
    
    );
  }
}


// const element = (
// <div>
// <h1>Alien database</h1>

// <form action="http://134.122.34.37"  >
//       <input type="submit" value="Homepage" class="dropbtn" />
//   </form>
//   <form action="http://134.122.34.37/search.html"  >
//         <input type="submit" value="Search" class="dropbtn" />
//     </form>

// <DropdownButton id="dropdown-basic-button" title="Categories" variant="outline-dark">
// <Dropdown.Item href="http://134.122.34.37/planets.html">Planets</Dropdown.Item>
// <Dropdown.Item href="#/action-2">Aliens</Dropdown.Item>
// </DropdownButton>


// <a href="#" onClick={handleClick}>
//       Click me, a console log will enter
//     </a>


//     < img  alt="" width="300"
//   height="300" src='/elite.png'/>

// </div>

// );
