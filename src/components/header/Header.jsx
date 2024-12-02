import styles from "./Header.module.css"
import classNames from 'classnames'
import globe from "../../images/globe.png"

const Header = () => {
    const logoClasses = classNames(styles.header_logo, styles.header_item)
    const titleClasses = classNames(styles.header_title, styles.header_item)

    return (
        <header>
            <img className={logoClasses} src={globe} alt="Globe"/>
            <h1 className={titleClasses}> my travel journal </h1>
        </header>
    )
}

export default Header;