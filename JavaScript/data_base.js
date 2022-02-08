const fs = require('fs').promises;
const path = require('path');
const file_path = path.join(__dirname, '/MoviesAPI.txt');
let {movie_id, user_id, users, movies, find_user_by_email, find_movie_by_id} = require('./g_state');
const user = require("../models/User");


async function save_data_to_file() {

    const data_to_save = { users: users,
        user_id: user_id,
        movie_id: movie_id,
        movies: movies
    }
    const json = JSON.stringify(data_to_save);
    await fs.truncate(file_path,0);
    await fs.writeFile(file_path, json);
}

async function read_data_from_file() {

    try {
        const json = await fs.readFile(file_path, 'utf8');
        const data_to_save = JSON.parse(json);

        data_to_save.users.forEach((curr_user, i) => {
            const temp = new user.User(curr_user.email_address, curr_user.id, curr_user.display_name);
            users.push(temp);
        });

        data_to_save.movies.forEach((curr_movie, i) => {
            const temp = new user.User(curr_movie.name, curr_movie.id, curr_movie.img_url, curr_movie.creator_id, curr_movie.secret_data);
            movies.push(temp);
        });

        user_id = data_to_save.user_id;
        movie_id = data_to_save.movie_id;
    }
    catch (err)
    {
        console.log('json is empty');
    }
}

module.exports = {save_data_to_file, read_data_from_file};
