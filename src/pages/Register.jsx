import { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  User,
  Phone,
  Mail,
  Lock,
  Building,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isAgency, setIsAgency] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
  });

  const [focusedField, setFocusedField] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField("");

  const isFormValid =
    formData.fullName && formData.phoneNumber && formData.email && formData.password;

  const formFields = [
    { key: "fullName", label: "Full Name", type: "text", icon: User, required: true },
    { key: "phoneNumber", label: "Phone number", type: "tel", icon: Phone, required: true },
    { key: "email", label: "Email address", type: "email", icon: Mail, required: true },
    {
      key: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      icon: Lock,
      required: true,
      hasToggle: true,
    },
    { key: "companyName", label: "Company name", type: "text", icon: Building, required: false },
  ];

  const handleRegister = () => {
    navigate("/profile", { state: { ...formData, isAgency } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 transition-all duration-700 ease-in-out">

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-110 hover:-translate-x-1"
          style={{ transitionDelay: "900ms" }}
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Main Container */}
      <div className="flex items-start justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-lg mx-auto pt-16">

          {/* Header */}
          <div className="mb-8 transition-all duration-1000 ease-out">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Create your <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                PopX account
              </span>
            </h1>
          </div>

          {/* Form */}
          <div className="space-y-6">

            {formFields.map(({ key, label, type, icon: Icon, required, hasToggle }, i) => {
              const isFocusedOrFilled = focusedField === key || formData[key];
              return (
                <div
                  key={key}
                  className="transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <label className="block text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2">
                    {label}{required && <span className="text-purple-500">*</span>}
                  </label>

                  <div className="relative group">
                    {/* Icon */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-purple-500 dark:text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Input */}
                    <input
                      type={type}
                      value={formData[key]}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      onFocus={() => handleFocus(key)}
                      onBlur={handleBlur}
                      placeholder={label}
                      className={`w-full pl-12 pr-${hasToggle ? "12" : "4"} py-4 rounded-2xl
                        bg-white dark:bg-gray-800 border-2
                        text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                        focus:outline-none
                        transition duration-300
                        ${isFocusedOrFilled
                          ? "border-purple-500 dark:border-purple-400 shadow-lg scale-105 bg-purple-50/50 dark:bg-purple-900/20"
                          : "border-transparent"
                        }
                      `}
                    />

                    {/* Password Toggle */}
                    {hasToggle && (
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    )}

                    {/* Active Indicator */}
                    {isFocusedOrFilled && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Agency Selection */}
            <div
              className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
              style={{ transitionDelay: "700ms" }}
            >
              <label className="block text-gray-700 dark:text-gray-300 text-base font-medium mb-4">
                Are you an Agency?<span className="text-purple-500">*</span>
              </label>
              <div className="flex space-x-6">

                {[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ].map(({ label, value }) => {
                  const selected = isAgency === value;
                  return (
                    <label key={label} className="flex items-center cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="agency"
                          checked={selected}
                          onChange={() => setIsAgency(value)}
                          className="sr-only"
                        />
                        <div
                          className={`w-6 h-6 rounded-full border-2 transition duration-300
                          ${selected ? "border-purple-500 bg-purple-500" : "border-gray-400 dark:border-gray-600"}`}
                        >
                          {selected && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full animate-scale-in"></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <span className={`ml-3 font-medium transition-colors duration-200 ${selected ? "text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-400"}`}>
                        {label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={!isFormValid}
              onClick={handleRegister}
              className={`w-full py-4 rounded-2xl text-white text-lg font-semibold transition duration-300
                ${isFormValid
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-400/40"
                  : "bg-gray-300 cursor-not-allowed"
                }
              `}
              style={{ transitionDelay: "1000ms" }}
            >
              Create Account
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
