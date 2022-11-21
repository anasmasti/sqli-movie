import { defineStore } from "pinia";

export const movieStore = defineStore("movie", 
{
    state: () => ({
        movies: [
            {
                id: 1,
                title: 'Data'
            }
        ]
    }),
    actions: {},
    getters: {
        getMovies(): any {
           return this.movies
        }
    }
}
)