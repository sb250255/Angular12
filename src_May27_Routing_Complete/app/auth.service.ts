import { reject } from 'q';

export class AuthService {
    constructor(){

    }
    loggedIn = true;

    logIn(){
        this.loggedIn = true;
    }
    logOut(){
        this.loggedIn = false;
    }

    IsAuthenticated(){
        let promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 1000)
        })

        return promise;
    }
}