import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import AlienButton from './AlienButton.js';
import './styles.css';
import axios from 'axios';
const https = require('https');
// import MaterialTable from "material-table";

var alien_name1;
var alien_planet1;

const divStyle = {
    position: 'fixed',
    bottom: '15%',
    left: '5%',
  };
const divStyle2 = {
    position: 'fixed',
    bottom: '10%',
    left: '5%',
  };
const divStyle3 = {
    position: 'fixed',
    bottom: '22%',
    left: '20%',
  };  
const divStyle4 = {
    position: 'fixed',
    bottom: '27%',
    left: '20%',
  };    
const divStyle5 = {
    position: 'fixed',
    bottom: '27%',
    left: '5%',
    color: 'white'
  };    
const divStyle6 = {
    position: 'fixed',
    bottom: '22%',
    left: '5%',
    color: 'white'
  };      
const divStyle7 = {
    position: 'fixed',
    bottom: '40%',
    left: '5%',
    color: 'white'
  };      
const divStyle8 = {
    position: 'fixed',
    bottom: '33%',
    left: '5%',
    color: 'white'
  };     
const tableStyle1 = {
    position: 'relative',
    top: '40%',
    left: '40%',
    border: '2px solid black',
    width: '50%',
    height: '65%',
    color: 'white'
  };

const tableStyle2 = {
  position: 'relative',
  top: '40%',
  left: '40%',
  border: '1px solid black',
  width: '50%',
  height: '65%',
};

const tdStyle = {
  width: '33.3%',
  padding: '15px;',
  color: 'white'
};

const thStyle = {
  backgroundColor: '#132C4D',
  color: 'white',
  width: '33.3%',
  text: 'bold',
};

const trStyle = {
  width: '10px',
  height: '10px',
  textAlign: 'center',
  border: '2px solid black',
  color: 'white'
}

const imgStyle = {
  width: '100%',
  // height: '100%',
  position: 'top',
  position: 'fixed'
}


const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});
instance.get('http://www.nfalardeau.com:70/show');

const agent = new https.Agent({  
  rejectUnauthorized: false
});



class HomePage extends Component { 

  constructor() {
    super();
    this.state = {
      response: '',
      alien_name1: alien_name1,
      alien_planet1: alien_planet1,
      text: '',
      color: 'red'
    };
    this.create = this.create.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount(){
    this.show();
}

async twoFunctions(alien_name1, alien_planet1){
  console.log("twoFunctions reached")
  this.create(this, alien_name1, alien_planet1); 
  this.show(this);
}

//used to be http://134.122.34.37:70/show

async show(){
  let res = await axios
  .get('http://www.nfalardeau.com:70/show', { httpsAgent: agent })
  .then(function(res) {
    return res;
  })
  .catch(function(error) {
    console.log(error);
  });
  this.setState({response: res.data})
}



async create (alien_name1, alien_planet1) {
  if (typeof alien_name1 !== "undefined" && typeof alien_planet1 !== "undefined" && alien_name1 !== "" && alien_planet1 !== ""){
      console.log("create record with this name and planet: " + alien_name1 + " & " + alien_planet1);
      const res = await axios.get('http://134.122.34.37:70/create', {params: { alien_name1: alien_name1 , alien_planet1: alien_planet1}})
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      }
      ,(error) => {console.log(error);}
      
      );
      this.show();
      this.setState({
        // ** Update "text" property with new value (this fires render() again)
        text: "Sighting added!",
      })
    }
    else this.setState({
      // ** Update "text" property with new value (this fires render() again)
      text: "Please enter the alien's name and home planet!"
    })
  }

render()
{
  const { response, alien_name1, alien_planet1 } = this.state;
return (
<div>
<img src="Halo_menu2.jpg" style={imgStyle}></img>
<h1>Humanity's
<br></br>alien
<br></br>database</h1>

<p style={divStyle7}>
  This is an alien database where we can enter 
  <br></br>
  and keep track of our alien sightings.
</p>
<br></br>
<p style={divStyle8}>
{this.state.text}
</p>
<b style={divStyle5}>
Alien name
</b>

<input style={divStyle4} 
  onChange={e => this.setState({ alien_name1: e.target.value }) }
  maxLength="15"
/>
<b style={divStyle6}>
Alien's home planet
</b>

<input style={divStyle3}
  onChange={e => this.setState({ alien_planet1: e.target.value }) }
  maxLength="15"
/>

<AlienButton title="Add your alien sighting" style={divStyle} 
onClick={this.create.bind(this, alien_name1, alien_planet1)}
>
</AlienButton> 

<nav>
<ul>
<Link to="/SplashPage">
  <AlienButton title="Go back" style={divStyle2}>
  </AlienButton>
  </Link> 
  </ul>
</nav>

{/* <AlienButton title="Add your alien sighting" style={divStyle} 
onClick={this.twoFunctions.bind(this, alien_name1, alien_planet1)}
>
</AlienButton>  */}



<table style={tableStyle1}>
      <tr style={trStyle}>
      <th style={thStyle}>Alien ID</th>
          <th style={thStyle}>Alien name</th>
          <th style={thStyle}>Home planet</th>
          </tr>
      </table>
      
      
{response &&
  response.map(todo => {
    return (
      
      <table style={tableStyle2} >
        
          
        
        <tr style={trStyle}>
          <td style={tdStyle}>
            {todo.alien_id}</td>
          <td style={tdStyle}>
            {todo.alien_name}</td>
            <td style={tdStyle}>
            {todo.alien_planet}</td>
          {/* <td>
            <p key={todo.alien_id}>{todo.alien_name}</p>
          </td> */}
        </tr>
      </table>
      
    );
  })}


</div>
)
}
}


export default HomePage; 


//thoughts on next steps:

//apply for jobs
//then 
//ensure the HTTP issue goes away after a few days
//fix sizing for iPhone
//React icon, prompt for successful creation
//prevent add alien if nothing in text boxes
//work on making custom pages for each alien