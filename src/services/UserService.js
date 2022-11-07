import axios from "axios";

class UserService{


    async addPersonalDetails(form) {
        return axios.post('signup/personalDetails', {
            id: form.id,
            address: form.address,
            postalCode: form.postalCode,
            telephone: form.telephone,
            
        }).then((res) => {
            return res
        }).catch((err) => {
            throw err
        }) 
    }

    async addSalarylDetails(form) {
        return axios.post('signup/salaryDetails', {
            id:form.id,
            basicSalary:form.basicSalary,
            otRate:form.otRate,
            specialAllowance:form.specialAllowance
            
        }).then((res) => {
            return res
        }).catch((err) => {
            throw err
        }) 
    }
}

export default new UserService;