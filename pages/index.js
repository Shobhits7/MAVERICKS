import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mavericks</title>
        <link rel="https://cdn.discordapp.com/icons/919827956795338812/a_5b12f0e6aaa8639230bb7747c783ae42.gif?size=1024" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Mavericks" />
        <p className="description">
          <code>REAL MAVE IS BACK WITH REAL OWNERS</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
