// import './App.css';

import Header from "./components/Header/Header";
import {useAppSelector, useAppDispatch} from "./Hooks/storeHooks";
import {useEffect, useState} from "react";
import {getMovies} from "./features/movies/movieSlice";
import MovieCard from "./components/MovieCard/MovieCard";
import SearchBox from "./components/SearchBox/SearchBox";


function App() {
    const {darkTheme, movies} = useAppSelector((state) => state);
    const [searchTerm, setSearchTerm] = useState("");

    const dispatch= useAppDispatch();

    useEffect(() => {
        dispatch(getMovies())
    },[dispatch])

    const searchMovies = movies.data?.results?.filter(movie => {
        if(!searchTerm.length)return movie;
        if(!movie.title)return ;
        return movie.title.toLowerCase().includes(searchTerm);
    })

  return (
  <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header/>

          <div className="mb-12 flex items-center justify-between">
              <SearchBox setSearchTeam={setSearchTerm}/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {searchMovies &&
                  searchMovies.map((movie) => {
                     const {id, title, overview, poster_path} = movie;
                      return (
                          <MovieCard
                              key={id}
                              title={title}
                              overview={overview}
                              poster_path={
                              "https://image.tmdb.org/t/p/original" + poster_path
                            }
                          />
                      );
                  })
              }
          </div>
      </div>
  </div>
  );
}
export default App;
