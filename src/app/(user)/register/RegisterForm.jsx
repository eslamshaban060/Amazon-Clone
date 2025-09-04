import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { register } from "../../../redux/slices/authSlice";
import amazonLogo from "../../../../public/Amazon-Logo-White-PNG-Image.png";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { validateForm } from "../../../utils/validation";
import { FaEye } from "react-icons/fa";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", mobile: "", password: "" });
  const [message, setMessage] = useState({
    text: "",
    status: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setTimeout(() => setMessage({ text: "", status: false }), 3500);
  }, [message.text]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateForm(form);
    if (!result.valid) {
      setMessage({ text: result.message, status: false });
      return;
    }
    dispatch(register(form));
    setMessage({text:"Registered successfully! Please login.",status:true})
    setForm({ name: "", mobile: "", password: "" });
  };

  return (
    <div className="register mt-10 flex flex-col w-full items-center gap-8 p-4 mb-10 ">
      <div className="logo w-full ">
        <img src={amazonLogo} alt="" className="w-40 mx-auto" />
      </div>
      <div className="max-w-xl w-full mx-auto bg-white p-6 rounded-lg shadow-lg border-[0.2px] border-[var(--bg)]/20 flex flex-col gap-6">
        <h1 className="text-2xl font-bold ">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your email</label>
            <input
              className="w-full border rounded p-2"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value.toLocaleLowerCase() })
              }
              value={form.name}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mobile number</label>
            <input
              className="w-full border rounded p-2"
              onChange={(e) =>
                setForm({ ...form, mobile: e.target.value.toLocaleLowerCase() })
              }
              value={form.mobile}
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
                                  <FaEye
            onClick={()=> setShowPassword(prev => !prev )}
              className={`absolute right-2.5 top-[50%] transform-[translate(0%,0%)]  text-2xl ${showPassword? "text-[var(--blue)] ":"text-[var(--bg)]"} `}
            ></FaEye>
            <input
              type={showPassword? "text":"password"}
              className="w-full border rounded p-2"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded"
          >
            Verify mobile number
          </button>
          <p
            className={`font-medium ${
              message.status ? "text-[var(--green)]" : "text-[var(--red)]"
            }`}
          >
            {message.text}
          </p>
        </form>
        <div className="more border-t border-[var(--bg)]/60  py-2 flex flex-col gap-2 ">
          <h2 className="font-[600] sm:text-2xl text-lg">Buying for work?</h2>
          <a
            href="#"
            className=" sm:text-[20px] text-[16px] font-[400] text-[var(--blue-link)] hover:underline "
          >
            Create a free business account
          </a>
          <hr className="rounded-4xl  border-[var(--bg)]/60 " />
          <p className="sm:text-[20px] text-[15px] font-[400] flex gap-1 sm:flex-row flex-col ">
            <span>Already have an account?</span>{" "}
            <Link
              to="/login"
              className="text-[var(--blue-link)] hover:underline flex items-center"
            >
              {" "}
              Sign in <FaCaretRight></FaCaretRight>{" "}
            </Link>
          </p>
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
        </div>
      </div>
    </div>
  );
}
