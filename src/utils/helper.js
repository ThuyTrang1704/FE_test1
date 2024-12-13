export const getAccessToken = () => {
  const user = localStorage.getItem("user");
  const token = JSON.parse(user).token;
  return token;
};
export const getAccessRole = () => {
  const user = localStorage.getItem("user");
  const role = JSON.parse(user).role;
  return role;
};
export const getAccessUser = () =>{
  const user = localStorage.getItem("user");
  return user;
}