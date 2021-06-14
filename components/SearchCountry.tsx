import { useState,useEffect } from 'react';
import styles from '@styles/SearchCountry.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll'
import CountryListComponent from './CountryList';
import axios from 'axios';

const SearchCountry = ({country}) => {

    const [keyword,setKeyword] = useState<string>('');
    const [selectSort,setSelectSort] = useState<string>('confirmed');
    const [countryList,setCountryList] = useState<Array<any>>(country);
    const [loading,setLoading] = useState<boolean>(false);

    const handleSearchCountry = async(sort?:string) => {
        try{
            setSelectSort(prevSort => prevSort = sort);
            setLoading(prevLoad => prevLoad = true);
            let url:string = '';
            url = `?sort=${sort}`
            if(keyword) {
                url += `&country=${keyword}`;
            }
            const { data:{resultData} } = await axios.get(`/api/summary${url}`);
            setCountryList(prevData => prevData = resultData);
            setLoading(prevLoad => prevLoad = false);
        }catch(error){
            setCountryList(prevData => prevData = []);
            setLoading(prevLoad => prevLoad = false);
        }
        
    }
    

    return (
        <div className={styles.search_country_container}>
            <div className={styles.search_country_content}>
                <div className={styles.country_world_header_container}>
                    <i className={`fas fa-globe ${styles.globe_icon}`}></i>
                    COVID-19 Country List
                </div>
                <div className={styles.search_sort_box_container}>
                    <div className={styles.search_box_container}>
                        <input type="text" className={styles.search_box} placeholder="Search Country" value={keyword} onChange={(event) => setKeyword(event.target.value)} onKeyDown={(event) => {event.keyCode === 13 && handleSearchCountry(selectSort)}}/>
                        <button type="button" className={styles.search_btn} onClick={() => handleSearchCountry(selectSort)}>
                            <i className={`fas fa-search ${styles.search_icon}`}></i>
                        </button>
                    </div>
                    <div className={styles.sort_box_container}>
                        <div className={styles.sort_topic_word}>Sort by :</div>
                        <ScrollContainer vertical={false} horizontal={true}>
                        <div className={styles.sort_card_group}>
                            <div className={styles.sort_card_wrapper} onClick={() => handleSearchCountry('confirmed')}>
                                <span className={`${styles.sort_card} ${selectSort === 'confirmed' && styles.selected_sort}`}>Total Confirmed</span>
                            </div>
                            <div className={styles.sort_card_wrapper} onClick={() => handleSearchCountry('recovered')}>
                                <span className={`${styles.sort_card} ${selectSort === 'recovered' && styles.selected_sort}`}>Total Recovered</span>
                            </div>
                            <div className={styles.sort_card_wrapper} onClick={() => handleSearchCountry('deaths')}>
                                <span className={`${styles.sort_card} ${selectSort === 'deaths' && styles.selected_sort}`}>Total Deaths</span>
                            </div>
                        </div>
                        </ScrollContainer>
                    </div>
                </div>
            </div>
            <CountryListComponent countryList={countryList} loading={loading}/>
        </div>
    );
}

export default SearchCountry;
