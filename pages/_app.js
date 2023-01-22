import "../styles/globals.css";
import "../Assests/css/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
