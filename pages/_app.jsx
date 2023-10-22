import "../styles/globals.css";
import "../Assests/css/main.scss";
import "../Assests/js/main.js";
import "../styles/cursor.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
