import { useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  // Credentials
  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
    "user-read-recently-played",
    "app-remote-control",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
  ];

  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scopes.join(
    " "
  )}&redirect_uri=${redirect_uri}&show_dialog=true`;

  // Get tokens
  const getTokens = async (code: string) => {
    try {
      const result = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: "authorization_code",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              new Buffer(client_id + ":" + client_secret).toString("base64"),
          },
        }
      );

      // Store to local storage
      localStorage.setItem("access_token", result.data.access_token);
      localStorage.setItem("refresh_token", result.data.refresh_token);

      // Yay! Go to home page!
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Redirect to home page if user is already logged in
    if(localStorage.getItem("access_token")) {
        navigate("/")
    }

    // Get code from query params
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    if (code) {
      getTokens(code);
    }
  }, []);

  return { url };
};

export default useLogin;
