import axios from "axios";

class EmployeeService{

  

    async signin(formData) {
        return axios.post('login',
            formData
        ).then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
    }

    
}

export default new EmployeeService;