import { React, useEffect, useState } from "react";
import { uuidv7 } from "uuidv7";

function Prompt({ setResponseArray, responseScrollToBottom }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseArray((prevArray) => [
      ...prevArray,
      {
        user_prompt: inputValue,
        id: uuidv7(),
      },
    ]);
    setInputValue("");
  };

  const scrollToBottom = () => {
    if (responseScrollToBottom.current) {
      responseScrollToBottom.current.scrollTo({
        top: responseScrollToBottom.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom(); // Scroll when messages change
  }, []);

  return (
    <>
      <div className='relative bg-stone-800 px-3'>
        <div
          onClick={scrollToBottom}
          className='h-7 w-7 left-2/4 rounded-full
            mb-5 absolute bottom-full flex items-center
             justify-center border border-stone-500 cursor-pointer'
          style={{ background: "#212121" }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='none'
            viewBox='0 0 24 24'>
            <path
              fill='#ECECEC'
              fillRule='evenodd'
              d='M12 21a1 1 0 0 1-.707-.293l-7-7a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 1 1 2 0v13.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7A1 1 0 0 1 12 21'
              clipRule='evenodd'></path>
          </svg>
        </div>
        <div>
          <form action='' onSubmit={(e) => handleSubmit(e)}>
            <div
              className='relative xl:max-w-3xl lg:max-w-3xl md:max-w-2xl
              w-full mx-auto'>
              <input
                value={inputValue}
                onChange={(e) => handleChange(e)}
                className='w-full h-12 py-1.5 ps-5 pe-14 pb-2.5 text-stone-400
             bg-stone-900/85 rounded-full border-none outline-none resize-none'
                type='text'
                placeholder='Message ChatBot'
              />

              <button
                type='submit'
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
              </button>
            </div>
          </form>
          <div>
            <p className='text-stone-400 p-2 text-center text-xs'>
              ChatBot can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prompt;
