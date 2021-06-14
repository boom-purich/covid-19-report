import styles from '@styles/CountryList.module.scss';
import { separatorNumber, convertDateFormat } from '@utils/convert';
import CircularProgress from '@material-ui/core/CircularProgress';

const CountryList = ({ countryList, loading }) => {
    return (
        <div className={styles.country_list_container}>
            <div className={styles.country_list_content}>
                {
                    loading ?
                        <div className={styles.loading_container}>
                            <CircularProgress className={styles.loading_country_list} />
                            <div className={styles.loading_word}>LOADING ...</div>
                        </div>
                        : <>
                            <div className={styles.result_fetch_date_container}>
                                <div className={styles.result_word}>
                                    <div className={styles.result_topic}>Result :</div>
                                    <div className={styles.country_amount}>{countryList.length} {countryList.length <= 1 ? 'country' : 'countries'}</div>
                                </div>
                                <div className={styles.fetch_date}>
                                    <div className={styles.updated_date_word}>Fetched Date :</div>
                                    <div className={styles.date_word}>{convertDateFormat(countryList[0]?.Date)}</div>
                                </div>
                            </div>
                            {
                                countryList && countryList.length > 0 ?
                                    (
                                        <div className={styles.country_card_group}>
                                            {
                                                countryList.map((list, index) => (
                                                    <div className={styles.country_card_container} key={`country_card_${index}`}>
                                                        <div className={styles.country_card_topic_container}>
                                                            <div className={styles.country_icon_container}>
                                                                <span className={`flag-icon flag-icon-${list?.CountryCode.toLowerCase()} ${styles.country_icon}`}></span>
                                                            </div>
                                                            <div className={styles.country_name}>{list?.Country}</div>
                                                        </div>
                                                        <div className={styles.country_description_group}>
                                                            <div className={`${styles.country_description_container} ${styles.confirmed_color}`}>
                                                                <div className={styles.description_topic}>
                                                                    <div className={styles.topic_word}>
                                                                        <i className={`fas fa-check-circle ${styles.icon}`}></i>
                                                    CONFIRMED
                                                </div>
                                                                    <div className={styles.topic_separate_line}></div>
                                                                </div>
                                                                <div className={styles.description_amount}>{separatorNumber(list?.TotalConfirmed)}</div>
                                                            </div>
                                                            <div className={`${styles.country_description_container} ${styles.recovered_color}`}>
                                                                <div className={styles.description_topic}>
                                                                    <div className={styles.topic_word}>
                                                                        <i className={`fas fa-syringe ${styles.icon}`}></i>
                                                    RECOVERED
                                                </div>
                                                                    <div className={styles.topic_separate_line}></div>
                                                                </div>
                                                                <div className={styles.description_amount}>{separatorNumber(list?.TotalRecovered)}</div>
                                                            </div>
                                                            <div className={`${styles.country_description_container} ${styles.deaths_color}`}>
                                                                <div className={styles.description_topic}>
                                                                    <div className={styles.topic_word}>
                                                                        <i className={`fas fa-skull-crossbones ${styles.icon}`}></i>
                                                    DEATHS
                                                </div>
                                                                    <div className={styles.topic_separate_line}></div>
                                                                </div>
                                                                <div className={styles.description_amount}>{separatorNumber(list?.TotalDeaths)}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                    : (
                                        <div className={styles.no_country_container}>
                                            <i className="fas fa-exclamation-circle"></i>
                                            <div className={styles.no_country_word}>Not Found your country</div>
                                        </div>
                                    )
                            }
                        </>
                }
            </div>
        </div>
    );
}

export default CountryList;
