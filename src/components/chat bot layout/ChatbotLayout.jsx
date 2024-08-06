import { useState } from "react";
import Sidebar from "./control panel/Sidebar";
import PromptsAndResponse from "./prompts and responses/PromptsAndResponse";

function ChatbotLayout() {
  const [sidebarToggleSidebar, setSidebarToggleSidebar] = useState(true);
  const [chatArray, setChatArray] = useState("");
  const handleToggleSidebar = () => {
    setSidebarToggleSidebar(!sidebarToggleSidebar);
  };
  return (
    <>
      <div className='flex'>
        <Sidebar
          handleToggleSidebar={handleToggleSidebar}
          sidebarToggleSidebar={sidebarToggleSidebar}
          setChatArray={setChatArray}
        />
        <PromptsAndResponse
          handleToggleSidebar={handleToggleSidebar}
          sidebarToggleSidebar={sidebarToggleSidebar}
          chatArray={chatArray}
          setChatArray={setChatArray}
        />
      </div>
    </>
  );
}

export default ChatbotLayout;
