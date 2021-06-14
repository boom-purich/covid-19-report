import { useState,useEffect,useRef } from 'react';
import styles from '@styles/Navbar.module.scss';

const Navbar = () => {

    const navbarRef = useRef(null);
    const useShadow = () => {
        const [showShadow,setShadow] = useState<boolean>(false);

        const settingShadow = () => {
            if (window.scrollY === 0) {
                setShadow(false);
            } else {
                setShadow(true);
            }
        }

        useEffect(() => {
            if(typeof window !== 'undefined') {
                window.addEventListener("scroll", settingShadow);
                return () => {
                    window.removeEventListener("scroll", settingShadow);
                };
            }
        },[])

        return {
            showShadow
        }
    }

    const { showShadow } = useShadow();
    

    return (
        <div className={`${styles.navbar_container} ${showShadow && styles.navbar_shadow}`} ref={navbarRef}>
            <div className={styles.navbar_content}>
                <div className={styles.navbar_topic}>
                    <img src="/virus.svg" className={styles.virus_icon} alt="virus icon"/>
                    <span>COVID-19</span>
                    <span className={styles.report_word}>REPORT</span>
                </div>
                {/* <div className={styles.navbar_today}>
                    <div className={styles.updated_word}>Updated</div>
                    <div className={styles.navbar_today_date}>{today}</div>
                </div> */}
                
            </div>
        </div>
    );
}

export default Navbar;
