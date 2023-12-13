import axios from "axios";
const token = `eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI`;
const httpClient = axios.create({
  baseURL: "https://aspexpressapi-production.up.railway.app",

  headers: {
    Authorization: "Bearer " + token,
  },
});
export default httpClient;
