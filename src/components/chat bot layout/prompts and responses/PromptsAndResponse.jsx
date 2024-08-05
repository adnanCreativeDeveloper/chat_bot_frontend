import React, { useState } from "react";
import Response from "./Response";
import Prompt from "./Prompt";
import UserSettingForLargeScreens from "./user settings/UserSettingForLargeScreens";
import HideAndShowSideBar from "./HideAndShowSideBar";

function PromptsAndResponse({ handleToggleSidebar, sidebarToggleSidebar }) {
  return (
    <>
      <div className={`flex-1 h-screen`}>
        <HideAndShowSideBar
          handleToggleSidebar={handleToggleSidebar}
          sidebarToggleSidebar={sidebarToggleSidebar}
        />
        <UserSettingForLargeScreens />
        <Response />
        <Prompt />
      </div>
    </>
  );
}

export default PromptsAndResponse;
