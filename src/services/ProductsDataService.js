import axios from 'axios';

const API_URL = "http://qcars-backend-finale.herokuapp.com/users/";
class productDataService {
  getAll() {
    return API_URL.get("/products");
  }
  get(id) {
    return API_URL.get(`/products/${id}`);
  }
  create(data) {
    return API_URL.post("/products", data);
  }
  update(id, data) {
    return API_URL.put(`/products/${id}`, data);
  }
  delete(id) {
    return API_URL.delete(`/products/${id}`);
  }
  
 
}
export default new productDataService;