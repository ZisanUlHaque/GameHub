import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, googleSignIn } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Password validation function
  const isPasswordValid = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    return hasUppercase && hasLowercase && hasMinLength;
  };

  // Email/password registration
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Name validation
    if (name.length < 5) {
      setNameError("Name should be at least 5 characters");
      return;
    } else {
      setNameError("");
    }

    // Password validation
    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must have at least 6 characters, including uppercase and lowercase letters"
      );
      return;
    } else {
      setPasswordError("");
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Register successful!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Google sign-in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Registered with Google!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google login failed!");
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
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
            {nameError && <p className="text-xs text-red-700">{nameError}</p>}

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
            {passwordError && (
              <p className="text-xs text-red-700">{passwordError}</p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            {/* Google Sign-in */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5] flex items-center justify-center gap-2 mt-3"
            >
              <svg
                aria-label="Google logo"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="M0 0H512V512H0" fill="#fff" />
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  />
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  />
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  />
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  />
                </g>
              </svg>
              Register with Google
            </button>

            <p className="font-semibold text-center pt-5">
              Already have an account?{" "}
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
