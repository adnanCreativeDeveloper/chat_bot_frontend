import React, { useRef, useState } from "react";
import Response from "./Response";
import Prompt from "./Prompt";
import UserSettingForLargeScreens from "./user settings/UserSettingForLargeScreens";
import HideAndShowSideBar from "./HideAndShowSideBar";
import { uuidv7 } from "uuidv7";

const chat_array = [
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
  {
    chat_bot_response: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                modi sequi, iusto, possimus libero at maiores impedit,
                repudiandae ipsam ipsum quaerat! Magnam neque quae earum dolores
                unde! Beatae, accusantium consequatur!
      `,
    user_prompt: "unde! Beatae, accusantium consequatur!",
    id: uuidv7(),
  },
];

function PromptsAndResponse({
  chatArray,
  setChatArray,
  handleToggleSidebar,
  sidebarToggleSidebar,
}) {
  // const [chatArray, setChatArray] = useState(chat_array);
  const responseScrollToBottom = useRef(null);

  return (
    <>
      <div className={`flex-1 h-screen`}>
        <HideAndShowSideBar
          handleToggleSidebar={handleToggleSidebar}
          sidebarToggleSidebar={sidebarToggleSidebar}
        />
        <UserSettingForLargeScreens />
        <Response
          responseScrollToBottom={responseScrollToBottom}
          chatArray={chatArray}
        />
        <Prompt
          responseScrollToBottom={responseScrollToBottom}
          setChatArray={setChatArray}
        />
      </div>
    </>
  );
}

export default PromptsAndResponse;
