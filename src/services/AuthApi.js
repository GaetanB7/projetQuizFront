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

export function isAdmin() {
    const token = window.localStorage.getItem('authToken');
     const result = token ? getRole(token) : false;
     return result;
}

export function logout() {
    window.localStorage.removeItem('authToken');
}

function getRole(token){
    const { role: roles } = jwtDecode(token);

    if(roles=="ADMIN"){
        return true
    }

    return false;
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

//export const url ="https://www.quizgame.click";
export const url ="http://localhost:8082";
