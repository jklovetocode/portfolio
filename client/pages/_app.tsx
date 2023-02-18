import Layout from '@/components/structre/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <div className='p-10 h-screen'>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  )
}
