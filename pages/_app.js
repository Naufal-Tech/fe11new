import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import {Provider} from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.css');
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />

    </Provider>
  )
}

export default MyApp
