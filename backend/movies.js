const fs = require('fs');
const DATABASE = 'mongodb';

const fetchMovies = () => {
    try {
        const movieString = fs.readFileSync(DATABASE)
        return JSON.parse(movieString);
    } catch (e) {
        return []
    }
}

const saveMovies = movies => {
    fs.writeFileSync(NOTES_STORAGE, JSON.stringify(movies))

}
const addMovie = (title, body) => {
    // console.log('Adding new movie')
    // console.log(`title: ${title}`)
    // console.log(`body: ${body}`)
    let movies = fetchMovies()
    const movie = {
        title: title,
        body: body
    }

    const doubles = movies.filter((movie) => {
        return movie.title === title
    })

    if (doubles.length == 0) {
        notes.push(movie)
        saveNotes(movies)
        return movie
    }
}

const removeMovie = (title) => {
    console.log(`Removing movie: ${title}`)
}

const getMovie = (title) => {
    console.log(`Getting movie: ${title}`)
}


module.exports = {
    addMovie,
    fetchMovies,
    getMovie,
    removeMovie
}