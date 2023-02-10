import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '/styles/Home.module.css'
import NavBar from 'components/bars/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="shortcut icon" type="image/png" href="./public/logo.png" />
    <link rel="stylesheet" type="text/css" href="styles/globals.css" />
      </Head>
      <main>
        <div id='nav'  className='w-100 h-[50px]'>
          <div>
            <Image id="logosize" src="/logo.png" alt="logo" width={200} height={100} className="hidden sm:block"></Image>
          </div>
          <div className='ml-auto w-[300px] h-[50px]'>
            <ul className='nav-list'>
              <li><a className='active' href="home">Daftar</a></li>
              <li><a href="news">Masuk</a></li>
              <li><a href="contact">About</a></li>
              <li><a href=" about">Order</a></li>
            </ul>
          </div>
        </div>
  <h1> relow
    </h1>
    </main>
    </>
  )
}
