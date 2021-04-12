import React from 'react'; 
import AlienButton from './AlienButton.js';
import pageSelect from './App.js';

import { Link } from 'react-router-dom';

export default function SplashPage() { 
    



   
return (
<div>
<h2>This is the SplashPage page</h2>
<h1>Humanity's alien database</h1>
{/* <AlienButton route = "HomePage" title = "Enter Database"  >  
</AlienButton> */}
 
 <nav>
        <ul>
          <li><Link to="/HomePage">Home page</Link></li>
        </ul>
      </nav>
</div>


)


}





// class SplashPage extends Component { 
    
//     render()
    
//     {
       
//     return (
//     <div>
//     <h2>This is the SplashPage page</h2>
//     <h1>Humanity's alien database</h1>
//     <AlienButton route = "HomePage" title = "Enter Database"  onClick={pageSelect.bind(this, "home")} >  
//     </AlienButton>
     
//     </div>
//     )
    
//     }
//     }
    
//     export default SplashPage; 