import React from 'react'
import styles from './coursel.module.css'
// import img1 from '../../assets/coursel1.avif'
// import img2 from '../../assets/coursel2.avif'



const Coursels = (props) => {
  return (
    <>
    <div className={styles.text}>Hot Right Now 🔥</div>
    <div className={styles.coursel}>
        {/* <img src={img1} alt="" />
        <img src={img2} alt="" /> */}
        {
          props.movies.map((movie,index)=>(
            <img  key={index} src={movie.imageUrl} alt="poster" />

          ))
        }
       
        

    </div>
    </>
  )
}

export default Coursels