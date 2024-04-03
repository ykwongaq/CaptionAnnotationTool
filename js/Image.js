"strict mode";

const DATA_FOLDER = "data";
class Image {
    constructor(imageData, annoDatas) {
        this.jsonData = jsonData;
        this.id = jsonData.id;
    }

    getPath() {
        return `${DATA_FOLDER}/${this.getFileName()}`;
    }

    getFileName() {
        return this.jsonData.filename;
    }
}
