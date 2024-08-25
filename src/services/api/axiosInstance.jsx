import axios from "axios";
import AuthCookies from "../cookie/authTokenCookie.jsx";
const BASE_URL=import.meta.env.VITE_BASE_API_URL;

const axiosInstance=axios.create();

axiosInstance.interceptors.request.use(
    (config) =>{
        config.url=BASE_URL+config.url;
        console.log(config.url);

        const token = AuthCookies.getAccessToken();

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
     (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

export default axiosInstance;
