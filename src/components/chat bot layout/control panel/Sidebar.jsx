import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";

function Sidebar() {
  return (
    <>
      <div className='w-64 h-screen overflow-hidden px-2.5 bg-neutral-900'>
        <SidebarHeader />
        <SidebarBody />
      </div>
    </>
  );
}

export default Sidebar;
