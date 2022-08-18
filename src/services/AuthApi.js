import axios from 'axios';
import jwtDecode from 'jwt-decode';

export function hasAuthenticated() {
    const token = window.localStorage.getItem('authToken');
    const result = token ? tokenIsValid(token) : false;

    console.log(token)
    if (false === result) {
        window.localStorage.removeItem('authToken');
    }

    return result;
}

export function login(credentials) {
    return axios
        .post('http://localhost:8082/auth/login', credentials)
        .then(response => response.data.token)
        .then(token => {
            window.localStorage.setItem('authToken', token);

            return true;
        });
}

export function logout() {
    window.localStorage.removeItem('authToken');
}

function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}

export function  getId () {
    const token = window.localStorage.getItem("authToken");
    const { sub: id } = jwtDecode(token);
    const res = id.split(",")[0];
    return res;
  };

  export const url ="http://apiquiz-env.eba-musywnht.eu-west-2.elasticbeanstalk.com";