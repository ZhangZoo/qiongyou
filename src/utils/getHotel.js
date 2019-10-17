import axios from "axios"
export default {
    get(url){
        return axios({
            method:"get",
            url
        }).then((result)=>{
            return result.data
        })
    }
}