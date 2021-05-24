import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import AlienButton from './AlienButton.js';
import './styles.css';
import axios from 'axios';
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
    bottom: '20%',
    left: '10%',
  };  
const divStyle4 = {
    position: 'fixed',
    bottom: '25%',
    left: '10%',
  };    
const tableStyle1 = {
    position: 'relative',
    top: '40%',
    left: '40%',
    border: '2px solid black',
    width: '50%',
    height: '65%',
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
}

class HomePage extends Component { 

  constructor() {
    super();
    this.state = {
      response: '',
      alien_name1: alien_name1,
      alien_planet1: alien_planet1
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
  this.show(this)
}

async show(){
  let res = await axios
  .get('http://134.122.34.37:70/show')
  .then(function(res) {
    return res;
  })
  .catch(function(error) {
    console.log(error);
  });
  this.setState({response: res.data})
}

async create (alien_name1, alien_planet1) {
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
    }

render()
{
  const { response, alien_name1, alien_planet1 } = this.state;
return (
<div>
<h1>Humanity's 
<br></br>alien 
<br></br>database</h1>


<input style={divStyle4}
  onChange={e => this.setState({ alien_name1: e.target.value }) }
  maxLength="15"
/>

<input style={divStyle3}
  onChange={e => this.setState({ alien_planet1: e.target.value }) }
  maxLength="15"
/>

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

<AlienButton title="Add your alien sighting" style={divStyle} 
onClick={this.create.bind(this, alien_name1, alien_planet1)}
>
</AlienButton> 

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
//make it pretty, add background, prompts
//start applying for jobs
//then work on making custom pages for each alien