import axios from "axios"
export default {
    get(){
        return axios({
            method:"get",
            url:"http://localhost:8080/dianying/cities.json",
        }).then((result)=>{
            return result.data.cts
        })
    }
}