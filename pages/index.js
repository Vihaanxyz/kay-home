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
        <Header title="Alpha Keysystem. Press The Link 
    Below To Get The Key" />
        <p className="description">
         [Keysystem Link](https://rekonise.com/alpha-keysystem-first-checkpoint-5hwnr).
        </p>
      </main>

      <Footer />
    </div>
  )
}
