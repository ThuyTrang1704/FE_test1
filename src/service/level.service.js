import api from "./axiosClient";
import { getAccessToken } from "../utils/helper";

const fetchLevel = async ({keyword, pageSize}) => {
  try {
    const token = getAccessToken();
    const response = await api.get(`/api/filterLevel?keyword=${keyword}&pageSize=${pageSize}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const levelData = response.data;
    return levelData;
  } catch (error) {
    throw new Error("Fetch User failed");
  }
};


const levelService = {
    fetchLevel
};
  
  export default levelService;
  