import React, { useState, useEffect } from "react";
import {
  Settings,
  Edit3,
  Camera,
  Bell,
  Shield,
  LogOut,
  ChevronRight,
  User,
  Phone,
  Building,
  MapPin,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSetting, setHoveredSetting] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "New York, USA",
    joinDate: "January 2024",
    bio:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
  });

  useEffect(() => {
    const { state } = location;
    if (state) {
      setProfileData((prev) => ({
        ...prev,
        email: state.email || "",
        name: state.fullName || state.email || "",
        phone: state.phoneNumber || "+1 (555) 123-4567",
        company: state.companyName || "PopX Digital Agency",
      }));
    }
    window.history.replaceState({}, document.title);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const settingsItems = [
    {
      id: "notifications",
      icon: Bell,
      title: "Notifications",
      subtitle: "Manage your notification preferences",
      color: "text-blue-500",
    },
    {
      id: "privacy",
      icon: Shield,
      title: "Privacy & Security",
      subtitle: "Control your privacy settings",
      color: "text-green-500",
    },
    {
      id: "account",
      icon: User,
      title: "Account Settings",
      subtitle: "Update your account information",
      color: "text-purple-500",
    },
    {
      id: "logout",
      icon: LogOut,
      title: "Sign Out",
      subtitle: "Logout from your account",
      color: "text-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700 ease-in-out">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-110 hover:-translate-x-1 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Header */}
      <div className="relative pt-8 pb-6 max-w-4xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Account Settings
        </h1>
        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div
          className={`lg:col-span-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/30 transform transition duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative mb-6 group w-24 h-24 mx-auto">
            {profileData.email ? (
              <div className="w-full h-full rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg ring-4 ring-white dark:ring-gray-700 transition-transform duration-300 group-hover:scale-105 select-none">
                {profileData.email.charAt(0).toUpperCase()}
              </div>
            ) : (
              <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-700 transition-transform duration-300 group-hover:scale-105">
                <User className="w-10 h-10 text-gray-600 dark:text-gray-200" />
              </div>
            )}

            <div className="absolute bottom-0 right-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-800 animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {profileData.name}
              </h2>
              <button className="ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <Edit3 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{profileData.email}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">142</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">28</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Clients</div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-3 text-purple-500" /> {profileData.phone}
            </div>
            <div className="flex items-center">
              <Building className="w-4 h-4 mr-3 text-purple-500" /> {profileData.company}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 text-purple-500" /> {profileData.location}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-3 text-purple-500" /> Joined {profileData.joinDate}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Section */}
          <div
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/30 transform transition duration-1000 ease-out translate-y-0 opacity-100"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About</h3>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <Edit3 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{profileData.bio}</p>
          </div>

          {/* Settings List */}
          <div
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/30 transform transition duration-1000 ease-out translate-y-0 opacity-100"
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Settings
            </h3>
            <ul>
              {settingsItems.map(({ id, icon: Icon, title, subtitle, color }) => (
                <li
                  key={id}
                  onMouseEnter={() => setHoveredSetting(id)}
                  onMouseLeave={() => setHoveredSetting("")}
                  onClick={() => {
                    if (id === "logout") {
                      // Add your logout logic here
                      alert("Logged out!");
                    }
                  }}
                  className={`flex items-center justify-between p-3 mb-3 rounded-xl cursor-pointer transition-colors duration-300 ${
                    hoveredSetting === id
                      ? `bg-gradient-to-r from-purple-400 to-indigo-500 text-white`
                      : "bg-transparent text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${color} bg-white dark:bg-gray-900 p-2 rounded-xl`}>
                      <Icon className={`w-6 h-6`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-xs opacity-80">{subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      hoveredSetting === id ? "translate-x-1 text-white" : "text-gray-400 dark:text-gray-500"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
