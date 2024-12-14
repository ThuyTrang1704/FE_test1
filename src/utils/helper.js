export const getAccessToken = () => {
  const user = localStorage.getItem("user");
  const token = JSON.parse(user).token;
  return token;
};
export const getAccessRole = () => {
  const user = getAccessUser();
  return user ? user.role : null; // Trả về role hoặc null nếu không có
};
export const getAccessUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user); // Trả về đối tượng người dùng
  }
  return null;
};