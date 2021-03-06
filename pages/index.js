import Head from 'next/head'
import Image from 'next/image'
import Link from '../components/Link';
import styles from '../styles/Home.module.css'
import authorImage from '../public/profile.jpg';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${props.site_title} | ${props.site_description}`.toLowerCase()}</title>
        <meta name="description" content={props.meta_description} />

        <meta property="og:title" content={`${props.site_title} | ${props.site_description}`.toLowerCase()} />
        <meta property="og:description" content={`${props.meta_description}`} />
        <meta property="og:image" content="https://hey.surajgoraya.ca/profile.jpg" />
        <meta property="og:image:alt" content={`${props.picture.alt_text}`}  />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${props.site_title} | ${props.site_description}`.toLowerCase()} />
        <meta property="twitter:description" content={`${props.meta_description}`} />
        <meta property="twitter:image" content="https://hey.surajgoraya.ca/profile.jpg" />
        <meta property="twitter:site" content={`${props.meta_TwitterCreator}`} />

        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/juv7tgb.css" />
      </Head>

      <main className={styles.main}>
        <div id='header' className={styles.header}>
          {props.picture.show_picture ? <Image src={authorImage} placeholder='blur' height={150} width={150} className={styles.main_image}
            alt={props.picture.alt_text} /> : null}
          <div className={styles.header_lines}>
            <h1 className={styles.main_line}>{props.main_line}</h1>
            <h3 className={styles.by_line}>{props.by_line}</h3>
          </div>
        </div>
        <div id='content' className={styles.content}>
          {props.links.map((e, i) => <Link Ref={e.ref} Text={e.text} Image={e?.Image ? e.Image : null} key={`link__${i}`} />)}
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
  const { CONFIG } = require('../config/config');
  return {
    props: CONFIG
  }
}