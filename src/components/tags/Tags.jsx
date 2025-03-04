import { useState } from 'react'
import styles from './tags.module.css'

const Tags = () => {
  let [tags,settags]= useState([
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Horror",
    "Thriller",
    "Animation",
    "Superhero",
    "Romantic",
    "Mystery",
    "Crime",
    "Adventure",
    "Documentary",
    "Musical",
    "War",
    "Historical",
    "Western",
  ])
  return (
    <div className={styles.tags}>
      {
        tags.map((tag)=>{
          return <p className={styles.tag}>{tag}</p>
        })
      }
        
    </div>
  )
}

export default Tags