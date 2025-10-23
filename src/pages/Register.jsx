import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser ,setUser} = use(AuthContext);
  const [nameError,setnameError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (event) => {
    event.preventDefault();
    // console.log(event.target)

    const form = event.target;
    const name = form.name.value;
    if(name.length < 5){
      setnameError("Name should be 5 character");
      return;
    }else{
      setnameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, password, photo, email);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
       setUser(user);
       toast.success("Register successful!");
       navigate(location.state = '/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5
      "
      >
        <h2 className="font-semibold text-2xl text-center">
          Register your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
              required
            />
            {
              nameError && <p className="text-xs text-red-700">{nameError}</p>
            }
            <label className="font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already have an accout ? Please{" "}
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
