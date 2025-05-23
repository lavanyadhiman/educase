import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-700 ease-in-out">

      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-sm mx-auto">

          {/* New Logo / Icon */}
          <div
            className={`mb-16 text-center transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <div className="relative inline-block w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-green-400 to-teal-500 shadow-lg animate-bounce-slow">
              <span className="flex items-center justify-center h-full text-white font-extrabold text-5xl select-none">
                P
              </span>
            </div>
          </div>

          {/* Welcome Text */}
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                PopX
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed px-4">
              Lorem ipsum dolor sit amet, <br className="hidden sm:block" />
              consectetur adipiscing elit,
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
              onClick={() => navigate("/register")}
            >
              <span className="relative z-10">Create Account</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <button
              className={`w-full bg-purple-100 dark:bg-gray-700 hover:bg-purple-200 dark:hover:bg-gray-600 text-purple-700 dark:text-purple-300 font-semibold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
              onClick={() => navigate("/login")}
            >
              <span className="relative z-10">Already Registered? Login</span>
            </button>
          </div>

          {/* Bottom Dots */}
          <div
            className={`mt-12 flex justify-center space-x-2 transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-40 right-16 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-28 h-28 bg-purple-100 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-36 h-36 bg-blue-100 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* CSS for bounce-slow animation */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12%);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
