import React, { useState } from "react";

function Chats({ chatsArr }) {
  const [chatSettingIconColor, setChatSettingIconColor] = useState(false);
  const iconBgStyle = {
    background:
      "linear-gradient(90deg, rgba(38,38,38,0.22452731092436973) 0%, rgba(38,38,38,1) 30%)",
  };
  const iconBg = {
    background:
      "linear-gradient(90deg, rgba(23,23,23,0) 0%, rgba(23,23,23,1) 100%)",
  };

  return (
    <>
      {chatsArr.map((item) => (
        <div key={item.id}>
          {item.time_stamp !== null && (
            <div className=''>
              <h3 className='text-neutral-400 text-xs p-2 pt-8'>
                {item.time_stamp}
              </h3>
            </div>
          )}
          <li
            className='relative flex justify-between items-center 
          p-2  rounded-lg cursor-pointer group
        hover:bg-neutral-800 me-2'>
            <div className='w-11/12 overflow-hidden text-nowrap'>
              <p className='text-gray-200 text-sm '>{item.chat_title}</p>
            </div>
            <div
              className='absolute rounded-r-lg h-full w-8 top-0 right-0'
              style={iconBg}></div>
            <div
              className='hidden group-hover:block py-2 pe-1.5 ps-4 rounded-r-lg 
               absolute right-0 top-0
               shadow-inner
               bg-gradient-to-l from-neutral-800 via-neutral-800 to-neutral-800/5
               '
              style={iconBgStyle}>
              <svg
                onMouseOver={() => setChatSettingIconColor(true)}
                onMouseOut={() => setChatSettingIconColor(false)}
                className={`cursor-pointer 
              `}
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='20'
                fill={`${chatSettingIconColor ? "#ECECEC" : "#B4B4B4"}`}
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0'
                  clipRule='evenodd'></path>
              </svg>
            </div>
          </li>
        </div>
      ))}
    </>
  );
}

export default Chats;
