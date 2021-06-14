import { useState,useEffect } from 'react';
import styles from '@styles/TodaySummary.module.scss';
import { separatorNumber,convertDateFormat } from '@utils/convert';

const TodaySummary = ({today}) => {

    return (
        <div className={styles.today_summary_container}>
            <div className={styles.today_summary_content}>
                <div className={styles.header_topic}>World Today Summary</div>
                <div className={styles.fetch_today_date_container}>
                    <div className={styles.fetch_date_word}>Fetched</div>
                    <div className={styles.separate_line}></div>
                    <div className={styles.fetch_date_content}>{convertDateFormat(today?.Date)}</div>
                </div>
                <div className={styles.summary_card_group}>
                    <div className={`${styles.summary_card_container} ${styles.confirm_card_container}`}>
                        <div className={styles.card_topic}>
                            <i className={`fas fa-check-circle ${styles.icon}`}></i>
                            <span>Confirmed</span>
                        </div>
                        <div className={styles.card_description}>
                            <div className={styles.new_amount}>
                                <div className={styles.amount_topic}>New Confirmed</div>
                                <div className={styles.amount_number}>+ {separatorNumber(today?.NewConfirmed)}</div>
                            </div>
                            <div className={styles.total_amount}>
                                <div className={styles.amount_topic}>Total Confirmed</div>
                                <div className={styles.amount_number}>{separatorNumber(today?.TotalConfirmed)}</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.summary_card_container} ${styles.recovered_card_container}`}>
                        <div className={styles.card_topic}>
                            <i className={`fas fa-syringe ${styles.icon}`}></i>
                            <span>Recovered</span> 
                        </div>
                        <div className={styles.card_description}>
                            <div className={styles.new_amount}>
                                <div className={styles.amount_topic}>New Recovered</div>
                                <div className={styles.amount_number}>+ {separatorNumber(today?.NewRecovered)}</div>
                            </div>
                            <div className={styles.total_amount}>
                                <div className={styles.amount_topic}>Total Recovered</div>
                                <div className={styles.amount_number}>{separatorNumber(today?.TotalRecovered)}</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.summary_card_container} ${styles.death_card_container}`}>
                        <div className={styles.card_topic}>
                            <i className={`fas fa-skull-crossbones ${styles.icon}`}></i>
                            <span>Deaths</span>
                            
                        </div>
                        <div className={styles.card_description}>
                            <div className={styles.new_amount}>
                                <div className={styles.amount_topic}>New Deaths</div>
                                <div className={styles.amount_number}>+ {separatorNumber(today?.NewDeaths)}</div>
                            </div>
                            <div className={styles.total_amount}>
                                <div className={styles.amount_topic}>Total Deaths</div>
                                <div className={styles.amount_number}>{separatorNumber(today?.TotalDeaths)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodaySummary;
