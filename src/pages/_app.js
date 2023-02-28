import "@/styles/globals.css";
import Header from "../Components/Header/index";
import { Provider } from "react-redux";
import store from "../store";
import Menu from "../Components/Menu";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Header />
          <Component {...pageProps} />
        </div>
      </Provider>
    </div>
  );
}
