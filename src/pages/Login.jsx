import { Link } from "react-router"; 


const Login = () => {


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5"
      >
        <h2 className="font-semibold text-2xl text-center">
          Login your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">

            <label className=" font-semibold">Email address</label>
            <input name="email" type="email" className="input" placeholder="Email" required/>

            <label className="font-semibold">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required/>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
       
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-5">
              Don't have an accout ? Please{" "}
              <Link to="/auth/register" className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;