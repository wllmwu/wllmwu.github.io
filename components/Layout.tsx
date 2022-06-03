import React from "react";
import NavigationBar from "./NavigationBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}

export default Layout;
