import React from 'react'
import styles from './trending.module.css'
import Shows from '../TrendingShows/Shows'


const Trendings = (props) => {
  return (
    <>
      <section className={styles.category}>
          <h1 className={styles.sectionTitle}>Trending Now🔥</h1>
        <div className={styles.shows}>
            {
              props.movies.map((movie)=>{
                return  <Shows movie={movie}/>
              })
            }
            

          </div>

      </section>
    </>
  )
}

export default Trendings