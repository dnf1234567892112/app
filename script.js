"use strict";

let numberOfFilms = prompt("Сколько фильмов вы посмотрели");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for(let i = 0; i < 2; i++){

   
    let resul = prompt('Один из последних просмотренных фильмов');
    let filmScore = prompt('На сколько оцените его');
    if(resul !=null && filmScore!=null && resul!=''&& resul.length <50){
    personalMovieDB.movies[resul] = filmScore;
        console.log('Done');
}
    else{
        i--;
        console.log('error');
    }
}

    if(personalMovieDB.count <= 10){
        console.log('Просмотрено довольно мало фильмов');
    }
        else if(personalMovieDB.count >=10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель')
        }
        else if(personalMovieDB.count > 50){
            console.log('Вы киноман');
        }
        else{
            console.log('Произашло ошибка');
        }
console.log(personalMovieDB);