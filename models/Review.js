
class Review {

    constructor(creator_id, movie_id, review_text, rank ) {
        this.creator_id = creator_id;
        this.movie_id = movie_id;
        this.review_text = review_text;
        this.rank = rank;

    };
}

module.exports = { Review }

