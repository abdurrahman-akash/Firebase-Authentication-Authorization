import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { loginUser, loading } = authContext;
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // login function called here
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // Success Notification
        toast.success(`Login successful!`, {
          position: "top-right",
          duration: 4000,
          icon: "🎉",
        });
      })
      .catch((error) => {
        console.log(error);
        // Error Notification
        toast.error(`Login failed!`, {
          position: "top-right",
          duration: 4000,
          icon: "❌",
        });
      });
  };

  if(authContext.user){
    return <Navigate to="/profile" />
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Sign In Card */}
        <div className="card bg-white shadow-xl">
          <div className="card-body p-8">
            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="form-control">
                <label className="label text-black">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-white text-black rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-medium">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full bg-white text-black rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 pr-12"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn w-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-green-500 border-0 transition-all duration-200"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="link link-primary font-medium">
                  Register here
                </Link>
              </p>
            </div>

            {/* Footer */}
            <div className="text-center mt-8 text-sm text-gray-500">
              <p>
                By signing in, you agree to our{" "}
                <Link to="/terms" className="link link-primary">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="link link-primary">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
