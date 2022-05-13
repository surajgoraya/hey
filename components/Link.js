import styles from '../styles/Link.module.css';

export default function Link({ Ref, Text, Image}) {
    return (
        <a className={Image ?  styles.promoLink : styles.link} href={Ref}>
            {Image != undefined ? <img className={styles.inline_image} src={`${Image}`}/> : <i className="bi bi-link-45deg"></i>}
            {Text} {Image ? <i style={{marginLeft: '.5rem'}} className="bi bi-box-arrow-up-right"></i> : null}
        </a>
    )
}