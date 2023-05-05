import useUser from "../../hooks/useUser";

const Account = () => {
  const { user, isLoading, logout } = useUser();

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1 className="title">Account</h1>
      <div className="flex flex-col items-center">
        <img src={user?.images[0].url} className="w-24 rounded-full" />
        <p className="text-xl font-semibold">{user?.display_name}</p>
        <p className="text-sm">{user?.email}</p>
        <button className="btn mt-4" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
