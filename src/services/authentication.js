import axios from 'axios';


export default () => {
    return {
        login: ({email, password}) => axios.bind.post('api/auth/login'),
        logout: () => axios.bind.post('api/auth/logout')
    };
}
