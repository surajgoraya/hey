import styles from '../styles/Link.module.css';

export default function Link({Ref, Text}) {
    return (
        <a className={styles.link} href={Ref}>
        <span className="material-icons">
            attachment
            </span>
            {Text}
        </a>
    )
}