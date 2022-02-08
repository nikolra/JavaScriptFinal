
const data_base = require('../JavaScript/data_base')
const g_state = require("../JavaScript/g_state");
const status_codes = require("http-status-codes").StatusCodes;
const movie_services = require('../services/movie_services');
//TODO: find movie
async function add_movie(req, res) {

    const { name, img_url, creator_id, secret_data } = req.body;
    if (!(name && img_url && creator_id && secret_data)) {
        res.status(400).send("All input is required");
        return;
    }

    const movie = movie_services.add_movie(name, img_url, creator_id, secret_data);
    await data_base.save_data_to_file();
    res.status(status_codes.OK).send(JSON.stringify(movie));
}

async function get_all_movies(req, res) {

    const movies = movie_services.get_all_movies();
    res.status(status_codes.OK).send(JSON.stringify(movies));
}

module.exports = {
    add_movie,
    get_all_movies
}