import Header from "@/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="font-work-sans">
      <Header />
      {children}
    </main>
  );
};

export default layout;
