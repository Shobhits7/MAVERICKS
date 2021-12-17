import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta property="og:title" content="Mavericks">
            <meta property="og:site_name" content="Mave OP">
              <meta property="og:description" content="REAL MAVE IS BACK WITH REAL OWNERS">
                <meta name="description" content="REAL MAVE IS BACK!!">
                  <meta property="theme-color" content="#B81217">
                    <meta property="og:image" content="logo.png">
                      <meta property="og:url" content="https://mavericks.cf">
                        <!--Responsive Viewport Meta tag-->
                        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
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
