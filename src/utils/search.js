import axios from "axios"

export default {
    get(url, keyword) {
        return axios({
            method: "get",
            url:url+keyword,
            // headers: {
            //     'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
            // },
        }).then((res) => {
            return res.data.data
        })
    }
}