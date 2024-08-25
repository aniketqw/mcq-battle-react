// import axiosInstance from "../axiosInstance.jsx";
//
// // Registers a new user by sending their details to the `/register` endpoint
// export const Signup = async (data) => {
//   return await axiosInstance.post(`/register`, data);
// };
//
// // Authenticates an existing user by sending their credentials to the `/login` endpoint
// export const Login = async (data) => {
//   return await axiosInstance.post(`/login`, data);
// };
//
// // Accesses a protected resource by sending a GET request to the `/protected` endpoint
// export const Protected = async () => {
//   return await axiosInstance.get(`/protected`);
// };
import axiosInstance from "../axiosInstance";

class AuthService {
  // Registers a new user by sending their details to the `/register` endpoint
  static async signup(data) {
    //console.log(data); console.log(889);

    return await axiosInstance.post(`/register`, data);
  }

  // Authenticates an existing user by sending their credentials to the `/login` endpoint
  static async login(data) {
    return await axiosInstance.post(`/login`, data);
  }

  // Accesses a protected resource by sending a GET request to the `/protected` endpoint
  static async protectedResource() {
    return await axiosInstance.get(`/protected`);
  }
}

export default AuthService;
