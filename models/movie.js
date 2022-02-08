
class Movie {

    constructor(name, id, img_url, creator_id, secret_data) {
        this.id = id;
        this.img_url = img_url;
        this.creator_id = creator_id;
        this.secret_data = secret_data;

    };
}

module.exports = { Movie }

