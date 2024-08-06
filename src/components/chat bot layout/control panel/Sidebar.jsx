import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import UserSettingForMobileScreens from "../prompts and responses/user settings/UserSettingForMobileScreens";

function Sidebar({ sidebarToggleSidebar, handleToggleSidebar, setChatArray }) {
  return (
    <>
      <div
        className={`xl:static lg:static md:static 
          fixed left-0 top-0 z-10 h-screen overflow-hidden bg-neutral-900 transition-all 
          duration-300
          ${sidebarToggleSidebar ? "w-64 px-2.5" : "w-0"}`}>
        <SidebarHeader
          sidebarToggleSidebar={sidebarToggleSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <SidebarBody setChatArray={setChatArray} />
        <UserSettingForMobileScreens />
      </div>
    </>
  );
}

export default Sidebar;
