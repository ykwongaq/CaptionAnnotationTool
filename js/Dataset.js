"strict mode";

class Dataset {
    constructor() {
        this.images = [];
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Dataset();
        }
        return this.instance;
    }

    parseJson(json) {
        const jsonData = JSON.parse(json);
        const annoDatas = jsonData.annotations;
        for (const imageJson of jsonData.images) {
            const relatedAnnotations = annoDatas.filter(
                (annoData) => annoData.image_id === imageJson.id
            );
            this.images.push(new Image(imageJson, relatedAnnotations));
        }
    }
}
