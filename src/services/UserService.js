import axios from "axios";

class UserService{


    async addPersonalDetails(form) {
        return axios.post('signup/personalDetails', {
            id: form.id,
            address: form.address,
            postal_code: form.postal,
            telephone: form.telephone,
            
        }).then((res) => {
            return res
        }).catch((err) => {
            throw err
        }) 
    }
}

export default new UserService;