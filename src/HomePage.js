import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import AlienButton from './AlienButton.js';
import './styles.css';
import axios from 'axios';

const divStyle = {
    position: 'absolute',
    bottom: '15%',
    left: '5%',
  };
const divStyle2 = {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
  };
const tableStyle = {
  position: 'relative',
  left: '90%'
};



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
<div>
<h1>Humanity's 
<br></br>alien 
<br></br>database</h1>

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


{response &&
  response.map(todo => {
    return (
      <table style={tableStyle} >
        <tr>
          <td>{todo.alien_id}</td>
          <td>
            <p key={todo.alien_id}>{todo.alien_name}</p>
          </td>
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