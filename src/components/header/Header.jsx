import styles from "./Header.module.css"
import classNames from 'classnames'
import globe from "../../images/globe.png"

const Header = () => {
    const logoClasses = classNames(styles['header-logo'], styles['header-item'])
    const titleClasses = classNames(styles['header-title'], styles['header-item'])

    return (
        <header>
            <img className={logoClasses} src={globe} alt="Globe"/>
            <h1 className={titleClasses}> my travel journal </h1>
        </header>
    )
}

export default Header;