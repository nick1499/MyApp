import React from "react";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';







export default class App extends React.Component {

  state = {
    image: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  };

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random'   )
    .then(response => {
    
      this.setState({ image: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }



  render() {
    const { image } = this.state;
    return (element);
    // return (
    //   <picture>
    //     < img  alt="" width="300"
    //          height="300" src={image}/>
    // </picture>
    // );
  }


}


function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

const element = (
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







<a href="#" onClick={handleClick}>
      Click me, a console log will enter
    </a>


    < img  alt="" width="300"
  height="300" src='/elite.png'/>

</div>

);
