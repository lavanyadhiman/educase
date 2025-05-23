import { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 transition-all duration-700 ease-in-out p-6">
      
      {/* Back Button */}
      <button
        className={`fixed top-6 left-6 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        style={{ transitionDelay: "700ms" }}
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Form Container */}
      <div className="max-w-md mx-auto mt-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 transition-transform duration-1000 ease-out"
           style={{ transform: visible ? "none" : "translateY(20px)", opacity: visible ? 1 : 0 }}>
        
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Signin to your <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            PopX account
          </span>
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        {/* Email Input */}
        <label className="block text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="w-full px-4 py-4 mb-6 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:shadow-lg transition"
        />

        {/* Password Input */}
        <label className="block text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2">
          Password
        </label>
        <div className="relative mb-8">
          <input
            type={showPass ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-4 pr-12 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:shadow-lg transition"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={() => navigate("/profile", { state: { email, password } })}
          disabled={!email || !password}
          className={`w-full py-4 rounded-2xl font-semibold text-white shadow-lg transition-transform duration-500 ${
            email && password
              ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Login
        </button>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-4 text-sm text-gray-600 dark:text-gray-400">
          <button className="text-purple-600 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
            Forgot Password?
          </button>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
            <span>or</span>
            <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
          </div>
          <button
            className="font-medium text-gray-600 hover:text-purple-600 dark:hover:text-purple-400"
            onClick={() => navigate("/register")}
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
