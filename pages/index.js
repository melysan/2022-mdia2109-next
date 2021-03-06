import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link';
import ImgCard from '../comps/ImgCard';
import NavBar from '../comps/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">My First App</a>
        </h1>

        <div>hello welcome to my dark twisted mind tm</div>
        <img src="https://picsum.photos/300/100"/>
        <img src="https://place-puppy.com/300x100"/>
        <img src="https://placekitten.com/300/100"/>

        <Link href="/boiler">Go to Boiler</Link>
        <Link href="/aboutme">Go to About Me</Link>


        <ImgCard 
          bg="#FDE8CA"
        >
          <h3>This is a children in the tag</h3>
          bork bork bork
          <hr />
          Yay
        </ImgCard>

        <ImgCard 
          img="https://placekitten.com/200/300"
          h1="This is a cat lol"
          tcl="#ABC980"
        />

        <NavBar />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
