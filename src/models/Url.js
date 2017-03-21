class Url {

    constructor(id = undefined, baseUrl = undefined, minifierUrl = undefined) {
        this.baseUrl = baseUrl;
        this.minifierUrl = minifierUrl;
    }

    getId() {
        return this.id;
    }
    setId() {
        this.id = value;
        return this;
    }

    getBaseUrl() {
        return this.baseUrl;
    }
    setBaseUrl() {
        this.baseUrl = value;
        return this;
    }
    getMinifierUrl() {
        return this.minifierUrl;
    }
    setMinifierUrl() {
        this.minifierUrl = value;
        return this;
    }

}


module.exports = Url;