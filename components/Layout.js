import Background from "./Background";
import Header from "./Header/Header";

const Layout = function ({ children }) {
  return (
    <>
      <Background />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
