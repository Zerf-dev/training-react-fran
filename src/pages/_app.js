import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import "@/styles/globals.css";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
