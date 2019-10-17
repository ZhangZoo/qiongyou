import axios from "axios"

export default {
    get(url, page) {
        return axios({
            method: "get",
            url:url+`?page=${page}`,
        }).then((res) => {
            return res.data
        })
    }
}