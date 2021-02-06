
import axios from 'axios';
import App from './App';
import alien_name1 from './App';

class APIClient {

   static async create () {
    console.log("create function called" + alien_name1);
    const res = await axios.get('http://134.122.34.37:70/create', {params: { alien_name1: "luigi" }})
    .then((response) => {
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

