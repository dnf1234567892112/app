"use strict";

let numberOfFilms = prompt("Сколько фильмов вы посмотрели");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let resul = prompt('Один из последних просмотренных фильмов');
let filmScore = prompt('На сколько оцените его');

personalMovieDB.movies[resul] = filmScore;


console.log(personalMovieDB);