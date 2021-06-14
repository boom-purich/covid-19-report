import axios from 'axios';
import { responseMapping } from '@utils/responseMapping';

const todayHandler = async(req,res) => {
    try{
        const { data } = await axios.get(`https://api.covid19api.com/summary`);
        const { Global } = data;
        res.status(200).json(responseMapping(Global));
    }catch(error){
        res.status(404).json(responseMapping({}));
    }
    
}

export default todayHandler;