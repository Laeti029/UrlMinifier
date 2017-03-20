class User {
    constructor(id = undefined, email = undefined, password = undefined) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
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