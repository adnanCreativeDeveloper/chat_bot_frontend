import { useState } from "react";
import Sidebar from "./control panel/Sidebar";
import PromptsAndResponse from "./prompts and responses/PromptsAndResponse";

function ChatbotLayout() {
  const [sidebarToggleSidebar, setSidebarToggleSidebar] = useState(true);
  const handleToggleSidebar = () => {
    setSidebarToggleSidebar(!sidebarToggleSidebar);
  };
  return (
    <>
      <div className='flex'>
        <Sidebar
          handleToggleSidebar={handleToggleSidebar}
          sidebarToggleSidebar={sidebarToggleSidebar}
        />
        <PromptsAndResponse
          handleToggleSidebar={handleToggleSidebar}
          sidebarToggleSidebar={sidebarToggleSidebar}
        />
      </div>
    </>
  );
}

export default ChatbotLayout;
