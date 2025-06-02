import Movie from '../Movie/Movie'
import styles from './Movies.module.css'

const Movies = (props) => {
  return (
    <>
    <section className={styles.shows}>
        <h2>{props.title}</h2>
        
        <div className={styles.showsParent}>
          {
            props.movies.map((movie)=>{
              return  <Movie movie={movie}/>
            })
          }
          
          
           

        </div>
    </section>
    </>
  )
}

export default Movies