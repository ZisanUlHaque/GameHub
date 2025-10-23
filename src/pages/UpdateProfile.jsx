import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { updateUserInfo } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      toast.error("Please fill out both fields!");
      return;
    }

    updateUserInfo(name, photo)
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/auth/profile");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile!");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">Update Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 space-y-4"
      >
        <div>
          <label className="block mb-1">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter photo URL"
            className="w-full px-3 py-2 rounded-lg text-black outline-none"
          />
        </div>

        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full px-3 py-2 rounded-lg text-black outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-200"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
