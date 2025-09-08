import { User, ValidationResult, RegisterForm } from "../types/auth";

export const validateForm = (
  form: RegisterForm, 
  isProfileUpdate: boolean = false, 
  currentUser: User | null = null
): ValidationResult => {
  // Get all existing users from localStorage for duplicate checking
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  
  // Check if email already exists
  // When updating profile, ignore current user's own email to allow keeping same email
  const emailExists = users.some(
    (u) =>
      u.name.toLowerCase() === form.name.toLowerCase() &&
      (!currentUser || u.name.toLowerCase() !== currentUser.name.toLowerCase())
  );

  // Check if mobile number already exists
  // When updating profile, ignore current user's own mobile to allow keeping same mobile
  const numberExists = users.some(
    (u) =>
      u.mobile === form.mobile &&
      (!currentUser || u.mobile !== currentUser.mobile)
  );

  // Return error if email is already registered by another user
  if (emailExists) {
    return { valid: false, message: "Email already registered. Please login." };
  }
  
  // Return error if mobile is already registered by another user
  if (numberExists) {
    return { valid: false, message: "Mobile already registered. Please login." };
  }

  // Check if required fields are provided
  // Both email (name) and mobile are required
  if (!form.name || !form.mobile) {
    return { valid: false, message: "Email or Mobile number is required" };
  }

  // Validate email format using regex
  // Must contain @ symbol and domain with dot
  if (form.name && !/^\S+@\S+\.\S+$/.test(form.name)) {
    return { valid: false, message: "Invalid email format" };
  }

  // Validate mobile number format
  // Must be exactly 11 digits (no spaces, letters, or special characters)
  if (form.mobile && !/^[0-9]{11}$/.test(form.mobile)) {
    return { valid: false, message: "Invalid mobile number" };
  }

  // Password validation
  // Skip password validation for profile updates if password field is empty
  // (allows users to update profile without changing password)
  if (!isProfileUpdate || form.password) {
    // Password is required for new registrations
    if (!form.password) {
      return { valid: false, message: "Password is required" };
    } 
    // Password must be at least 8 characters long
    else if (form.password.length < 8) {
      return { valid: false, message: "Password must be at least 8 characters" };
    }
  }

  // If all validations pass, return success
  return { valid: true, message: "✅ Success" };
};