import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState, LoginForm, RegisterForm } from "../../types/auth";

// Initialize the authentication state from localStorage if available
// This allows users to stay logged in after page refresh
const initialState: AuthState = {
  // Try to restore user from localStorage, parse as User type or set to null
  user: JSON.parse(localStorage.getItem("authUser") || "null") as User | null,
  // Set authentication status based on whether user data exists in localStorage
  isAuthenticated: !!localStorage.getItem("authUser"),
  // No initial message
  message: undefined,
};

// Create the authentication slice using Redux Toolkit
// This manages all authentication-related state and actions
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<RegisterForm>) => {
      // Get existing users array from localStorage or initialize empty array
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
      // Add the new user to the users array
      users.push(action.payload);
      // Save updated users array back to localStorage
      localStorage.setItem("users", JSON.stringify(users));
      // Note: We don't update state here - user must login after registration
    },

    login: (state, action: PayloadAction<LoginForm>) => {
      // Get all registered users from localStorage
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      // Find user by matching email/mobile and password
      // emailOrMobile can match either the 'name' field (email) or 'mobile' field
      const user = users.find(
        (u) =>
          (u.name === action.payload.emailOrMobile ||
            u.mobile === action.payload.emailOrMobile) &&
          u.password === action.payload.password
      );

      // If user found and credentials match
      if (user) {
        // Update Redux state with user data
        state.user = user;
        state.isAuthenticated = true;
        state.message = "Login successful! 🎉";
        // Store user in localStorage for persistence across sessions
        localStorage.setItem("authUser", JSON.stringify(user));
      } else {
        // If credentials don't match, clear state and show error
        state.user = null;
        state.isAuthenticated = false;
        state.message = "Invalid username/mobile or password";
      }
    },

    /**
     * Clear message reducer - removes any displayed message
     * Used to clear success/error messages after timeout
     */
    clearMessage: (state) => {
      state.message = undefined;
    },

    /**
     * Logout reducer - clears user session and authentication state
     * Removes user data from both Redux state and localStorage
     */
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.message = "log out successfull ";
      // Remove user data from localStorage to complete logout
      localStorage.removeItem("authUser");
    },

    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },

    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      // Only proceed if user is currently logged in
      if (state.user) {
        // Merge existing user data with updates
        state.user = { ...state.user, ...action.payload };
        // Update the current user session in localStorage
        localStorage.setItem("authUser", JSON.stringify(state.user));

        // Also update the user in the main users array for future logins
        const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

        const updatedUsers = users.map((u) =>
          (u.name === state.user!.name || u.mobile === state.user!.mobile)
            ? state.user!
            : u
        );

        // Save the updated users array back to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // Set success message for user feedback
        state.message = "Profile updated successfully ✅";
      }
    },
  },
});

export const { register, login, logout, updateProfile, clearMessage, setMessage } =
  authSlice.actions;

// Export the reducer to be used in the store configuration
export default authSlice.reducer;