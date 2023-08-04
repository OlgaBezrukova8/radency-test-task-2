import { LayoutProps } from "../../types";
import "./Layout.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
