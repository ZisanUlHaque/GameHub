import React from "react";
import { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/Authprovider";

const Profile = () => {
  const {user} = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/auth/update-profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">My Profile</h1>
      <img
        src="https://i.ibb.co/4YQpTjP/default-avatar.png"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700"
      />
        <div>
          {user && user.email}
          {user && user.name}
        </div>
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
