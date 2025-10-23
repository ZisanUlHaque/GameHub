import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/Authprovider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/auth/update-profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">My Profile</h1>

      <img
        src={user?.photoURL || "https://i.ibb.co/4YQpTjP/default-avatar.png"}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700 object-cover"
      />

      <h2 className="text-2xl font-semibold mb-1">
        {user?.displayName || "Anonymous User"}
      </h2>

      <p className="text-gray-600 mb-6">{user?.email}</p>

      <button
        onClick={handleUpdateClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200"
      >
        Update
      </button>
    </div>
  );
};

export default Profile;
