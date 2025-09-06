import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import WaterWave from "react-water-wave";
import { API_PATHS } from "../utils";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false); // 🔥 loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, username, email, password } = signupInfo;

    if (!name || !username || !email || !password) {
      toast.error("Name, Username, email and password are required");
      return;
    }

    try {
      setLoading(true); // ⏳ start loading
      const response = await fetch(
        API_PATHS.AUTH.REGISTER,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupInfo),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setTimeout(() => navigate("/login"), 1000);
      } else if (response.status === 409) {
        if (result.message.toLowerCase().includes("email")) {
          setErrors((prev) => ({ ...prev, email: result.message }));
        } else if (result.message.toLowerCase().includes("username")) {
          setErrors((prev) => ({ ...prev, username: result.message }));
        }
      } else {
        toast.error(result.message || "Signup failed");
      }
    } catch (err) {
      toast.error("An error occurred during signup");
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <WaterWave
      imageUrl="/auth/foot.png"
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
        <div className="sign-up py-8 px-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-md ">
            <div className="flex justify-center">
              <span className="logo">Nova</span>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-white">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-md text-purple-900 font-bold hover:text-blue-800"
              >
                Sign in
              </Link>
            </p>
            <div className="sm:px-3 py-6">
              <form className="space-y-6" onSubmit={handleSignup}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white text-center"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={signupInfo.name}
                    onChange={handleChange}
                    className="caret-gray-500 mt-1 block w-full rounded-xl border px-3 py-2 focus:border-teal-50/20 focus:outline-none focus:ring-1 focus:ring-teal-50/20"
                  />
                </div>

                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-white text-center"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={signupInfo.username}
                    onChange={handleChange}
                    className={`caret-gray-500 mt-1 block w-full rounded-xl border px-3 py-2 focus:border-teal-50/20 focus:outline-none focus:ring-1 ${
                      errors.username ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.username}
                    </p>
                  )}
                </div>

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
                    value={signupInfo.email}
                    onChange={handleChange}
                    className={`caret-gray-500 mt-1 block w-full rounded-xl border px-3 py-2 focus:border-teal-50/20 focus:outline-none focus:ring-1 ${
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
                    autoComplete="new-password"
                    required
                    value={signupInfo.password}
                    onChange={handleChange}
                    className="caret-gray-500 mt-1 block w-full rounded-xl border px-3 py-2 focus:border-teal-50/20 focus:outline-none focus:ring-1"
                  />
                </div>

                {/* Submit */}
                <div className="py-2">
                  <button
                    type="submit"
                    disabled={loading} // ⛔ prevent double submit
                    className={`w-full user-pill flex items-center justify-center px-4 py-3 rounded-full ${
                      loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-secondary/50 hover:bg-secondary/70"
                    }`}
                  >
                    {loading ? (
                      // 🔥 Loader spinner
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
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    ) : (
                      <span className="label text-sm font-medium text-white">
                        Sign up
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </WaterWave>
  );
};

export default Signup;
