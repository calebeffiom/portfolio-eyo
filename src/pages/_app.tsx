import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Loader from './loader'
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const startRef = useRef(0);
  const MIN_LOADER_TIME = 1500; // ms

  useEffect(() => {
    const handleStart = () => {
      startRef.current = Date.now();
      setLoading(true);
    };
    const handleComplete = () => {
      const elapsed = Date.now() - startRef.current;
      const remaining = MIN_LOADER_TIME - elapsed;
      if (remaining > 0) {
        // still under minimum display time → wait the rest
        setTimeout(() => setLoading(false), remaining);
      } else {
        setLoading(false);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);
  return (
    <>
    <Loader show={loading} />
    <Component {...pageProps} />
    </>)
}
