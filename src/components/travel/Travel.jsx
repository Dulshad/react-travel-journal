import styles from "./Travel.module.css"
import marker from "../../images/map-marker.png"

const Travel = ({description, endDate, googleMapsUrl, imageUrl, location, startDate, title}) => {
    return (
        <div className={styles['travel-section']}>
            <img className={styles['travel-img']}
                 src={imageUrl}/>
            <div className={styles['travel-info-container']}>
                <div className={styles['travel-location']}>
                    <img className={styles['travel-location-icon']} src={marker} />
                    <p className={styles['travel-location-location']}>{location}</p>
                    <a href={googleMapsUrl} target="_blank" className={styles['travel-location-link']}>View on google maps</a>
                </div>
                <h1 className={styles['travel-title']}>{title}</h1>
                <h2 className={styles['travel-subtitle']}>{startDate} - {endDate}</h2>
                <p className={styles['travel-description']}>{description}</p>
            </div>
        </div>
    )
}

export default Travel;