export const validateForm = (form, isProfileUpdate = false, currentUser = null) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // When updating profile, ignore current user's own name/mobile
  const emailExists = users.some(
    (u) =>
      u.name.toLowerCase() === form.name.toLowerCase() &&
      (!currentUser || u.name.toLowerCase() !== currentUser.name.toLowerCase())
  );

  const numberExists = users.some(
    (u) =>
      u.mobile === form.mobile &&
      (!currentUser || u.mobile !== currentUser.mobile)
  );

  if (emailExists) {
    return { valid: false, message: "Email already registered. Please login." };
  }
  if (numberExists) {
    return { valid: false, message: "Mobile already registered. Please login." };
  }

  // Name + Mobile check
  if (!form.name || !form.mobile) {
    return { valid: false, message: "Email or Mobile number is required" };
  }

  // Email format
  if (form.name && !/^\S+@\S+\.\S+$/.test(form.name)) {
    return { valid: false, message: "Invalid email format" };
  }

  // Mobile format (11 digits)
  if (form.mobile && !/^[0-9]{11}$/.test(form.mobile)) {
    return { valid: false, message: "Invalid mobile number" };
  }

  // Password check (skip for profile updates if not editing password)
  if (!isProfileUpdate || form.password) {
    if (!form.password) {
      return { valid: false, message: "Password is required" };
    } else if (form.password.length < 8) {
      return { valid: false, message: "Password must be at least 8 characters" };
    }
  }

  return { valid: true, message: "✅ Success" };
};
