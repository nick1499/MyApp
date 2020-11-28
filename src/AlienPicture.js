import React, {Component} from 'react'; 
  
class AlienPicture extends Component { 


    render() 
    { 
        return     <img  
            subtitle = {this.props.subtitle}
            height = {this.props.height}
            width = {this.props.width}
            src = {this.props.src}
            

           > 
           </img>
  } 
}   
  
//note that in state you should put = {style{height:10}}
export default AlienPicture; 