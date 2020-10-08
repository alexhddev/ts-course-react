import * as axios from 'axios';

axios.default.defaults.validateStatus = function () {
    return true;
};
const serverUrl = 'http://localhost:8080';

export class LoginService {

    public async login(userName: string, password: string): Promise<boolean> {
        try {
            const loginResponse = await axios.default.post(
                (serverUrl + '/login'),
                {
                    "username": userName,
                    "password": password
                }
            );
            if (loginResponse.status === 201) {
                console.log('Successful login');
                return true;
            } else {
                console.log('Un-successful login');
                return false;
            }
        } catch (error) {
            console.error(error.message)
            return false;
        }

    }
}