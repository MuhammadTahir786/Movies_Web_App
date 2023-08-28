import Service from "."

// Movie api object is created to call where you want to hit api
const MoviesAPI = {
    getMovies(params?: string | null) {
        return Service.getCall(`/movies?&${params}`)
    },
}
export { MoviesAPI }