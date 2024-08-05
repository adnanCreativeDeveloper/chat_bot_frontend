import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import UserSettingForMobileScreens from "../prompts and responses/user settings/UserSettingForMobileScreens";

function Sidebar({ sidebarToggleSidebar, handleToggleSidebar }) {
  return (
    <>
      <div
        className={`xl:static lg:static md:static 
          fixed left-0 top-0 z-10 h-screen overflow-hidden bg-neutral-900 transition-all 
          duration-300
          ${sidebarToggleSidebar ? "max-w-64 px-2.5" : "max-w-0"}`}>
        <SidebarHeader
          sidebarToggleSidebar={sidebarToggleSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <SidebarBody />
        <UserSettingForMobileScreens />
      </div>
    </>
  );
}

export default Sidebar;
