import { LayoutProps } from "../../types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="container px-4">{children}</main>
    </>
  );
};

export default Layout;
