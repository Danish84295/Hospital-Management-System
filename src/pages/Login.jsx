import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {useState} from "react";
import { FaEyeSlash,FaEye } from "react-icons/fa";


function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    console.log("Login Data:", data);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Login
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {/* Email id of user login */}
        <div>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter Email"
            className={`w-full border p-2 rounded ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password of user*/}
        <div>
          <label>Password</label>
          
        <div className="relative">
          <input
            type={showPassword?"text":"password"}
            placeholder="Enter Password"
            className={`w-full border p-2 pr-10 rounded ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message:
                  "Password must be at least 6 characters",
              },
            })}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={()=>{
              setShowPassword(!showPassword)
            }
            }
          >
            {showPassword?(
              <FaEyeSlash/>
            ):(
              <FaEye/>
            )}
          </button>
          </div>
          {errors.password && (
            <p className="text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/*when user Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isSubmitting ? "Logging In..." : "Login"}
        </button>
      </form>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-semibold"
        >
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;