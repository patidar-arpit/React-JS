

class UserService {

    constructor() {
        this.userArr = JSON.parse(localStorage.getItem('users'));
        if (this.userArr == null) {
            this.userArr = [];
        }
    }

    getAllUsers() {
        return this.userArr;
    }

    addUser(user) {
        this.userArr.push(user);
        localStorage.setItem('users', JSON.stringify(this.userArr));
    }

    deleteUser(id) {
        console.log("In delete")
        this.userArr.splice(id, 1);
        localStorage.setItem('users', JSON.stringify(this.userArr));
        return;
    }
}

export default new UserService();
