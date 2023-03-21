import Header from "./Header/Header";

const Layout = function ({ children }) {
  return (
    <>
      <div id="background"></div>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
