"use client";
import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { login, clearMessage } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { LoginForm as LoginFormType } from "../../../types/auth";
import amazonLogo from "../../../../public/logo.png";

const LoginForm: React.FC = () => {
  // Local state for form data (email/mobile and password)
  const [form, setForm] = useState<LoginFormType>({
    emailOrMobile: "",
    password: "",
  });

  // Redux dispatch function for triggering actions
  const dispatch = useAppDispatch();

  // Get authentication state and messages from Redux store
  const { message, isAuthenticated } = useAppSelector((state) => state.auth);

  // Toggle password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Navigation hook for programmatic routing
  const router = useRouter(); // ✅ Next.js navigation

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Basic validation - check if both fields are filled
    if (!form.emailOrMobile.trim() || !form.password.trim()) {
      // Clear any existing messages first
      dispatch(clearMessage());
      // Set error message for empty fields
      dispatch({
        type: "auth/setMessage",
        payload: "Please enter email/mobile and password",
      });
      return;
    }

    // If validation passes, attempt login
    dispatch(login(form));
  };

  // Effect to handle post-login actions and message cleanup
  useEffect(() => {
    if (message) {
      // Set timer to clear message after 3 seconds
      const timer = setTimeout(() => {
        // If login was successful, redirect to profile page
        if (isAuthenticated) {
          router.push("/account");
        }
        // Clear the message
        dispatch(clearMessage());
      }, 3000);
      // Cleanup timer on component unmount or message change
      return () => clearTimeout(timer);
    }
  }, [message, dispatch, isAuthenticated, router]);

  return (
    <div className="login mt-10 bg-white flex flex-col w-full items-center gap-8 p-4 mb-10">
      {/* Amazon logo */}
      <div className="logo w-full">
        <Image src={amazonLogo} alt="" className="w-40 mx-auto" />
      </div>

      {/* Main login form container */}
      <div className="max-w-xl w-full mx-auto bg-white p-6 rounded-lg shadow-lg border-[0.2px] border-[var(--bg)]/20 flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email or Mobile input field */}
          <div>
            <label className="block text-sm font-medium">
              Email or mobile phone number
            </label>
            <input
              className="w-full border rounded p-2"
              // Convert to lowercase for consistent comparison
              onChange={(e) =>
                setForm({
                  ...form,
                  emailOrMobile: e.target.value.toLowerCase(),
                })
              }
              value={form.emailOrMobile}
            />
          </div>

          {/* Password input field with visibility toggle */}
          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            {/* Eye icon for toggling password visibility */}
            <FaEye
              onClick={() => setShowPassword((prev) => !prev)}
              className={`absolute right-2.5 top-[50%] transform-[translate(0%,0%)] text-2xl cursor-pointer ${
                showPassword ? "text-[var(--blue)]" : "text-[var(--bg)]"
              }`}
            />
            {/* Password input with dynamic type based on visibility state */}
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border rounded p-2"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[var(--yellow)] hover:bg-yellow-400 text-black py-2 rounded text-[20px]"
          >
            Continue
          </button>

          {/* Success/Error message display */}
          {message && (
            <p
              className={`font-medium ${
                // Green for successful login, red for errors
                isAuthenticated ? "text-[var(--green)]" : "text-[var(--red)]"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        {/* Additional information and links */}
        <div className="more border-t border-[var(--bg)]/60 py-2 flex flex-col gap-2">
          {/* Terms and conditions text */}
          <p className="w-full sm:text-[20px] text-sm font-[400]">
            By creating an account or logging in, you agree to Amazon s
            <span className="text-[var(--blue-link)] hover:underline mx-2">
              Conditions of Use
            </span>
            and
            <span className="text-[var(--blue-link)] hover:underline mx-2">
              Privacy Notice.
            </span>
          </p>
          {/* Divider */}
          <hr className="rounded-4xl border-[var(--bg)]/60" />
          {/* Business account promotion */}
          <h2 className="font-[600] sm:text-2xl text-lg">Buying for work?</h2>
          <a
            href="#"
            className="sm:text-[20px] text-[16px] font-[400] text-[var(--blue-link)] hover:underline"
          >
            Create a free business account
          </a>
        </div>
      </div>

      {/* Registration section for new users */}
      <div className="reg max-w-xl w-full mx-auto">
        <fieldset className="border-t border-[var(--bg)]/60 w-full flex justify-center items-center flex-col p-4">
          {/* "New to Amazon" legend */}
          <legend className="mx-auto p-1 text-[var(--bg)]/90">
            new to amazon
          </legend>
          {/* Link to registration page */}
          <Link
            href="/register"
            className="px-2.5 py-2 border w-full rounded-2xl text-center font-[400] sm:text-[18px] text-sm hover:text-[var(--blue-link)]"
          >
            create your Amazon account
          </Link>
        </fieldset>
      </div>
    </div>
  );
};

export default LoginForm;
