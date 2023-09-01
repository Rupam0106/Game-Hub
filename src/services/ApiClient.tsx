import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b594f3eb1b6b4aad8bbe1fb5ad10e068",
  },
});