import '../styles/globals.css'
import Layout from '../components/layout';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {

  return( 
    <ToastProvider placement="top-center">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  )
}

export default MyApp
