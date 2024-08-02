import React from "react";
import Sidebar from "./control panel/Sidebar";
import PromptAndResponse from "./PromptAndResponse";

function ChatbotLayout() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <PromptAndResponse />
      </div>
    </>
  );
}

export default ChatbotLayout;
