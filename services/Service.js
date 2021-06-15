//===============================================================================================================
// #1 - Import * Axios
//===============================================================================================================
import axios from 'axios';

import config from "../configs/config.json";

class Service {

    constructor(){
        this.server = config.nodejs.server;
    
        this.axiosInstance = axios.create({
          withCredentials: false,
          baseURL: config.nodejs.server
        })
    }
}

export default Service;