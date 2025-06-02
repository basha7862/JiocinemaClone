import styles from './shows.module.css'

import React from 'react'

const Shows = (props) => {
  return (
    <>
        <div className={styles.featureshows}>
            <img src={props.movie.imageUrl} alt="poster" />
            <div className={styles.MovieTitle}>
              {
                props.movie.name
              }
            </div>
            
        </div>
  
    </>
  )
}

export default Shows