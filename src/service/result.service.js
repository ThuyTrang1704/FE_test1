import api from "./axiosClient";
import { getAccessToken } from "../utils/helper";

const countResult = async () => {
  try {
    const token = getAccessToken();
    const response = await api.get("/api/countResult", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error("Count Result failed");
  }
};


const resultService = {
    countResult
};
  
  export default resultService;
  