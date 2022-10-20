import Head from 'next/head'
import Background from '../components/Background'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tesab Spain SL</title>
        <meta name="description" content="TODO set tesab description here" />
        <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-32.png" type="image/png" sizes="32x32" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Head>

      <Background />

      <Header />
    </div>
  )
}
