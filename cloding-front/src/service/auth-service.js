import axios from "axios";

export default class authService {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/auth`,
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
       console.log(username, password)
        return this.service.post('/login', { username, password })
            .then(response => {
                console.log("hola")
                // response.data
            })
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }

}