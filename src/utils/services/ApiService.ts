import axiosInstance from '../plugins/axiosInstance';
class ApiService {
    static async get(url: string) {
        return axiosInstance.get(url);
    }
}

export default ApiService;