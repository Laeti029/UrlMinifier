class Url {

    constructor(id, baseUrl, minifierUrl) {
        this.baseUrl = baseUrl;
        this.minifierUrl = minifierUrl;
    }

    getId() {
        return this._id;
    }
    setId() {
        this._id = value;
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