import React from "react";
import NavigationBar from "./NavigationBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
}

export default Layout;
