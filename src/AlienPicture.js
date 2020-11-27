import React, {Component} from 'react'; 
  
class AlienPicture extends Component { 


    render() 
    { 
        return     <img  
            
            height = {this.props.height}
            width = {this.props.width}
            src = '/elite.png'
           > 
           </img>
  } 
}   
  
//note that in state you should put = {style{height:10}}
export default AlienPicture; 