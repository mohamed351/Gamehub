import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"dc0d0256f1ad44ce90e2e99cf569ae5a"
    }
})