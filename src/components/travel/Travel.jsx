import styles from "./Travel.module.css"
import marker from "../../images/map-marker.png"

const Travel = ({
                    description = "No description available",
                    endDate = "No end date",
                    googleMapsUrl = "#",
                    imageUrl = "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDIwNjJ8MHwxfGFsbHx8fHx8fHx8fDE3MjMyMzUwNjR8&ixlib=rb-4.0.3&q=80&w=1080",
                    location = "Unknown location",
                    startDate = "No start date",
                    title = "Untitled"
                }) => {
    return (
        <div className={styles.travel_section}>
            <img className={styles.travel_img}
                 src={imageUrl}/>
            <div className={styles.travel_info_container}>
                <div className={styles.travel_location}>
                    <img className={styles.travel_location_icon} src={marker} />
                    <p className={styles.travel_location_location}>{location}</p>
                    <a href={googleMapsUrl} target="_blank" className={styles.travel_location_link}>View on google maps</a>
                </div>
                <h1 className={styles.travel_title}>{title}</h1>
                <h2 className={styles.travel_subtitle}>{startDate} - {endDate}</h2>
                <p className={styles.travel_description}>{description}</p>
            </div>
        </div>
    )
}

export default Travel;