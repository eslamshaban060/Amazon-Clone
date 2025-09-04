import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login,clearMessage } from "../../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import amazonLogo from "../../../../public/Amazon-Logo-White-PNG-Image.png";
import { FaEye } from "react-icons/fa";

export default function LoginForm() {
  const [form, setForm] = useState({ emailOrMobile: "", password: "" });
  const dispatch = useDispatch();
  const { message, isAuthenticated } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.emailOrMobile.trim() || !form.password.trim()) {
      // 🔹 dispatch a message into Redux (instead of silent return)
      dispatch(
        clearMessage() // clear old message first
      );
      dispatch({
        type: "auth/setMessage", // we’ll add this reducer
        payload: "Please enter email/mobile and password",
      });
      return;
    }
    dispatch(login(form));
  };

  // 🔹 Auto clear message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        if (isAuthenticated) {
          navigate("/profile");
        }
        dispatch(clearMessage());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch, isAuthenticated, navigate]);
  return (
    <div className="login mt-10 flex flex-col w-full items-center gap-8 p-4  mb-10">
      <div className="logo w-full ">
        <img src={amazonLogo} alt="" className="w-40 mx-auto" />
      </div>
      <div className="max-w-xl w-full mx-auto bg-white p-6 rounded-lg shadow-lg border-[0.2px] border-[var(--bg)]/20 flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Email or mobile phone number
            </label>
            <input
              className="w-full border rounded p-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  emailOrMobile: e.target.value.toLocaleLowerCase(),
                })
              }
              value={form.emailOrMobile}
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium ">Password</label>
                      <FaEye
            onClick={()=> setShowPassword(prev => !prev )}
              className={`absolute right-2.5 top-[50%] transform-[translate(0%,0%)]  text-2xl ${showPassword? "text-[var(--blue)] ":"text-[var(--bg)]"} `}
            ></FaEye>
            <input
              type={showPassword ? "text":"password"}
              className="w-full border rounded p-2"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--yellow)] hover:bg-yellow-400 text-black py-2 rounded text-[20px]"
          >
            Continue
          </button>
          {message && (
            <p
              className={`font-medium ${
                isAuthenticated ? "text-[var(--green)]" : "text-[var(--red)]"
              }`}
            >
              {message}
            </p>
          )}
        </form>
        <div className="more border-t border-[var(--bg)]/60  py-2 flex flex-col gap-2 ">
          <p className="w-full  sm:text-[20px] text-sm font-[400]">
            By creating an account or logging in , you agree to Amazon’s
            <span className="text-[var(--blue-link)] hover:underline mx-2">
              Conditions of Use
            </span>
            and
            <span className="text-[var(--blue-link)] hover:underline mx-2">
              Privacy Notice.
            </span>
          </p>
          <hr className="rounded-4xl  border-[var(--bg)]/60 " />
          <h2 className="font-[600] sm:text-2xl text-lg">Buying for work?</h2>
          <a
            href="#"
            className=" sm:text-[20px] text-[16px] font-[400] text-[var(--blue-link)] hover:underline "
          >
            Create a free business account
          </a>
        </div>
      </div>
      <div className="reg max-w-xl w-full mx-auto">
        <fieldset className="border-t border-[var(--bg)]/60 w-full flex justify-center items-center flex-col p-4  ">
          <legend className="mx-auto p-1 text-[var(--bg)]/90">
            new to amazon{" "}
          </legend>
          <Link
            to="/register"
            className="px-2.5 py-2 border w-full rounded-2xl text-center font-[400] sm:text-[18px] text-sm hover:text-[var(--blue-link)] "
          >
            {" "}
            create your Amazon account{" "}
          </Link>
        </fieldset>
      </div>
    </div>
  );
}
