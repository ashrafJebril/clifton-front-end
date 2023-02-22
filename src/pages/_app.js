import "@/styles/globals.css";
import Menu from "../Components/Menu/index";
import { Provider } from "react-redux";
import store from "../store";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Menu />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
