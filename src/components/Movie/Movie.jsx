import { useState } from 'react'
import styles from './movie.module.css'

const Movie = (props) => {
  let [showdesc,setShowDesc]=useState(false)
  return (
    <>
     <div className={styles.show}>
        <img src={props.movie.imageUrl} alt="poster" />
        <div className={styles.MovieTitle} onMouseEnter={()=>setShowDesc(true)} onMouseLeave={()=>setShowDesc(false)} >
          {
          props.movie.name
        
          }
          <div className={styles.desc}>
          {
            showdesc && (props.movie.description
          )}
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Movie