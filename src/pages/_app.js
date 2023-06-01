import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import "@/styles/globals.css";
import fontVariables from "@/config/fonts";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <main className={fontVariables}>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </main>
  );
}
