"use client";

import { useState } from "react";
import { SidebarContext } from "./sidebar-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <html lang="en">
      <head />
      <body>
        <div>{sidebarIsOpen ? "Sidebar is open" : "Sidebar is closed"}</div>
        <SidebarContext.Provider
          value={{
            isOpen: sidebarIsOpen,
            toggleOpen: () => setSidebarIsOpen((x) => !x),
          }}
        >
          {children}
        </SidebarContext.Provider>
      </body>
    </html>
  );
}
