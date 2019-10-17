import axios from "axios"

export default {
    post(url, page) {
        return axios({
            method: "post",
            url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `page=${page}`
        }).then((res) => {
            return res.data.data
        })
    }
}