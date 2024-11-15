import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { handleRegister } = useContext(AuthContext);
  const handleForm = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    handleRegister(email, password);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-xl lg:text-3xl font-medium text-[#403F3F]">
            Register your account
          </h1>
        </div>
        <div className="divider"></div>
        <div className="card w-full shrink-0 shadow-2xl lg:w-[700px] bg-[#FFFFFF] p-12">
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-[#403F3F] font-medium">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-[#403F3F] font-medium">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-[#403F3F] font-medium">
                  Email
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center pb-4">
            Already Have An Account ?
            <Link to="/auth/login" className="text-[#ff4d47]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
