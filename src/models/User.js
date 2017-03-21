class User {
    constructor(id, email, password) {
        this._id = id;
        this.email = email;
        this.password = password;
    }

    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
        return this;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }
}

module.exports = User;