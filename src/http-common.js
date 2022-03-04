import axios from "axios";
export default axios.create({
  baseURL: "http://qcars-backend-finale.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});