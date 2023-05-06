import useLogin from "../../hooks/useLogin";
import { SiSpotify } from "react-icons/si";

const Login = () => {
  const { url } = useLogin();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <SiSpotify className="font-bold text-3xl" />
          <h1 className="text-2xl font-bold">Spotify Clone</h1>
        </div>
        {url && (
          <a href={url} className="btn bg-primary text-white w-full">
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Login;
