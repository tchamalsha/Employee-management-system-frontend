import axios from "axios";

class AdminService{

  

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
        return axios.post('admin/signup', {
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
            this.$router.push('/success')
            return res
        }).catch((err) => {
            this.$router.push('/error')
            throw err
        }) 
    }
}

export default new AdminService;