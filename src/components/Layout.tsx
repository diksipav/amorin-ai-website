import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #430e48 0%, #1f0c20 100%)",
        overflow: "hidden",
      }}
    >
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
