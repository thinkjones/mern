import axios from 'axios';


export default () => {
    return {
        login: ({email, password}) => axios.post('/api/auth/login', {email, password}),
        logout: () => axios.post('/api/auth/logout')
    };
}
