import React, {Component} from 'react'; 
import AlienButton from './AlienButton.js';
import './styles.css';

const divStyle = {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
  };

class HomePage extends Component { 


render()

{
return (
<div>
<h1>Humanity's 
<br></br>alien 
<br></br>database</h1>
    
<AlienButton title="Add your alien sighting" style={divStyle} >
</AlienButton> 

</div>
)
}
}


export default HomePage; 