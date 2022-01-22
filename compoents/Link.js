import styles from '../styles/Link.module.css';

export default function Link({Ref, Text}) {
    return (
        <a className={styles.link} href={Ref}>
        <span className="material-icons" style={{
            color: 'var(--colour-blossom)',
            marginRight: '.5rem'
        }}>
            attachment
            </span>
            {Text}
        </a>
    )
}