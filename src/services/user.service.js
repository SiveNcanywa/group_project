import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://qcars-backend-finale.herokuapp.com/users';
class UserService {
  getPublicContent() {
    return axios.get(API_URL , {headers:authHeader()} );
  }
  
}
export default new UserService();