import styles from "../styles/Privacypolicy.module.scss";
const BannerRotate = ({title, text}) => {
    return (
        <div className={styles.banner} style={{background:`url(assets/privacy-policy/banner-rotate-img.png)`}}>
            <div className={`container py-3`}>
                <div className={`row`}>
                    <div className="col-lg-5 col-md-6 col-sm-4">
                        <img src="assets/privacy-policy/pp-img.png" className={styles.image} alt="" />
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-8">
                        <h1 className={styles.title}>{title}</h1>
                        <p className={`text-end`}>{text}</p>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-4">
                        <img src="assets/privacy-policy/pp-img.png" className={styles.image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerRotate;