// import '../styles/globals.css'
import "./css/style.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
       <script src="https://cdn.jsdelivr.net/npm/gsap@3.7.0/dist/gsap.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/gsap@3.7.0/dist/ScrollTrigger.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/MotionPathPlugin.min.js"></script>
      <Script type="text/javascript" src="/static/main.js"></Script>
    </>
}

export default MyApp
