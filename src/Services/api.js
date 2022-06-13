import  axios  from "axios"

const api = axios.create({
    baseURL: 'https://apihidroponia.herokuapp.com'
    
    //baseURL:'http://192.168.2.232:5000' //Rede batalhão
    //baseURL: 'http://100.64.120.219:5000' //Rede da faculdade
    //baseURL: 'http://192.168.1.118:5000' //Red de casa 
})

export default api
