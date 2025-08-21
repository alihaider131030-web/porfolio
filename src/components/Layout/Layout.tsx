import React from "react";
import { NavigationSection } from "./NavigationSection/NavigationSection";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full max-w-[1286px] mx-auto">
        <NavigationSection />
        <main>{children}</main>
      </div>
    </div>
  );
};