import styles from './Header.module.css'
import meals from '../../meals.jpg'
import HeaderCartButton from '../../components/HeaderCartButton/HeaderCartButton';
const Header = (props) => {
    return (
        <div>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onClick}/>
            </header>
            <div className={styles["main-images"]}>
                <img src={meals} alt="meals"/>
            </div>
        </div>
    )
}

export default Header;