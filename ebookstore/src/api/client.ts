import axios from 'axios'


const client  = axios.create({
    baseURL: "http://localhost:8989"
})

export default client