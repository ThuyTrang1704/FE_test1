import api from "./axiosClient";
import { getAccessToken } from "../utils/helper";

const fetchUser = async ({keyword, pageNumber, pageSize}) => {
  try {
    const token = getAccessToken();
    const response = await api.get(`/api/user/filterUser?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = response.data;
    return userData;
  } catch (error) {
    throw new Error("Fetch User failed");
  }
};


const getUser = async () => {
    try {
      const token = getAccessToken();
      const response = await api.get("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data;
      return userData;
    } catch (error) {
      throw new Error("Fetch User failed");
    }
  };



const createUser = async (userData) => {
  try {
    const token = getAccessToken();
    const response = await api.post("/accounts", userData, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    const createdUserData = response.data;
    return createdUserData;
  } catch (error) {
    throw new Error("Create user failed");
  }
};
const updateUser = async (id, data) => {
  try {
    const token = getAccessToken();
    const response = await api.put(`/accounts/${id}`, data, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    const updatedUser = response.data; // Người dùng đã được cập nhật
    return updatedUser;
  } catch (error) {
    throw new Error("Update user failed");
  }
};



const userService = {
  fetchUser,
  getUser,
  createUser,
  updateUser,


};

export default userService;
