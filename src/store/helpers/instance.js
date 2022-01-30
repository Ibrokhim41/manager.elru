import axios from "axios";
import { api_url } from "../api_ulr";
const config = {
  Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  "Access-Control-Allow-Origin": "*",
};

const axios_instance = axios.create({
  baseURL: api_url,
  headers: config,
});
export default axios_instance;
