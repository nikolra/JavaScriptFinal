
const data = require('../JavaScript/g_state');
const {Movie} = require("../models/movie");


add_movie = function (name, img_url, creator_id, secret_data) {

    const movie = new Movie(name, data.movie_id, img_url, creator_id, secret_data);
    data.movies.push(movie);

    return movie;
}

get_all_movies = function () {

    return data.movies;
}

delete_movie = function (secret_data) {

    //TODO: implement!!!
}

find_movie = function (partial_name) {

    //TODO: implement!!!
}
module.exports = {add_movie, get_all_movies}