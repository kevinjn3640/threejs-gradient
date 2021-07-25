import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Suspense } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={"Loading..." /* or null */}>
      <Component {...pageProps} />
    </Suspense>
  )
}
export default MyApp
