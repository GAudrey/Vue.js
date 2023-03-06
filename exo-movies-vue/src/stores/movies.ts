import { defineStore } from "pinia"
import type { Movie } from "../types"

type StateShape = {
    movies: Movie[]
}

export const useMoviesStore = defineStore(
    'movies', 
    {
        state: (): StateShape => ({
            movies: [],
        }),
        actions: {
            async fetchMovies(){
                try {
                    const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=eb8af0634a3a768e07f0b8d8a7b0bd0a");
                    if(!response.ok) {
                        throw new Error(`HTPP error status: ${response.status}`)
                    }
                    const data = await response.json();
                    this.movies = data.results;
                } catch(error) {
                    console.log(error);
                    
                }
            },
            async searchMovies(query:string){
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eb8af0634a3a768e07f0b8d8a7b0bd0a&query=${query}`);
                    if(!response.ok) {
                        throw new Error(`HTPP error status: ${response.status}`)
                    }
                    const data = await response.json();
                    this.movies = data.results;
                } catch(error) {
                    console.log(error);
                    
                }
            }
        }
    }
);