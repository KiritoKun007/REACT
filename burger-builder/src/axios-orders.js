import axios from 'axios';

const instance = axios.create({
    baseURL: `https://react-burger-builder-e07a8.firebaseio.com/`
})

export default instance;
