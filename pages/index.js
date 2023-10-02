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
        <Header title="Sorry But To Use Alpha Any Further You Need A Key..." />
        <p className="description">
         rekonise.com/alpha-keysystem-first-checkpoint-5hwnr
        </p>
      </main>

      <Footer />
    </div>
  )
}
