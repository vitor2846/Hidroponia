import  axios  from "axios"

const api = axios.create({
    baseURL: 'https://apihidroponia.herokuapp.com'
})

export default api
