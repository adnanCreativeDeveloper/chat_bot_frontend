import { React, useState } from "react";

function Prompt() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  // const windowWidth = window.width
  // console.log(windowWidth);
  // const promptsHeight = { height: "10.4vh" };
  return (
    <>
      <div className='bg-stone-800 px-3'>
        <div
          className='relative xl:max-w-3xl lg:max-w-3xl md:max-w-2xl
        w-full mx-auto'>
          <input
            value={inputValue}
            onChange={(e) => handleChange(e)}
            className='w-full h-12 py-1.5 px-5 pb-2.5 text-stone-400
             bg-stone-900/85 rounded-full border-none outline-none'
            type='text'
            placeholder='Message ChatBot'
          />

          <div
            className={`absolute right-2 top-2 h-8 w-8 rounded-full 
              ${inputValue ? "bg-stone-200" : "bg-stone-500"}`}>
            {inputValue ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='none'
                viewBox='0 0 32 32'
                className='icon-2xl'>
                <path
                  fill='black'
                  fillRule='evenodd'
                  d='M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z'
                  clipRule='evenodd'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='none'
                viewBox='0 0 32 32'>
                <path
                  fill='#2f2f2f'
                  fillRule='evenodd'
                  d='M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z'
                  clipRule='evenodd'></path>
              </svg>
            )}
          </div>
          <div>
            <p className='text-stone-400 p-2 text-center text-xs'>
              ChatGPT can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prompt;
