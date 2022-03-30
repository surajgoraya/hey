import Head from 'next/head'
import Image from 'next/image'
import Link from '../components/Link';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${props.site_title} | ${props.site_description}`.toLowerCase()}</title>
        <meta name="description" content={props.meta_description} />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/juv7tgb.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <div id='header' className={styles.header}>
          {props.picture.show_picture ? <Image src={props.picture.author_image} placeholder='blur' height={150} width={150} className={styles.main_image}
          alt={props.picture.alt_text}/> : null}
          <div className={styles.header_lines}> 
            <h1 className={styles.main_line}>{props.main_line}</h1>
            <h3 className={styles.by_line}>{props.by_line}</h3>
          </div>
        </div>
        <div id='content' className={styles.content}>
          {props.links.map((e, i)=><Link Ref={e.ref} Text={e.text} key={`link__${i}`}/>)}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy;{` ${props.copyright} ${new Date().getFullYear()}`}&nbsp; | &nbsp; <a href='https://github.com/surajgoraya/hey'>{` hey is open source `}&#8599;</a></p>
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