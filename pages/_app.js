import { useEffect } from 'react';
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'
import '../styles/globals.css'
import Layout from '../components/layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastProvider } from 'react-toast-notifications';



function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    AOS.init();
  }, [])
  
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return( 
    <ToastProvider placement="top-center">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  )
}


export default MyApp
