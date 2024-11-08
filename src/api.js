import axios from 'axios';

const apiUrl = 'https://reqres.in/api/workintech';

export const postTextData = (data) => {
    axios.post(apiUrl, data).then(response => {
        console.log('Data successfully posted:', response.data);
    }).catch(error => console.log(error))
}

