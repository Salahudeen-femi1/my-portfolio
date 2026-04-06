import React from "react";
import Topnav from "./Topnav";
import Footer from "./Footer";

type LayoutProp = {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProp) {
  return (
    <>
      {/* Top Navigation */}
      <div className="w-full fixed h-30 top- z-50">
          <Topnav />
      </div>

      {/* Page Content */}
      <div className="overflow-hidden">
        {children}
      </div>

      <div>
        <Footer />
      </div>

    </>
  );
}
