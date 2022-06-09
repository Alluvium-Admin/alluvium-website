import styles from "../styles/Bannerrotate.module.scss";
const BannerRotate = ({title, text,bg}) => {
    return (
        <div className={styles.banner} style={{background:bg}}>
            <div>
                <h1 className={styles.title}>{title}</h1>
                <p className={`text-end`}>{text}</p>
            </div>
        </div>
    )
}

export default BannerRotate;