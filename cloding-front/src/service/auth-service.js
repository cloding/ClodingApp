import axios from "axios";

export default class authService {

    constructor() {

        this.service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            withCredentials: true
        })
    }

    signup = (username, password, mail, country, region, city, direction) => {
        return this.service.post('/signup', { username, password, mail, country, region, city, direction })
            .then(response => response.data)
            // .catch(err => console.log(err.res.data))
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }

    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }

}