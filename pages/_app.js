import { useEffect } from 'react';
import '../styles/globals.css'
import Layout from '../components/layout';
import AOS from 'aos';
import ReactGA from 'react-ga';
import 'aos/dist/aos.css';
import { ToastProvider } from 'react-toast-notifications';


function MyApp({ Component, pageProps }) {

  // Google Analytics
  const MEASUREMENT_ID = "G-V7YCNDR60Z";

  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
  })
  

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
