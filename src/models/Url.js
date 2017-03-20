class Url {

    constructor(id = undifined, baseUrl = undifined, minifierUrl = undifined) {
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