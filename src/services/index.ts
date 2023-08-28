import axios from '../components/interceptors/axios';

// Service class is make for api calling methods
export default class Service {

    static getCall(url: string) {
        return axios.get(url)
    }
}