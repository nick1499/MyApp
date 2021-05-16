
import axios from 'axios';



class APIClient {


  componentDidMount(){
    this.show();
}

   static async show () {
    console.log("showing aliens");
    const res = await axios.get('http://134.122.34.37:70/show')
    .then((response) => {
      this.setState({response: response.data})
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    }
    ,(error) => {console.log(error);}
    
    );
  }
}
export default APIClient;


// import axios from 'axios';

// class APIClient {

//    static async create (alien_name1) {
//     console.log("create function with this alien name: " + alien_name1);
//     const res = await axios.get('http://134.122.34.37:70/create', {params: { alien_name1: alien_name1 }})
//     .then((response) => {
//       console.log(response.data);
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.headers);
//       console.log(response.config);
//     }
//     ,(error) => {console.log(error);}
    
//     );
//   }
// }
// export default APIClient;