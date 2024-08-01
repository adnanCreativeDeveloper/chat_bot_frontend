import React from "react";

function Login() {
  return (
    <>
      {/* ******************* login modal ********************** */}
      <div className='h-screen w-full flex items-center bg-black/50'>
        <div
          className='p-10 bg-zinc-800 h-fit w-fit rounded-2xl mx-auto
        scale-110
        '>
          <div className='log-in-modal w-80 h-72 text-center'>
            <div>
              <h1 className='text-white text-2xl mb-1 font-medium'>
                Welcome back
              </h1>
              <p className='text-slate-100 text-lg mb-6'>
                Log in or sign up to get smarter responses, upload files and
                images, and more.
              </p>
            </div>
            <div className='buttons'>
              <button
                className='text-black font-medium bg-slate-100 
            w-full rounded-full text-sm mb-3 py-3 px-4 hover:bg-slate-200'>
                Log in
              </button>
              <button
                className='text-slate-100 font-medium bg-zinc-800
            w-full rounded-full border border-zinc-700 text-sm
            mb-5 py-3 px-4 hover:bg-zinc-700'>
                Sign up
              </button>
              <p className='text-slate-100 text-sm font-medium underline cursor-pointer'>
                Stay logged out
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
