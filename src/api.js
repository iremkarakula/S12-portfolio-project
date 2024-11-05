import axios from "axios"
import textData from "./data";


const apiUrl = 'https://reqres.in/api/workintech';

export const postTextData = () => {
    axios.post(apiUrl, textData).then(res => console.log(res.data))
        .catch(error => console.log(error))
}

export const getTextData = (language, setData) => {
    axios.get(apiUrl)
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
}