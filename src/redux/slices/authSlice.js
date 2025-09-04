import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("authUser")) || null,
  isAuthenticated: !!localStorage.getItem("authUser"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
    },
    login: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) =>
          (u.name === action.payload.emailOrMobile ||
            u.mobile === action.payload.emailOrMobile) &&
          u.password === action.payload.password
      );

      if (user) {
        state.user = user;
        state.isAuthenticated = true;
        state.message = "Login successful! 🎉";
        localStorage.setItem("authUser", JSON.stringify(user));
      } else {
        state.user = null;
        state.isAuthenticated = false;
        state.message = "Invalid username/mobile or password";
      }
    },
    clearMessage: (state) => {
      state.message = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.message = "log out successfull ";
      localStorage.removeItem("authUser");
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
updateProfile: (state, action) => {
  // update logged-in user in Redux
  state.user = { ...state.user, ...action.payload };
  localStorage.setItem("authUser", JSON.stringify(state.user));

  // also update the user in the full users list
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map((u) =>
    (u.name === state.user.name || u.mobile === state.user.mobile)
      ? state.user
      : u
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  // feedback message
  state.message = "Profile updated successfully ✅";
},
  },
});

export const { register, login, logout, updateProfile, clearMessage ,setMessage } =
  authSlice.actions;
export default authSlice.reducer;
