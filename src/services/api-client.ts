import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0acd4d051e134e19b5ec6c2965bead7f",
  },
});
