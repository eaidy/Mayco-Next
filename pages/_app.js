import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
  }
}

export default MyApp
