import React, {Component} from 'react'; 
import AlienButton from './AlienButton.js';
import page1 from './App.js';
import pageSelect from './App.js';
import App from './App.js';

class SplashPage extends Component { 

 


render()

//there is a problem with App.pageSelect specifically

{
return (
<div>
<h2>This is the SplashPage page</h2>
<h1>Humanity's alien database</h1>
<AlienButton route = "HomePage" title = "Enter Database" onClick={App.pageSelect(page1="home")}  >  
</AlienButton> 


</div>
)

}
}


export default SplashPage; 