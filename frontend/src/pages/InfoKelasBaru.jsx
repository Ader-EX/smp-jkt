import React, { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import logosmp from "../assets/logo-smp.png";
import logosmpn from "../assets/logo.png";

export default function InfoKelasBaru() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [academicYear, setAcademicYear] = useState("2023/2024");
  const [rememberMe, setRememberMe] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const academicYears = ["2023/2024", "2022/2023", "2021/2022", "2020/2021"];

  const handleSubmit = () => {
    console.log("Login attempt:", {
      username,
      password,
      academicYear,
      rememberMe,
    });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <a href="/">
          <button className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm">Kembali</span>
          </button>
        </a>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Logos */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {/* Left Logo - Garuda/School emblem */}
            <img src={logosmp} alt="" />
            {/* Right Logo - Green emblem */}
            <img src={logosmpn} alt="" className="h-24 w-24" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Login</h1>
            <p className="text-gray-600 font-medium">SIF SMPN 244 Jakarta</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukan Username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukan Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            {/* Academic Year Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tahun Ajaran
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                >
                  <span
                    className={academicYear ? "text-gray-900" : "text-gray-400"}
                  >
                    {academicYear || "2023/2024"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {academicYears.map((year) => (
                      <button
                        key={year}
                        type="button"
                        onClick={() => {
                          setAcademicYear(year);
                          setShowDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-700">Ingat saya</span>
              </label>

              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Forgot Password ?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2 outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
