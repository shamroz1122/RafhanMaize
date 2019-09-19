import axios from "axios";

const setBasePath = () => {

        axios.defaults.baseURL = 'http://order.rafhanmaize.com/dev/public/api'
    
}
export default setBasePath;