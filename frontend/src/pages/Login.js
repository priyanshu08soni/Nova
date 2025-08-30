import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import WaterWave from "react-water-wave";
import heroImg from "../assets/foot.jpg";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // 👈 loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    setLoading(true); // 👈 Start loading
    try {
      const response = await fetch(
        `https://nova-qr37.onrender.com/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginInfo),
        }
      );

      const result = await response.json();
      const { success, message, field, jwtToken, name, userId, username } =
        result;

      if (response.ok && success) {
        toast.success(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username);
        setTimeout(() => navigate("/"), 1000);
      } else if (!success && field) {
        setErrors((prev) => ({ ...prev, [field]: message }));
      } else {
        toast.error(message || "Login failed");
      }
    } catch (err) {
      toast.error("An error occurred during login");
    } finally {
      setLoading(false); // 👈 Stop loading after success/error
    }
  };

  return (
    <WaterWave
      imageUrl={heroImg}
      className="h-screen bg-cover flex justify-center items-center"
      options={{
        perturbance: 0.01,
        dropRadius: 10,
        resolution: 512,
        interactive: true,
        crossOrigin: "",
      }}
    >
      {() => (
        <div className="login backdrop-blur-sm border border-teal-50/20 rounded-2xl py-8 px-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div>
              <div className="flex justify-center">
                <span className="logo">Nova</span>
              </div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-white">
                Or{" "}
                <Link
                  to="/signup"
                  className="text-md text-purple-900 font-bold hover:text-blue-800"
                >
                  create a new account
                </Link>
              </p>
            </div>
            <div className="sm:px-10 py-8">
              <form className="space-y-6" onSubmit={handleLogin}>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white text-center"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={loginInfo.email}
                    onChange={handleChange}
                    className={`caret-gray-500 mt-1 block w-full rounded-xl border px-3 py-2 focus:border-teal-50/20 focus:outline-none focus:ring-1 focus:ring-teal-50/20 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white text-center"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={loginInfo.password}
                    onChange={handleChange}
                    className={` caret-gray-500 mt-1 block w-full rounded-xl border px-3 py-2 focus:border-teal-50/20 focus:outline-none focus:ring-1 focus:ring-teal-50/20 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="py-2">
                  <button
                    type="submit"
                    disabled={loading} 
                    className="w-full user-pill flex items-center justify-center px-4 py-3 rounded-full bg-secondary/50 disabled:opacity-50"
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        ></path>
                      </svg>
                    ) : (
                      <span className="label text-sm font-medium text-white">
                        Sign in
                      </span>
                    )}
                  </button>
                </div>

                {/* Test credentials */}
                <div className="mt-4 text-sm text-purple-900 font-semibold ">
                  <div>Use :</div>
                  <div>Email : priyanshus20k4@gmail.com</div>
                  <div>Password : 1234</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </WaterWave>
  );
};

export default Login;
