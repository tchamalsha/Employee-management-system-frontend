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
            
        }),axios.post('signup/personalDetails',{
            id: form.id,
            address: form.address,
            postalCode: form.postalCode,
            telephone: form.telephone,
        }),axios.post('signup/salaryDetails', {
            id:form.id,
            basicSalary:form.basicSalary,
            otRate:form.otRate,
            specialAllowance:form.specialAllowance
            
        }).then((res) => {
            return res
        }).catch((err) => {
            return err
        }) 
    }
}

export default new EmployeeService;