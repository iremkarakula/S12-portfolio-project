import axios from 'axios';

const apiUrl = 'https://reqres.in/api/workintech';

export const postTextData = async (data) => {
    await axios.post(apiUrl, data).then(res => console.log(res.data)).catch(error => console.log(error));
}