import axios from 'axios';
import { responseMapping } from '@utils/responseMapping';

const summaryHandler = async(req,res) => {
    try{
        let sortKey:string = '';
        let countryKey:string = '';
        let result:Array<any> = [];
        if(Object.keys(req.query).length === 0){
            sortKey = 'confirmed';
        }else{
            sortKey = req.query.sort;
            req.query.country && (countryKey = req.query.country);
        }
        const { data } = await axios.get(`https://api.covid19api.com/summary`);
        const { Global,Countries } = data;
        const mappingSortField = (key:string) => {
            switch(key) {
                case 'confirmed' :
                    return 'TotalConfirmed';
                case 'recovered':
                    return 'TotalRecovered';
                case 'deaths':
                    return 'TotalDeaths';
                default :
                    return 'TotalConfirmed';
            }
        }
        sortKey = mappingSortField(sortKey);
        Countries.sort((a,b) => b[sortKey] - a[sortKey]);
        result = Countries;
        if(countryKey !== '') {
            const pattern = new RegExp(countryKey);
            result = Countries.filter(list => pattern.test(list.Country));
        }
        
        res.status(200).json(responseMapping(result));
    }catch(error){
        res.status(404).json(responseMapping({}));
    }
    
}

export default summaryHandler;