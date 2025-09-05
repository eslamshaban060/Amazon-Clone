import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight, FaEye } from "react-icons/fa";
import { register } from "@/redux/slices/authSlice";
import { validateForm } from "../../../utils/validation";
import { useAppDispatch } from "../../../redux/hooks";
import { RegisterForm as RegisterFormType, MessageState } from "../../../types/auth";
import amazonLogo from "../../../../public/Amazon-Logo-White-PNG-Image.png";

const RegisterForm: React.FC = () => {
  // Local state for form data (email, mobile, password)
  const [form, setForm] = useState<RegisterFormType>({ name: "", mobile: "", password: "" });
  
  // Local state for success/error messages (separate from Redux auth messages)
  const [message, setMessage] = useState<MessageState>({
    text: "",
    status: false,
  });
  
  // Toggle password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Effect to auto-clear messages after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setMessage({ text: "", status: false }), 3500);
    // Cleanup timer on component unmount or message change
    return () => clearTimeout(timer);
  }, [message.text]);

  // Redux dispatch function for triggering actions
  const dispatch = useAppDispatch();

  /**
   * Handle form submission
   * Validates form data and dispatches registration action if valid
   * @param e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Validate form data using validation utility
    const result = validateForm(form);
    
    // If validation fails, show error message and return
    if (!result.valid) {
      setMessage({ text: result.message, status: false });
      return;
    }
    
    // If validation passes, dispatch registration action
    dispatch(register(form));
    
    // Show success message
    setMessage({ text: "Registered successfully! Please login.", status: true });
    
    // Clear form fields after successful registration
    setForm({ name: "", mobile: "", password: "" });
  };

  return (
    <div className="register mt-10 flex flex-col w-full items-center gap-8 p-4 mb-10">
      {/* Amazon logo */}
      <div className="logo w-full">
        <img src={amazonLogo} alt="" className="w-40 mx-auto" />
      </div>
      
      {/* Main registration form container */}
      <div className="max-w-xl w-full mx-auto bg-white p-6 rounded-lg shadow-lg border-[0.2px] border-[var(--bg)]/20 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Create Account</h1>
        
        {/* Registration form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email input field */}
          <div>
            <label className="block text-sm font-medium">Your email</label>
            <input
              className="w-full border rounded p-2"
              // Convert to lowercase for consistent storage and comparison
              onChange={(e) =>
                setForm({ ...form, name: e.target.value.toLowerCase() })
              }
              value={form.name}
            />
          </div>
          
          {/* Mobile number input field */}
          <div>
            <label className="block text-sm font-medium">Mobile number</label>
            <input
              className="w-full border rounded p-2"
              // Convert to lowercase (though numbers shouldn't be affected)
              onChange={(e) =>
                setForm({ ...form, mobile: e.target.value.toLowerCase() })
              }
              value={form.mobile}
            />
          </div>
          
          {/* Password input field with visibility toggle */}
          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            {/* Eye icon for toggling password visibility */}
            <FaEye
              onClick={() => setShowPassword(prev => !prev)}
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
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded"
          >
            Verify mobile number
          </button>
          
          {/* Success/Error message display */}
          <p
            className={`font-medium ${
              // Green for success messages, red for error messages
              message.status ? "text-[var(--green)]" : "text-[var(--red)]"
            }`}
          >
            {message.text}
          </p>
        </form>
        
        {/* Additional information and links */}
        <div className="more border-t border-[var(--bg)]/60 py-2 flex flex-col gap-2">
          {/* Business account promotion */}
          <h2 className="font-[600] sm:text-2xl text-lg">Buying for work?</h2>
          <a
            href="#"
            className="sm:text-[20px] text-[16px] font-[400] text-[var(--blue-link)] hover:underline"
          >
            Create a free business account
          </a>
          {/* Divider */}
          <hr className="rounded-4xl border-[var(--bg)]/60" />
          
          {/* Link to login page for existing users */}
          <p className="sm:text-[20px] text-[15px] font-[400] flex gap-1 sm:flex-row flex-col">
            <span>Already have an account?</span>
            <Link
              to="/login"
              className="text-[var(--blue-link)] hover:underline flex items-center"
            >
              {/* Sign in link with arrow icon */}
              Sign in <FaCaretRight />
            </Link>
          </p>
          
          {/* Terms and conditions text */}
          <p className="w-full sm:text-[20px] text-sm font-[400]">
            By creating an account or logging in, you agree to Amazon's
            <span className="text-[var(--blue-link)] hover:underline mx-2">
              Conditions of Use
            </span>
            and
            <span className="text-[var(--blue-link)] hover:underline mx-2">
              Privacy Notice.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;