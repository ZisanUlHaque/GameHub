import React, { useState } from "react";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Info:", { name, photo });
    // You could save to Firebase or local storage here

    navigate("/auth/profile");
  };

  return (
    <div className="">
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
    </div>
  );
};

export default UpdateProfile;
