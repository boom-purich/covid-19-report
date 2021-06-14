import styles from '@styles/Layout.module.scss';
import NavbarComponent from './Navbar';

const Layout = ({children}) => {
    return <>
    <NavbarComponent/>
    <div className={styles.layout_container}>
        {children}
    </div>
    </>
}

export default Layout;
