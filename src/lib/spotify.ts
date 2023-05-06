import axios from "axios";
import { Buffer } from "buffer";

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const accessToken = localStorage.getItem("access_token");
const refreshToken = localStorage.getItem("refresh_token");

// Instance
const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
});

spotify.interceptors.request.use((config) => {
  let token = localStorage.getItem("access_token");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

// Interceptor to refresh token
spotify.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;

    // Refresh the access token if expired
    if (response.status === 401) {
      if (refreshToken) {
        try {
          const result = await axios.post(
            "https://accounts.spotify.com/api/token",
            {
              grant_type: "refresh_token",
              refresh_token: refreshToken,
            },
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                  "Basic " +
                  new Buffer(client_id + ":" + client_secret).toString(
                    "base64"
                  ),
              },
            }
          );

          if (result.data.access_token) {
            localStorage.setItem("access_token", result.data.access_token);
            config.headers[
              "Authorization"
            ] = `Bearer ${result.data.access_token}`;
          }
        } catch (error) {
          console.error(error);
        }
      }

      return spotify(config);
    }

    return Promise.reject(error);
  }
);

export default spotify;
