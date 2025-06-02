import styles from './channel.module.css'
import channel1 from '../../assets/channel1.webp'
import channel2 from '../../assets/channel2.avif'
import channel3 from '../../assets/channel3.avif'
import channel4 from '../../assets/channel4.avif'
import channel5 from '../../assets/channel5.avif'
import channel6 from '../../assets/channel6.avif'
import channel7 from '../../assets/channel7.avif'
import channel8 from '../../assets/channel8.avif'
import channel9 from '../../assets/channel9.avif'




import React from 'react'

const Channels = () => {
  return (
    <>
    <div className={styles.text} >Channels</div>
    <div className={styles.channel}>
        <img src={channel1} alt="21" />
        <img src={channel2} alt="22" />
        <img src={channel3} alt="23" />
        <img src={channel4} alt="24" />
        <img src={channel5} alt="25" />
        <img src={channel6} alt="26" />
        <img src={channel7} alt="27" />
        <img src={channel8} alt="28" />
        <img src={channel9} alt="29" />
        
    
    </div>
    </>
  )
}

export default Channels