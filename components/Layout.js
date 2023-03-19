import Header from "./Header/Header";

const Layout = function ({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
