import api from "./axiosClient";

const login = async (data) => {
  try {
    const body = {
      email: data.email,
      password: data.password,
    };
    const response = await api.post("/api/login", body);
    const userData = response.data;
    // Kiểm tra nếu remember là true
    if (data.remember) {
      // Lưu thông tin vào localStorage (ghi nhớ đăng nhập)
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      // Lưu thông tin vào sessionStorage (xóa khi đóng trình duyệt)
      sessionStorage.setItem("user", JSON.stringify(userData));
    }
    return userData;
  } catch (error) {
    throw new Error("Login failed");
  }
};

const register = async (data) => {
  try {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      roleId: "2",
    };
    const response = await api.post("/api/register", body);

    // Kiểm tra phản hồi
    if (response.data?.httpCode === 200) {
      return { success: true, message: response.data.message };
    } else {
      console.error("Đăng ký thất bại:", response.data.message);
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    throw new Error("Đăng ký thất bại. Vui lòng thử lại sau.");
  }
};

const authService = {
  login,
  register,
};

export default authService;
