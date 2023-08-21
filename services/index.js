export const popularMovies = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=39dc122df8aa283ecdf638553f25a4b7&language=en-US&page=1')
        const data = await res.json()
        return await data.results
    } catch (error) {
        console.log('errorvxvcx', error)
    }

}