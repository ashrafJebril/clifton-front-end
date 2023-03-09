import "@/styles/globals.css";
import Header from "../Components/Header/index";
import { Provider } from "react-redux";
import store from "../store";
import Script from "next/script";

import Menu from "../Components/Menu";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Header />
          <Script
            src="//app-abd.marketo.com/js/forms2/js/forms2.min.js"
            strategy="beforeInteractive"
          />

          {/* <Script src={custom} /> */}

          <Script src="//app-sjst.marketo.com/js/forms2/js/forms2.min.js" />

          <Script src="https://go.cliftons.com/rs/307-PGA-529/images/formdestyler.js" />

          <Script src="//munchkin.marketo.net/munchkin.js" />
          <Component {...pageProps} />
        </div>
      </Provider>
    </div>
  );
}
