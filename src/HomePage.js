import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import AlienButton from './AlienButton.js';
import './styles.css';
import axios from 'axios';
// import MaterialTable from "material-table";

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
const tableStyle1 = {
    position: 'relative',
    top: '40%',
    left: '30%',
    border: '2px solid black',
    width: '65%',
    height: '65%',
  };

const tableStyle2 = {
  position: 'relative',
  top: '40%',
  left: '30%',
  border: '1px solid black',
  width: '65%',
  height: '65%',
};

const tdStyle = {
  width: '33.3%',
  padding: '15px;',
};

const thStyle = {
  backgroundColor: '132C4D',
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
    };
    this.show = this.show.bind(this);
  }

  componentDidMount(){
    this.show();
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


render()
{
  const { response } = this.state;
return (
<div style="overflow-x:auto;">
<h1>Humanity's 
<br></br>alien 
<br></br>database</h1>

{/* <MaterialTable title="Employee Details" data={response}  /> */}

{/* columns={columns} */}
<nav>
<ul>
<Link to="/SplashPage">
  <AlienButton title="Go back" style={divStyle2}>
  </AlienButton>
  </Link> 
  </ul>
</nav>
<AlienButton title="Add your alien sighting" style={divStyle} >
</AlienButton> 

<table style={tableStyle1}>
      <tr style={trStyle}>
      <th style={thStyle}>Alien ID</th>
          <th style={thStyle}>Alien Name</th>
          <th style={thStyle}>Alien Planet</th>
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
//format the table nicely, add meaningful fields
//get the "add sighting" button to work and add to the table
//start applying for jobs
//then work on making custom pages for each alien