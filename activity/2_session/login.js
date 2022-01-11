export default class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
  
    login() {
        return this.username == "admin" && this.password == "passwd" ? 'User logged in' : 'User or passwd incorrect';
    }
}