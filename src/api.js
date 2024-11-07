import axios from 'axios';

const apiUrl = 'https://reqres.in/api/workintech';

export const postTextData = async (data) => {
    await axios.post(apiUrl, data).then(response => {
        console.log('Response', response.data);
    }).catch(err => console.log(err))
}

export const getData = async () => {
    await axios.post(apiUrl).then(response => {
        console.log('ResGetData', response.data);
    }).catch(err => console.log(err))
}