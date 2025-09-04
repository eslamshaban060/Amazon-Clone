import { useDispatch, useSelector } from "react-redux";
import { logout, updateProfile, clearMessage  } from "../../../redux/slices/authSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { validateForm } from "../../../utils/validation";
import { FaEye } from "react-icons/fa";
import amazonLogo from "../../../../public/Amazon-Logo-White-PNG-Image.png";
export default function ProfilePage() {
  const { user, isAuthenticated, message } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(user || {});
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const [showPassword,setShowPassword]=useState(false)
  // Handle profile update
  const handleUpdate = () => {
    const result = validateForm(edit, true, user); // true = profile update
    if (!result.valid) {
      dispatch({ type: "auth/setMessage", payload: result.message });
      return;
    }

    dispatch(updateProfile(edit));
    dispatch({
      type: "auth/setMessage",
      payload: "Profile updated successfully ✅",
    });
    setEditMode(false);
  };
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => dispatch(clearMessage()), 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);
  // If not logged in
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4 text-center">
              <div className="logo w-full ">
                <img src={amazonLogo} alt="" className="w-40 mx-auto" />
              </div>
        <h2 className="text-xl font-bold">You are not logged in</h2>
        <p className="text-gray-600">
          Please log in or create an account to access your profile.
        </p>
        <div className="flex gap-4 justify-center mt-4">
          <Link
            to="/login"
            className="bg-[var(--blue)] text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[var(--orange)] text-white px-4 py-2 rounded hover:bg-[var(--yellow)]"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="profile mt-10 flex flex-col w-full items-center gap-8 p-4 mb-10" >
              <div className="logo w-full ">
                <img src={amazonLogo} alt="" className="w-40 mx-auto" />
              </div>
      <div className="max-w-xl w-full mx-auto bg-white p-6 rounded-lg shadow-lg border-[0.2px] border-[var(--bg)]/20 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center">Profile</h2>

        {/* Message Display */}
        {message && (
          <p
            className={`text-center font-medium ${
              message.includes("✅") ? "text-[var(--green)]" : "text-[var(--red)]"
            }`}
          >
            {message}
          </p>
        )}

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
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

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Mobile
          </label>
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

        {/* Password  */}
        {editMode && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <FaEye
            onClick={()=> setShowPassword(prev => !prev )}
              className={`absolute right-2.5 top-[50%] transform-[translate(0%,0%)]  text-2xl ${showPassword? "text-[var(--blue)] ":"text-[var(--bg)]"} `}
            ></FaEye>
            <input
              type={showPassword? "text" :"password"}
              className="w-full border rounded p-2 mt-1"
              value={edit.password || ""}
              onChange={(e) => setEdit({ ...edit, password: e.target.value })}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          {editMode ? (
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
  );
}
