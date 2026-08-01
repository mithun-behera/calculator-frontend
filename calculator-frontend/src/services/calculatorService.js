import axios from "axios";

const API_URL = "https://calculator-backend-hsho.onrender.com/api";

const calculate = (data) => {
  return axios.post(`${API_URL}/calculate`, data);
};

export default { calculate };