import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "77479478b483468b88d6c8a1b18e700f",
  },
});