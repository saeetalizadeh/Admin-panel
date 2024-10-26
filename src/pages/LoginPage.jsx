import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../services/mutations";
import { getCookie, setCookie } from "../utils/cookie";

function LoginPage() {
  const [passwordType, setPasswordType] = useState(true);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { mutate } = useLogin();

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const { username, password } = form;

    if (!username || !password)
      return alert("User Name and Password is Necessary");

    mutate(form, {
      onSuccess: (data) => {
        setCookie("token", data.data?.token);
        navigate("/");
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };

  return (
    <>
      <div className="flex flex-col h-full justify-center">
        <div className="flex flex-col justify-center w-[40%]  bg-[#ffffff] mx-auto px-7 py-12 lg:px-8 border rounded-[40px]">
          <div className="sm:mx-auto mb-6 sm:w-full sm:max-w-sm">
            <img
              className="mx-auto w-[80px]"
              src="/images/Union.svg"
              alt="BotoStart"
            />
            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              فرم ورود
            </h2>
          </div>

          <div className="flex flex-col mt-10 sm:mx-auto sm:w-full sm:max-w-sm gap-y-5">
            <form className="space-y-6" onSubmit={loginHandler}>
              <div className="flex flex-col justify-center">
                <div className="mt-2">
                  <input
                    onChange={changeHandler}
                    id="username"
                    name="username"
                    type="username"
                    value={form.username}
                    placeholder="نام‌ کاربری"
                    className="block w-full pr-3 h-12 bg-[#f2f2f2] rounded-xl border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#282828]/50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mt-2 relative">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPasswordType((i) => !i);
                    }}
                    className="block absolute left-3 text-blue-400 cursor-pointer top-1/3"
                  >
                    {passwordType ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                  <input
                    onChange={changeHandler}
                    id="password"
                    name="password"
                    value={form.pas}
                    type={passwordType ? "password" : "text"}
                    required
                    placeholder="رمز‌ عبور"
                    className="block w-full pr-3 h-12 bg-[#f2f2f2] rounded-xl border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#282828]/50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center  rounded-xl text-[#fffff] bg-[#55a3f0] h-12 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#55a3f0]/80 transition ease-in-out delay-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ورود
                </button>
              </div>
            </form>

            <Link
              to="/registration"
              className="text-sm leading-6 font-medium text-[#3a8bed] hover:text-[#3a8bed]/70 transition-all delay-75 "
            >
              ایجاد حساب کاربری!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
