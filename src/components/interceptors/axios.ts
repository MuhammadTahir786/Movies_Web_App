import axios from 'axios'


//interceptors are used for the configurations of api baseurl, headers and authorization

const instance = axios.create({
    baseURL: "https://wookie.codesubmit.io",
    headers: { 'Content-Type': "application/json" }
})

instance.interceptors.request.use(
    config => {
        const accessToken = 'Bearer Wookie2021';
        if (accessToken !== undefined) {
            config.headers.Authorization = `${accessToken}`;
            config.timeout = 120000;
        }
        return config;
    }, (err) => {
        return Promise.reject(err);
    }
);


instance.interceptors.response.use(response => {
    return response;
}, error => {
    console.log(error)
});

export default instance