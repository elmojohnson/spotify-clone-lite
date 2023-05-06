import LoadingState from "../../components/utils/LoadingState";
import useUser from "../../hooks/useUser";

const Account = () => {
  const { user, isLoading, logout } = useUser();

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div>
      <h1 className="title">Account</h1>
      <div className="flex items-start justify-between p-4 bg-white border rounded">
        <div className="flex items-center space-x-4">
          <img src={user?.images[0].url} className="w-24 rounded-full" />
          <div className="leading-none">
            <p className="md:text-xl text-2xl font-bold">{user?.display_name}</p>
            <p className="md:text-xs text-md">{user?.email}</p>
          </div>
        </div>
        <button className="md:block hidden btn px-2 py-1 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:brightness-100">
          Logout
        </button>
      </div>

      <button className="mt-4 w-full md:hidden block btn px-2 py-1 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:brightness-100">
          Logout
        </button>
    </div>
  );
};

export default Account;
