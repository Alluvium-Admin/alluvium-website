import { useEffect } from 'react';
import '../styles/globals.css'
import Layout from '../components/layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastProvider } from 'react-toast-notifications';


function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    AOS.init();
  },[])

  return( 
    <ToastProvider placement="top-center">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  )
}


export default MyApp
