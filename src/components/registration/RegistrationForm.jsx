import { Link } from "react-router-dom";
import chat_bot_logo from "../../assets/media/img/svg/chat_bot_logo.svg";
import RegistrationInputField from "./RegistrationInputField";

function RegistrationForm({
  formHeading,
  formLinkText,
  loginOrSignUp,
  linkPath,
}) {
  const font_family = {
    fontFamily: "Helvetica, sans-serif",
  };
  return (
    <>
      <div className='sign-up' style={font_family}>
        <div className='w-fit mx-auto'>
          <div className=''>
            <img
              className='mx-auto h-8 mt-7 scale-105'
              src={chat_bot_logo}
              alt='chat_bot_logo'
            />
          </div>
          <div className='sm:w-80 w-64 py- min-h-96  sm:my-20 mb-5 mx-auto scale-105'>
            <div className='text-center scale-90'>
              <h1 className='text-center sm:text-3xl text-2xl text-gray-700 pb-6 pt-10 font-bold'>
                {formHeading}
              </h1>
            </div>
            <div>
              <div className='mb-10'>
                <RegistrationInputField
                  placeholder='Email address'
                  inputType='email'
                />
                <RegistrationInputField
                  placeholder='Password'
                  inputType='password'
                />
                {/* <div>
                  <p className='text-sm mt-4 text-emerald-600 cursor-pointer'>
                    Forgot password?
                  </p>
                </div> */}
                <div className=''>
                  <button
                    className='w-full sm:p-4 p-3 mt-3 text-white
                  duration-300 rounded-lg bg-emerald-600 hover:bg-emerald-700'>
                    Continue
                  </button>
                </div>
                <p className='text-sm mt-4 text-center'>
                  {formLinkText}
                  <Link to={linkPath}>
                    <span className='text-emerald-600 ps-1 cursor-pointer'>
                      {loginOrSignUp}
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='text-center pb-4'>
            <p className='text-sm text-emerald-600 cursor-pointer'>
              Terms of Use <span className='px-1'>|</span> Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
