import { useEffect } from "react";
import useStore from "../store";
import Background from "./Background";
import Header from "./Header/Header";

const Layout = function ({ children }) {
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    document.body.dataset.theme = theme ? "dark" : "light";
  }, [theme]);

  return (
    <>
      <Background />
      <Header />
      <main id={theme ? "main-dark" : "main-light"}>{children}</main>
    </>
  );
};

export default Layout;
