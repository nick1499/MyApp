import React from "react";
import axios from "axios";
import "./styles.css";

export default class App extends React.Component {
  state = {
    image: [],
  };

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random'   )
    .then(response => {
    
      this.setState({ image: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  };

  render() {
    const { image } = this.state;
    return (
      <picture>
        < img  alt="" width="300"
             height="300" src={image}/>
    </picture>
    );

}
}