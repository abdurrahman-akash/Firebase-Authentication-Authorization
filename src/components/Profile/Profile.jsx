import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Profile = () => {
    const { user } = useContext(AuthContext);
  return (
    <div className="p-8 text-black">
      <h1 className="text-3xl font-bold">Welcome to your Profile, { user?.email }</h1>
      <p className="mt-4">Welcome to your profile page!</p>
    </div>
  )
};

export default Profile;
