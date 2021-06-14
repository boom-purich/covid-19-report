import LayoutComponent from '@components/Layout/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return <LayoutComponent>
        <Component {...pageProps} />
    </LayoutComponent>
  
}

export default MyApp
