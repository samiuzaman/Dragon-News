import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const handleLoginForm = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");
    handleLogin(email, password);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-xl lg:text-3xl font-medium text-[#403F3F]">
            Login your account
          </h1>
        </div>
        <div className="divider"></div>
        <div className="card w-full shrink-0 shadow-2xl lg:w-[700px] bg-[#FFFFFF] p-12">
          <form onSubmit={handleLoginForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-[#403F3F] font-medium">
                  Email address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-[#403F3F] font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center pb-4">
            Dont’t Have An Account ?
            <Link to="/auth/register" className="text-[#ff4d47]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
