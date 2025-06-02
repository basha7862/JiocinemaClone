import styles from './header.module.css'
import Jclogo from '../../assets/JC.name.svg'
import crown from '../../assets/crown.svg'
import search from '../../assets/ic_search.svg'
import user from '../../assets/avatar_guest.svg'
import { useEffect, useState } from 'react'
import Movie from '../Movie/Movie'
import Movies from '../movies/movies'
import Shows from '../TrendingShows/Shows'


const Header = (props) => {
  let Navlinks =["Home","Sports","Movies","Tv Shows","More"]
  let [searchTitle,setSearchTitle]=useState("");
  let [filteredmovies,setFilteredMovies]=useState([])

  useEffect(()=>{
    if(searchTitle !=="")
    {
      let filterMovies= props.movies.filter((movie)=>
        {return movie.name?.toUpperCase().includes(searchTitle.toUpperCase())
  
      })
      setFilteredMovies(filterMovies)
    }
    else
    {
      setFilteredMovies([])
    }
    
    
  },[searchTitle])

  // useEffect(()=>{
  //     console.log(searchTitle)
  // },[searchTitle])

  return (
    <>
    <header className={styles.header}>
        <nav className={styles.Navigation}>
            <div className={styles.logo}>
                <img src={Jclogo} alt="logo"/>
                <div className={styles.premium}>&nbsp;<img src={crown} alt="" />&nbsp;Go Premium</div>
            </div>
            <ul className={styles.Navlinks}>
              {
                Navlinks.map((link,index)=>{
                  return <li key={index} className={styles.navlink}>{link}</li>
                })
              }
            </ul>
        </nav>
        <div className={styles.Mainsearch}>
          <div className={styles.SearchBox}>
            <div className={styles.icon}>
              <img src={search} alt="" />
            </div>
            <input  type="text"  onChange={(event)=>{
              setSearchTitle(event.target.value)}}
              placeholder='Movies Shows&More'className={styles.Search} />

            <div className={styles.icon}>
              {/* <img src={voice} alt=""  /> */}
            </div>
          </div>
          <img  className={styles.usericon}src={user} alt="icon" />
        </div>
       
    </header>
    {
      filteredmovies.length!==0?(
        <>
          {/* <div className={styles.overlay}></div> ✅ Add this for hiding the background */}
          <div className={styles.SearchResult}>
              {
              filteredmovies.map((movie)=>{
                  return <Movie movie={movie} key={movie.name}/>
              })
              }
          </div>
          
          </>
      )
      :null
      // :(
      //   <div className={styles.mainContent}>{props.children}</div>
      // )
    }
    
    
      
   
   
    </>
    
  )
}

export default Header
