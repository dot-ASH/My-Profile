import "../styles/globals.css";
import "../Assests/css/main.scss";
import mainJs from "../Assests/js/main.js";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
