import axios from "axios";
import { cookies } from "next/headers";

// Create an instance of Axios
const instance = axios.create({
  baseURL: "your_api_base_url",
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Get the authorization token from the cookies
    const authorizationToken = cookies().get("authorization")?.value;
    // attach authorization token to the server as a cookie called 'authorization' with every request
    // attach token to the server as a cookie called 'token' with every request
    config.headers.Cookie = `authorization=${authorizationToken}; max-age=60; path=/; httpOnly=true;`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the response status code is 401 (Unauthorized)
    if (error.response.status === 401) {
      // send the token from the cookie to http://localhost:8080/auth/refresh attached as authorization cookie alongside the fetch request to get a new authorization token
      // replace that new authorization token in the cookie
      const refreshToken = cookies().get("refreshToken")?.value;
      if (refreshToken) {
        const response = await axios.post("http://localhost:8080/auth/refresh", null, {
          headers: {
            Cookie: `authorization=${refreshToken}`,
          },
        });
        const newAuthorizationToken = response.data.accessToken;
        cookies().set("authorization", newAuthorizationToken, { path: "/" });
        config.headers.Cookie = `authorization=${newAuthorizationToken}; max-age=60; path=/; httpOnly=true;`;
        cookies().set("token", response.data.refreshToken, { path: "/" });
        config.headers.Cookie = `token=${response.data.token}; max-age=${60 * 60 * 24 * 30}; path=/; httpOnly=true;`;

        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
