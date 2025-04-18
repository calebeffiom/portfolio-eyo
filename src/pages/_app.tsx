import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Loader from './loader'
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  // Start visible on first load
  const [loading, setLoading] = useState(true);
  // You can tweak this minimum time if you like
  const MIN_LOADER_TIME = 1500;
  const startRef = useRef<number>(Date.now());

  useEffect(() => {
    // Hide loader after initial mount + any brief delay
    const afterFirstPaint = () => {
      const elapsed = Date.now() - startRef.current;
      const remain = MIN_LOADER_TIME - elapsed;
      if (remain > 0) {
        setTimeout(() => setLoading(false), remain);
      } else {
        setLoading(false);
      }
    };

    // Wait for the page to be interactive
    if (document.readyState === "complete") {
      afterFirstPaint();
    } else {
      window.addEventListener("load", afterFirstPaint);
    }

    // Clean up load listener
    return () => {
      window.removeEventListener("load", afterFirstPaint);
    };
  }, []);

  useEffect(() => {
    const handleStart = () => {
      startRef.current = Date.now();
      setLoading(true);
    };
    const handleComplete = () => {
      const elapsed = Date.now() - startRef.current;
      const remain = MIN_LOADER_TIME - elapsed;
      if (remain > 0) {
        setTimeout(() => setLoading(false), remain);
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
