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
      <Topnav />

      {/* Page Content */}
      <div className="overflow-hidden">
        {children}
      </div>

      <Footer />
    </>
  );
}
