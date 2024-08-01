import chat_bot_logo from "../../assets/media/img/svg/chat_bot_logo.svg";

function SignUp() {
  return (
    <>
      <div className=''>
        <div className=''>
          <img
            className='mx-auto h-8 mt-9 scale-105'
            src={chat_bot_logo}
            alt='chat_bot_logo'
          />
        </div>
        <div className='pt-10 w-full flex items-center'>
          <div
            className='p-10 h-fit w-fit rounded-2xl mx-auto
        '>
            <div className='w-80 text-center'>
              <div>
                <div>
                  <h1 className='text-3xl px-10 pb-6 pt-10 font-bold'>
                    Create an account
                  </h1>
                </div>
                <div class='relative'>
                  <input
                    type='text'
                    id='input-field'
                    class='peer w-full p-4 border border-green-500/50 
                  placeholder-transparent 
                  duration-300 rounded-lg focus:border-green-500 outline-none'
                    placeholder=' '
                  />
                  <label
                    for='input-field'
                    class='absolute left-4 top-0 transform translate-y-4
                  text-gray-500 transition-all duration-200
                  peer-focus:-translate-y-3 peer-focus:-left-1 cursor-text
                   peer-focus:scale-75 bg-white px-2'>
                    Email address*
                  </label>
                </div>
                <div className=''>
                  <button
                    className='w-full p-4 mt-6 text-white
                  duration-300 rounded-lg bg-stone-500 outline-none'>
                    Continue
                  </button>
                </div>
                <p className='text-sm mt-4 font-semibold'>
                  Already have an account?{" "}
                  <span className='text-stone-500 ps-1'>Login</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
