import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Tags from '../components/tags/Tags'
import Channels from '../components/channels/Channels'
import Trendings from '../components/Trending/Trendings'
import Movies from '../components/movies/movies'
import Coursels from '../components/coursels/Coursels'
import Footer from '../components/footer/Footer'

export const Home = () => {
  
let [movies,setMovies]=useState([]);

let [featuredMovies,setFeaturedMovies] = useState([])
let [actionMovies,setActionMovies] = useState([])
let [teluguMovies,setTeluguMovies] = useState([])
let [topMovies,setTopMovies] = useState([])
let [topvolumeMovies,setTopVolumeMovies] = useState([])
let [courselmovies,setCourselMovies]=useState([])



useEffect(() => {
  const fetchMovies = async () => {
    try{
      // let MovieItems =await fetch("http://127.0.0.1:8000/movies/?format=json")
      let MovieItems =await fetch("https://basha786.pythonanywhere.com/movies/?format=json")
      let MovieData=await MovieItems.json()
      setMovies(MovieData);

      let coursel = MovieData.filter((movie) => movie.runtime <= 150);
      setCourselMovies(coursel.slice(0, 6));
   
      // filter for featured movies 
      let featMovies = MovieData.filter((movie)=>{return movie.featured===true})
      setFeaturedMovies(featMovies.slice(0,6))

      // filter for Action movies 
      let actMovies = MovieData.filter((movie)=>Array.isArray(movie.genre) && movie.genre.includes('Comedy'))
      setActionMovies(actMovies.slice(0,5))

        // filter for Telugu movies 
        let telMovies = MovieData.filter((movie)=>{return movie.language==="Telugu"})
        setTeluguMovies(telMovies.slice(0,5))
      // filter for top rated movies
      
        let topRatedMovies = MovieData.filter((movie)=>{return movie.imdb>=8.3 })
        setTopMovies(topRatedMovies.slice(0,5))

        let TopvolumeMovies = MovieData.filter((movie)=>{return movie.runtime>=170})
        setTopVolumeMovies(TopvolumeMovies.slice(0,5))

    }
    catch(error)
    {
      console.log(error)
    }
  };
  fetchMovies();
},[]);




  return (
    <>
    
   
      <Header movies={movies} />
      
        <Tags/>
        <Coursels title="Trending Right Now" movies={courselmovies}/>
        <Channels/>
        <Trendings movies={featuredMovies}/>
        <Movies title="Action Movies" movies={actionMovies}/>
        <Movies  title="Telugu Movies" movies={teluguMovies}/>
        <Movies  title="Top Movies" movies={topMovies} />
        <Movies  title="Most Volume Movies" movies={topvolumeMovies} />
        <Footer/>
     
    </>
  )
}
