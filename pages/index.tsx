import styles from '@styles/Home.module.scss';
import Head from 'next/head';
import TodaySummaryComponent from '@components/TodaySummary';
import SearchCountryComponent from '@components/SearchCountry';
import { GetStaticProps } from 'next';
import axios from 'axios';

const Home = ({today,country}) => {

  return <>
    <Head>
      <title>COVID-19 Summary</title>
    </Head>
    <div className={styles.home_container}>
      <div className={styles.home_content}>
        <TodaySummaryComponent today={today}/>
        <SearchCountryComponent country={country}/>
      </div>
    </div>
  </>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const url:string = process.env.NODE_ENV === 'development' ? process.env.API_URL_DEVELOPMENT : process.env.API_URL_PRODUCTION;
    const todayResponse = await axios.get(`${url}/api/summary/today`);
    const countryResponse = await axios.get(`${url}/api/summary`);

    const today = todayResponse.data.resultData;
    const country = countryResponse.data.resultData;
    
    return {
      props: {
        today,country
      }
    }
} 

export default Home;
