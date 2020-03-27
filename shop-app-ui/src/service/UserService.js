import axios from 'axios'

const API_URL = 'http://localhost:8089'
const USER_RESOURCE = '/api/users'
const CART_RESOURCE = '/cart'

class UserService {
    getAllUsers(){
        return axios.get(API_URL+USER_RESOURCE);
    }
    getCartForUser(userid){
        return axios.get(API_URL+USER_RESOURCE + "/"+ userid + CART_RESOURCE);
    }
}
export default new UserService()