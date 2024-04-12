import axios from "axios";



const baseAPI = 'https://localhost:7052/api/DuLich'
export const requestGet = async (api) => {
    try{
        const res = await axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            url: `${baseAPI}/${api}`
        })
        return res.data
    } catch(err){
        console.log("Error fetching data:"+err);
        return null
    }
}

export const requestGet2 = async (api, param) => {
    try{
        const res = await axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            url: `${baseAPI}/${api}`,
            params: {
                ...param
            }
        })
        return res.data
    } catch(err){
        console.log("Error fetching data:"+err);
        return null
    }
}

