import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <>
    <section className={styles.Footer}>
        <div className={styles.Box1}>
            <h2>Jio Cinema</h2>
            <li>For You</li>
            <li>Sports</li> 
            <li>Movies</li>
            <li>TV Shows</li>
        </div>
        <div className={styles.Box2}>
            <h2>Support</h2>
            <li>Help Center</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Content Complaints</li>
        </div>
        <div className={styles.Box3}>
        <h2>Connect With Us</h2>
        <a href="http://www.FaceBook.com" target='blank'><img src="https://www.jiocinema.com/images/facebook.svg" alt="FB"  /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="http://www.X.com" target='blank'><img src="https://www.jiocinema.com/images/x.svg" alt="" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="http://www.instagram.com" target='blank'><img src="https://www.jiocinema.com/images/instagram.svg" alt="" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="http://www.youtube.com"><img src="https://www.jiocinema.com/images/youtube.svg" alt="" /></a>


        </div>
        <div className={styles.Box4}>
            <h1>Download the App</h1>
            <a href="https://play.google.com/store/apps/details?id=com.jio.media.ondemand&hl=en_IN&gl=US" target='blank'><img src="https://www.jiocinema.com/images/googlePlay.svg" alt="http://www.PlayStore.com" /></a>&nbsp;&nbsp;
            <a href=""><img src="https://www.jiocinema.com/images/appleStore.svg" alt="http://www.AppleStore.com" /></a>
            
        </div>

    </section>
    </>
  )
}

export default Footer