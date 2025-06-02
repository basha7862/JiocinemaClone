import React from 'react'
import styles from './coursel.module.css'
import Shows from '../TrendingShows/Shows'
// import img1 from '../../assets/coursel1.avif'
// import img2 from '../../assets/coursel2.avif'



const Coursels = (props) => {
  return (
    <>
        
        <div className={styles.coursel}>
        <div className={styles.heading}>Hot Right Now 🔥</div>
          {
            props.movies.map((movie)=>(
              <img   src={movie.imageUrl} alt="poster" /> 
              
            ))
            
          
          }
         
        </div>
    </>
  
  // <>
  // <h1 className={styles.text}>HotRight Now🔥</h1>
  // <section className={styles.coursel}>
  //   {
  //     props.movies.map((movie)=>{
  //       return <Shows movie={movie}/>
  //     })
  //   }
  // </section>
  

  // </>
  )

}

export default Coursels