let movie_id = 1;
let user_id = 1;
let users = [];
let movies = [];
//TODO: what to do about reviews?

function find_user_by_email(email) {

    const user = users.find(user => user.email_address === email);
    return user;
}

function find_movie_by_id(movie_id) {

    const movie = users.find(movie => movie.id === movie_id);
    return movie;
}

function find_movie_by_secret_data(data) {

    const movie = users.find(movie => movie.secret_data === data);
    return movie;
}

module.exports = {movie_id, user_id, users, movies, find_user_by_email, find_movie_by_id, find_movie_by_secret_data}