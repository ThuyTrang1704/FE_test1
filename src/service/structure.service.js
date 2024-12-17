import api from "./axiosClient";
import { getAccessToken } from "../utils/helper";

const countStructure = async () => {
  try {
    const token = getAccessToken();
    const response = await api.get("/api/countStructure", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error("Count Structure failed");
  }
};


const structureService = {
    countStructure
};
  
  export default structureService;
  


