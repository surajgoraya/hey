import Head from 'next/head'
import Image from 'next/image'
import Link from '../compoents/Link';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${props.site_title} | ${props.site_description}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/juv7tgb.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <div id='header' className={styles.header}>
          <Image src={'/profile.jpg'} height={150} width={150} className={styles.main_image}/>
          <div className={styles.header_lines}> 
            <h1 className={styles.main_line}>suraj goraya</h1>
            <h3 className={styles.by_line}>5th year computer science student, making music and coding things.</h3>
          </div>
        </div>
        <div id='content' className={styles.content}>
          {props.links.map(e=><Link Ref={e.ref} Text={e.text}/>)}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy;{` ${props.copyright} ${new Date().getFullYear()}`}&nbsp; | &nbsp; <a href='https://github.com/surajgoraya/hey'>{`Open Source`}</a></p>
      </footer>
    </div>
  )
}

/**
 * Use staticProps cause this can just be rendered at build time.
 */
export async function getStaticProps(context) {
 const {CONFIG} = require('../config/config');
 return {
    props: CONFIG
  }
}