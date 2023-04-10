import "../scss/_global.scss";
import "../scss/_background.scss";
import "../scss/_theme.scss";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
