import React, {Component} from 'react'; 
  
class AlienPicture extends Component { 
    constructor(props)
  {
    super(props);
    this.state = { 
height : '100',
width : '500'
};
  }

    render(i) 
    { 
        return     <img  
            
            style = {this.props.style}
            src = '/elite.png'
           > 
           </img>
  } 
}   
  
//note that in state you should put = {style{height:10}}
export default AlienPicture; 