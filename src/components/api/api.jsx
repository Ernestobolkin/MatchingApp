import axios from "axios";

export class dogApi {
  static dogApiData = async () => {
    const data = await axios.get("https://dog.ceo/api/breeds/image/random");
    return data.data.message;
  };
  
}
