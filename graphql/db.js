export let movies = [
    {
        id: 0,
        name: "sad",
        score: 1
    },
    {
        id: 1,
        name: "sdf",
        score: 2
    }
]
export const getMovies = () => movies;

export const getById = id => {
    const filteredmovies = movies.filter(movie => movie.id === id)
    return filteredmovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `$(movies.length+1)`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}