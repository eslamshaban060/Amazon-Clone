"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { logout, updateProfile, clearMessage } from "@/redux/slices/authSlice";
import { validateForm } from "@/utils/validation";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { User } from "../../../types/auth";
import amazonLogo from "../../../../public/Amazon-Logo-White-PNG-Image.png";
import AuthFooter from "@/components/footer/AuthFooter";

const ProfilePage: React.FC = () => {
  // Get authentication state from Redux store
  const { user, isAuthenticated, message } = useAppSelector(
    (state) => state.auth
  );

  // Local state for editing form data (starts with current user data)
  const [edit, setEdit] = useState<Partial<User>>(user || {});

  // Toggle between view and edit modes
  const [editMode, setEditMode] = useState<boolean>(false);

  // Redux dispatch function for triggering actions
  const dispatch = useAppDispatch();

  // Toggle password visibility in edit mode
  const [showPassword, setShowPassword] = useState<boolean>(false);

  /**
   * Handle profile update submission
   * Validates form data and dispatches update action if valid
   */
  const handleUpdate = (): void => {
    // Validate the edited form data
    // Pass true for isProfileUpdate and current user for context
    const result = validateForm(edit as User, true, user);

    // If validation fails, show error message and return
    if (!result.valid) {
      dispatch({ type: "auth/setMessage", payload: result.message });
      return;
    }

    // If validation passes, dispatch update action
    dispatch(updateProfile(edit));

    // Set success message
    dispatch({
      type: "auth/setMessage",
      payload: "Profile updated successfully ✅",
    });

    // Exit edit mode
    setEditMode(false);
  };

  // Effect to auto-clear messages after 3 seconds
  useEffect(() => {
    if (message) {
      // Set timer to clear message
      const timer = setTimeout(() => dispatch(clearMessage()), 3000);
      // Cleanup timer on component unmount or message change
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  // If user is not authenticated, show login prompt
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4 text-center">
        {/* Amazon logo */}
        <div className="logo w-full">
          <Image src={amazonLogo} alt="" className="w-40 mx-auto" />
        </div>
        {/* Not logged in message */}
        <h2 className="text-xl font-bold">You are not logged in</h2>
        <p className="text-gray-600">
          Please log in or create an account to access your profile.
        </p>
        {/* Login and Register buttons */}
        <div className="flex gap-4 justify-center mt-4">
          <Link
            href="/login"
            className="bg-[var(--blue)] text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-[var(--orange)] text-white px-4 py-2 rounded hover:bg-[var(--yellow)]"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  // Main profile page layout (when user is authenticated)
  return (
    <div>
      <div className="profile mt-10 flex flex-col w-full items-center gap-8 p-4 mb-10">
        {/* Amazon logo */}
        <div className="logo w-full">
          <Image src={amazonLogo} alt="" className="w-40 mx-auto" />
        </div>

        {/* Profile card container */}
        <div className="max-w-xl w-full mx-auto bg-white p-6 rounded-lg shadow-lg border-[0.2px] border-[var(--bg)]/20 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center">Profile</h2>

          {/* Success/Error message display */}
          {message && (
            <p
              className={`text-center font-medium ${
                // Green for success messages (with ✅), red for errors
                message.includes("✅")
                  ? "text-[var(--green)]"
                  : "text-[var(--red)]"
              }`}
            >
              {message}
            </p>
          )}

          {/* Name/Email field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            {/* Show input in edit mode, display text in view mode */}
            {editMode ? (
              <input
                className="w-full border rounded p-2 mt-1"
                value={edit.name || ""}
                onChange={(e) => setEdit({ ...edit, name: e.target.value })}
              />
            ) : (
              <p className="text-lg font-semibold">{user?.name}</p>
            )}
          </div>

          {/* Mobile number field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Mobile
            </label>
            {/* Show input in edit mode, display text in view mode */}
            {editMode ? (
              <input
                className="w-full border rounded p-2 mt-1"
                value={edit.mobile || ""}
                onChange={(e) => setEdit({ ...edit, mobile: e.target.value })}
              />
            ) : (
              <p className="text-lg font-semibold">{user?.mobile}</p>
            )}
          </div>

          {/* Password field - only shown in edit mode */}
          {editMode && (
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              {/* Eye icon to toggle password visibility */}
              <FaEye
                onClick={() => setShowPassword((prev) => !prev)}
                className={`absolute right-2.5 top-[50%] transform-[translate(0%,0%)] text-2xl cursor-pointer ${
                  showPassword ? "text-[var(--blue)]" : "text-[var(--bg)]"
                }`}
              />
              {/* Password input with toggle between text/password type */}
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border rounded p-2 mt-1"
                value={edit.password || ""}
                onChange={(e) => setEdit({ ...edit, password: e.target.value })}
              />
            </div>
          )}

          {/* Action buttons - different sets for edit/view modes */}
          <div className="flex gap-4">
            {editMode ? (
              // Edit mode buttons: Save and Cancel
              <>
                <button
                  onClick={handleUpdate}
                  className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setEditMode(true)}
                  className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => dispatch(logout())}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default ProfilePage;
