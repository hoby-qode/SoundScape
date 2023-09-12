import '@/styles-globals/variables.globals.css'
import '@/styles-globals/bootstrap-grid.globals.css'
import '@/styles-globals/buttons.globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/src/components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
