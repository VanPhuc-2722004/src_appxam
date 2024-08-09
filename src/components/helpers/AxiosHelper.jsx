import axios from 'axios';

// Tạo một instance của Axios
const AxiosHelper = (token = '', contentType ='application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'https://appxam.onrender.com', 
    });

    axiosInstance.interceptors.request.use(
        async(config) => {
            config.headers = {
                'Accept': 'application/json',
                'Content-Type': contentType,
            };
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use((response) => {
        return response.data;
    }, (error) => {
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    });

    return axiosInstance;
};

export default AxiosHelper;
