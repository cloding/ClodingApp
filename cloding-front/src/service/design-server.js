import axios from "axios";

export default class designService {

    constructor() {

        this.service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            withCredentials: true
        })
    }

    saveDesign = (userId, type, designName, red, green, blue, image1, image2, text1, text2, text3) => {
        return this.service.post('/save-design', { userId, type, designName, red, green, blue, image1, image2, text1, text2, text3 })
            .then(response => response.data)
            .catch(err => console.log(err.res.data))
    }

    allTShirt = (userId) => {
        return this.service.post('/all-tShirt', { userId })
            .then(response => response.data)
            .catch(err => console.log(err.res.data))
    }

    addQuanity = (quantity, userId) => {
        return this.service.post('/add-quantity', { quantity, userId })
            .then(response => response.data)
            .catch(err => console.log(err.res.data))
    }

    delete = (id, userId) => {
        return this.service.post('/delete-design', { id, userId })
            .then(response => response.data)
            .catch(err => console.log(err))
    }

}