class Url {

    constructor(id, baseUrl, minifierUrl) {
        this.baseUrl = baseUrl;
        this.minifierUrl = minifierUrl;
    }

    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
        return this;
    }

    getBaseUrl() {
        return this.baseUrl;
    }
    setBaseUrl(url) {
        this.baseUrl = url;
        return this;
    }
    getMinifierUrl() {
        return this.minifierUrl;
    }
    setMinifierUrl(value) {
        this.minifierUrl = value;
        return this;
    }

}


module.exports = Url;