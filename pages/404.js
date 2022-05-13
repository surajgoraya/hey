import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/FourOhFour.module.css';

export default function FourOhFour(props) {
    return <>
        <Head>
            <title>{`${props.site_title} | Not Found.`.toLowerCase()}</title>
            <meta name="description" content={props.meta_description} />
            <link rel="icon" href="/favicon.png" />
            <link rel="stylesheet" href="https://use.typekit.net/juv7tgb.css" />
        </Head>
        <main className={styles.main}>
            <i className="bi bi-cloud-drizzle-fill"></i>
            <h1>NOT FOUND.</h1>
            <p>The page you've requested couldn't be found. Sorry.</p>
            <br/>
            <Link href={'/'}><a><i className="bi bi-arrow-left-short"/>return home?</a></Link>
        </main>
    </>
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