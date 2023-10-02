import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Alpha Keysystem. Paste The Link In Your Browser To Get The Key.
    Below To Get The Key" />
        <p className="description">
         rekonise.com/alpha-keysystem-first-checkpoint-5hwnr).
        </p>
      </main>

      <Footer />
    </div>
  )
}
