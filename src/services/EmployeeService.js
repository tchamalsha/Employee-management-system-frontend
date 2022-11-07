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

    async signup(form) {
        return axios.post('employee/signup', {
            id: form.id,
            name: form.name,
            email: form.email,
            password: form.password,
            position:form.position
            
        }).then((res) => {
            return res
        }).catch((err) => {
            throw err
        }) 
    }
}

export default new EmployeeService;