import axios from "axios"

const URL = 'https://648f49e775a96b664444f226.mockapi.io/'
axios.defaults.baseURL = URL



export const getContacts = async ()=>{
    const data = await axios.get('contacts')
    return data.data;
}
export const postContact = async ( contact )=>{
    const data = await axios.post(`contacts`, contact)
    return data.data;
}
export const removeContact = async (id) => {
    const data = await axios.delete(`contacts/${id}`)
    return data.data
}